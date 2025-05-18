import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
const port = 3000;

// Middleware so your server can read JSON and serve files
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect to Supabase
const supabase = createClient(
    'https://abcd1234.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.something.else'
  );  

// POST endpoint: handles donation form
app.post('/api/donations', async (req, res) => {
  const { foodItem, quantity, location } = req.body;

  const { error } = await supabase
    .from('donations') // your table name in Supabase
    .insert([{ foodItem, quantity, location }]);

  if (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Something went wrong.' });
  } else {
    res.status(200).json({ message: 'Donation saved successfully!' });
  }
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
