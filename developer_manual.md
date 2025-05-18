# Developer Manual

## How to Install

1. Clone the project to your local machine:

```bash
git clone https://github.com/sumiy722/ramadan-donation-app.git
cd ramadan-donation-app

2. Install the dependencies using npm
npm install

3. Make sure Node.js is installed
node -v
npm -v

How to Run
node server/server.js

http://localhost:3000/donation.html

API Endpoints
POST /api/donations
{
  "foodItem": "Rice",
  "quantity": 4,
  "location": "College Park"
}
