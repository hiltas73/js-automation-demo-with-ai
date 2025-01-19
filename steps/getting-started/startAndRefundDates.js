import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('user is on the enrollment page', async function () {
    //login using startApplicationPage
    await startApplicationPage.login();
});

Then('the program start date is displayed', function () {
});

Then('the program refund date is displayed', function () {
});

Given('user is on the enrollment page', function () {
});

Then('the displayed program start date is correct', function () {
});

Then('the displayed program refund date is correct', function () {
});
