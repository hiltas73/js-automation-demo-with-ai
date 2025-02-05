import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage, reviewPaymentPage } from "../../globalPagesSetup.js";

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

When('user selects upfront payment option', async function () {
    // select the upfront payment option on the PaymentPlanPage
    await paymentPlanPage.upfrontPaymentFrame.click();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
 
});

Then('the next button is enabled', async function () {
    // verify that the nextButton in PaymentPlanPage is enabled
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
 
});

When('user selects installments payment option', async function () {
    // select the installments payment option on the PaymentPlanPage
    await paymentPlanPage.installmentsPaymentFrame.click();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
});

When('user clicks the next button', async function () {
    // user clicks on the activated next button on the PaymentPlanPage
    await paymentPlanPage.activeNextButton.click();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);

});

Then('the step {int} page is displayed', async function (int) {
    // verify that the step 3 ReviewPaymentPage is displayed by verifying paymentForm is visible
    await expect(reviewPaymentPage.paymentForm).toBeVisible();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
 });



