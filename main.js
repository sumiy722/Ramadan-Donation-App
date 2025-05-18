// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');
    const message = document.getElementById('message');
  
    // When the form is submitted
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const foodItem = document.getElementById('foodItem').value;
        const quantity = document.getElementById('quantity').value;
        const location = document.getElementById('location').value;
  
        try {
          const response = await fetch('/api/donations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              foodItem,
              quantity,
              location
            })
          });
  
          const data = await response.json();
  
          if (data.success) {
            message.textContent = 'Thanks for your donation!';
            form.reset();
          } else {
            message.textContent = 'Something went wrong. Please try again.';
          }
        } catch (error) {
          console.error(error);
          message.textContent = 'Error connecting to the server.';
        }
      });
    }
  });
  