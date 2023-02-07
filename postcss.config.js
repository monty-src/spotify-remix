/**
 * Configuration for the PostCSS library.
 *
 * @typedef {Object} PostCSSConfig
 * @property {Object} plugins - An object of plugins to use with PostCSS.
 * @property {Object} plugins.tailwindcss - The configuration object for the tailwindcss plugin.
 * @property {Object} plugins.autoprefixer - The configuration object for the autoprefixer plugin.
 */
module.exports = {
  /**
   * An object of plugins to use with PostCSS.
   */
  plugins: {
    /**
     * The configuration object for the tailwindcss plugin.
     */
    tailwindcss: {},
    /**
     * The configuration object for the autoprefixer plugin.
     */
    autoprefixer: {},
  },
}
