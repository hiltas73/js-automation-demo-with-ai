import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";


When('user enters first name', async function () {
    await startApplicationPage.firstNameInputBox.fill("John");
});

When('user enters last name', async function () {
    // enter last name
    await startApplicationPage.lastNameInputBox.fill("Doe");
});

When('user enters email address', async function () {
    // enter email address
    await startApplicationPage.emailInputBox.fill("johndoe@example.com");
});

When('user enters phone number', async function () {
    // enter phone number
    await startApplicationPage.phoneNumberInputBox.fill("1234567890");
});

When('user select how heard about us', async function () {
    // select how heard about us option as email
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
    await startApplicationPage.emailOptionFromDropDown.click();
});

When('user clicks on Next button', async function () {
    // click on the button based on the provided string
    await startApplicationPage.nextButton.click();
});

Then('user should be on Payment plan page', async function () {
    // verify that user is on the Payment plan page 
    await expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
    // wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
});
