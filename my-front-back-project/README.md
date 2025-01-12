# My Front-Back Project

This project is a full-stack application consisting of a frontend and a backend, designed to run on Vercel.

## Project Structure

- **frontend**: Contains the client-side application.
  - **src**: Source files for the frontend.
    - `index.html`: Main HTML file.
    - `styles.css`: CSS styles for the frontend.
    - `app.js`: Main JavaScript file for client-side logic.
  - `package.json`: Configuration file for the frontend npm project.
  - `README.md`: Documentation for the frontend.

- **backend**: Contains the server-side application.
  - **src**: Source files for the backend.
    - `index.ts`: Entry point for the backend application.
    - **controllers**: Contains route controllers.
      - `index.ts`: Exports the `IndexController` class.
  - `package.json`: Configuration file for the backend npm project.
  - `tsconfig.json`: TypeScript configuration file.
  - `README.md`: Documentation for the backend.

## Deployment on Vercel

To deploy this project on Vercel, follow these steps:

1. Ensure both the frontend and backend have the necessary scripts in their `package.json` files:
   - **Frontend**: Add a build script to compile assets.
   - **Backend**: Ensure a start script is present for Vercel to run the server.

2. Create a `vercel.json` file in the root directory to configure Vercel settings, including routing for the frontend and backend.

3. Set up any required environment variables for the backend in the Vercel dashboard.

This setup allows both the frontend and backend to be deployed and run seamlessly on Vercel.