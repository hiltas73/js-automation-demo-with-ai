import { StartApplicationPage } from "./pages/StartApplicationPage.js";

// Import OTHER PAGES CLASSES HERE...

/**
 * @type {import('./pages/StartApplicationPage.js').StartApplicationPage}
 */
export let startApplicationPage;

/**
 * @type {import('playwright').Page}
 */
export let page;
// ADD OTHER PAGE CLASS REFERENCES HERE...


/**
 * Initializes the global page elements and instances for the automation framework.
 * 
 * @param {import('playwright').Page} argPage - The Playwright Page instance to be used for interacting with the web pages.
 * @returns {void} This function does not return any value.
 */
export const initElements = (argPage) => {
    page = argPage;
    startApplicationPage = new StartApplicationPage(page);

    // INITIALIZE PAGE INSTANCES HERE...



};