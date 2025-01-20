import { StartApplicationPage } from "./pages/StartApplicationPage.js";
import { ReviewPaymentPage } from "./pages/ReviewPaymentPage.js";
import { PaymentPlanPage } from "./pages/PaymentPlanPage.js";

// Import OTHER PAGES CLASSES HERE...

/**
 * @type {import('./pages/StartApplicationPage.js').StartApplicationPage}
 */
export let startApplicationPage;

/**
 * @type {import('playwright').Page}
 */
export let page;

/**
 * @type {import('./pages/ReviewPaymentPage.js').ReviewPaymentPage}
 */
export let reviewPaymentPage;

/**
 * @type {import('./pages/PaymentPlanPage.js').PaymentPlanPage}
 */
export let paymentPlanPage;

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
    reviewPaymentPage = new ReviewPaymentPage(page);
    paymentPlanPage = new PaymentPlanPage(page);
    // INITIALIZE PAGE INSTANCES HERE...



};