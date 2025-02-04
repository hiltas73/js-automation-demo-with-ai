import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";

Given('user has completed step one with valid information', async function () {
    // fill in the first name, last name, emailling address, phone number and click on Next button on the StartApplicationPage
    await startApplicationPage.fillInStartApplicationForm();
    
});

Given('user is on step two of the enrollment process', async function () {
    // chooseAPaymentPlanText in PaymenyPlanPage is displayed
    await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
    
});

Then('the next button is disabled by default', async function () {
    // verify that the inactiveNextButton is disabled on the PaymentPlanPage
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
 
});
