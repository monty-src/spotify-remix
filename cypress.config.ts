import { defineConfig } from "cypress";

/**
 * Defines the configuration for the app.
 * 
 * @param {object} options - The configuration options.
 * @param {object} options.component - The options for the component.
 * @param {object} options.component.devServer - The options for the development server.
 * @param {string} options.component.devServer.framework - The framework used for the development server.
 * @param {string} options.component.devServer.bundler - The bundler used for the development server.
 * @param {object} options.e2e - The options for end-to-end testing.
 * @param {string} options.e2e.baseUrl - The base URL for end-to-end testing.
 * 
 * @returns {void}
 */
export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
