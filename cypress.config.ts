import { defineConfig } from "cypress";

/**
 * Defines the configuration for cypress
 * 
 * @param {object} options - The configuration options.
 * @param {object} options.e2e - The options for end-to-end testing.
 * @param {string} options.e2e.baseUrl - The base URL for end-to-end testing.
 * 
 * @returns {void}
 */
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
