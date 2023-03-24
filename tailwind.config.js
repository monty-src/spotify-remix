/**
 * @module tailwind.config
 *
 *
 * @author montier.elliott@gmail.com
 */
/** @type {import('tailwindcss').Config} */

/**
 * Configuration for the Tailwind CSS library.
 *
 *
 * @typedef {Object} TailwindConfig
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
