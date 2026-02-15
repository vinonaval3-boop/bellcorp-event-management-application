Bellcorp Event Management Application

A full-stack Event Management platform where users can register, log in, discover events, and manage their event registrations through a personalized dashboard. The application implements secure JWT-based authentication, dynamic search and filtering, and backend validation for event capacity and duplicate registrations.

Tech Stack
Frontend

React (Vite)

React Router

Context API

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

bcryptjs

Tools

Git & GitHub

MongoDB Atlas

Postman / Insomnia

Running the Project Locally
1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/bellcorp-event-management-application.git
cd bellcorp-event-management-application

Backend Setup
2. Navigate to the Server Folder
cd server

3. Install Dependencies
npm install

4. Create Environment File

Inside the server folder, create a .env file and add:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Ensure your MongoDB Atlas network access allows your IP address.

5. Start the Backend Server
npm start


The backend will run at:

http://localhost:5000

Frontend Setup

Open a new terminal window.

6. Navigate to the Client Folder
cd client

7. Install Dependencies
npm install

8. Create Environment File

Inside the client folder, create a .env file and add:

VITE_BASE_URL=http://localhost:5000

9. Start the Frontend
npm run dev


The frontend will run at:

http://localhost:5173

API Endpoints (Examples)

POST /api/auth/register

POST /api/auth/login

GET /api/events

POST /api/registrations

Notes

Backend validates event capacity before registration.

Duplicate registrations are prevented at the server level.

JWT middleware protects sensitive routes.

Environment variables must be configured correctly before running the application.