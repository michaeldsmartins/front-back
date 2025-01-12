# Backend Documentation

This is the backend part of the my-front-back-project. It is built using TypeScript and serves as the API for the frontend application.

## Getting Started

To get started with the backend, follow these steps:

1. **Install Dependencies**: Run `npm install` to install the required dependencies.

2. **Build the Project**: Use the command `npm run build` to compile the TypeScript files.

3. **Run the Server**: Start the server with `npm start`. The server will be available at `http://localhost:3000` by default.

## Project Structure

- `src/index.ts`: Entry point for the backend application.
- `src/controllers/index.ts`: Contains the `IndexController` class for handling routes.

## Deployment on Vercel

To deploy this backend on Vercel:

1. Ensure that your `package.json` includes a start script:
   ```json
   "scripts": {
     "start": "node dist/index.js",
     "build": "tsc"
   }
   ```

2. Create a `vercel.json` file in the root of your project to configure the deployment settings.

3. Set up any necessary environment variables in the Vercel dashboard.

## Additional Information

For more details on the backend implementation, refer to the code in the `src` directory.