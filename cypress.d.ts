import { mount } from "cypress/react";

/**
 * Declares the `mount` method in the global Cypress namespace.
 *
 * @global
 * @namespace Cypress
 * @interface Chainable
 */
declare global {
  namespace Cypress {
    interface Chainable {}
  }
}
