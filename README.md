# Games-Selling App

A modern, responsive web application for buying and selling games, built with React.js, Node.js, and Express.js. This application provides a user-friendly interface and robust backend services to ensure a seamless experience for users.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design:** A sleek, modern interface utilizing Material-UI and Tailwind CSS.
- **User Authentication:** Secure login and registration using JSON Web Tokens (JWT) and Bcrypt for password hashing.
- **RESTful API:** Robust backend built with Node.js and Express.js, integrating MongoDB for data persistence.
- **State Management:** Efficient state management using Recoil for a fluid user experience.
- **Seamless Navigation:** Intuitive routing with React Router for easy navigation throughout the app.
- **Data Validation:** Runtime type checking and validation using Zod.

## Technologies Used

- **Frontend:**
  - React.js (v18)
  - Vite
  - Material-UI (MUI)
  - Tailwind CSS
  - React Router
  - Recoil
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JSON Web Tokens (JWT)
  - Bcrypt
  - Zod

## Installation

To get started with the Games-Selling App, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/games-selling-app.git
   cd games-selling-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # For frontend
   cd frontend
   npm install

   # For backend
   cd ../backend
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the backend directory and add your MongoDB connection string and any other necessary environment variables.

4. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server in a new terminal window
   cd frontend
   npm run dev
   ```

## Usage

Once the servers are running, you can access the application at `http://localhost:3000` (or the port specified in your configuration). You can create an account, log in, browse available games, and make purchases.

## API Endpoints

Here are some key API endpoints available in the backend:

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | `/api/auth/register`    | Register a new user                  |
| POST   | `/api/auth/login`       | Log in an existing user              |
| GET    | `/api/games`            | Retrieve all games                   |
| POST   | `/api/games`            | Add a new game (admin only)         |
| DELETE | `/api/games/:id`        | Delete a game (admin only)          |

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize any sections to better fit your project or personal preferences!
