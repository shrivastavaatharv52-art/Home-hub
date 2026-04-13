# Home Hub

Home Hub is a full-stack web application for student housing and rental platform.

## Folder Structure
/homehub
├── backend
│   ├── config
│   │   └── config.js
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── main.js
│   └── assets
│       └── images
│
├── database
│   ├── migrations
│   └── seeds
│
└── README.md

## Technologies Used
- HTML, CSS, JavaScript for frontend
- Node.js and Express for backend
- PostgreSQL for database

## Setup Instructions
1. Clone the repository.
2. Navigate to the `backend` directory and install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Set up the database (PostgreSQL).
4. Start the server:
   ```sh
   node server.js
   ```
5. Open `frontend/index.html` in your browser.