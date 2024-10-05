import Hapi from "@hapi/hapi";
import routes from "./routes/index.js";

/**
 * Initializes the Hapi server.
 *
 * Creates a Hapi server instance with specific configurations, including port, host, and CORS settings.
 * It registers routes from the routes file and starts the server.
 *
 * @async
 * @function init
 * @returns {Promise<void>} - Returns a promise that resolves when the server is successfully started.
 */
const init = async () => {
  // Create a new Hapi server instance with port and host configuration
  const server = Hapi.server({
    port: 9000, // The port on which the server will run
    host: "localhost", // The host where the server will run
    routes: {
      cors: {
        origin: ["*"], // Enable CORS for all origins
      },
    },
  });

  // Register routes from the routes file
  server.route(routes);

  // Start the server
  await server.start();

  // Log the server URI to the console
  console.log(`Server running at ${server.info.uri}`);
};

// Call the init function to start the server
init();
