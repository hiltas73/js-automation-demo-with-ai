import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('user is on the enrollment page', async function () {
    //login using startApplicationPage
    await startApplicationPage.login();
});

Then('the program start date is displayed', async function () {
    // assert that the program start date is visible on the page using the locators in startApplicationPage
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the program refund date is displayed', async function () {
    // assert that the program refund date is visible on the page using the locators in startApplicationPage
    await expect(startApplicationPage.programRefundDate).toBeVisible();
});

Then('the displayed program start date is correct', async function () {
    // get the actual program start date from the UI using the locators in startApplicationPage
    const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
    // get the expected start date from the qa_data.json file
    const EXPECTED_START_DATE = productInfo.programStartDate;

    // assert that the actual start date matches the expected start date
    expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);

    // print the actual start date
    console.log(`Actual start date: ${ACTUAL_START_DATE}`);
    // print the expected start date
    console.log(`Expected start date: ${EXPECTED_START_DATE}`);
});

Then('the displayed program refund date is correct', async function () {
    // get the actual program refund date from the UI using the locators in startApplicationPage
    const ACTUAL_REFUND_DATE = await startApplicationPage.programRefundDate.innerText();
    // get the expected refund date from the qa_data.json file
    const EXPECTED_REFUND_DATE = productInfo.programRefundDate;

    // assert that the actual refund date matches the expected refund date
    expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);

    // print the actual refund date
    console.log(`Actual refund date: ${ACTUAL_REFUND_DATE}`);
    // print the expected refund date
    console.log(`Expected refund date: ${EXPECTED_REFUND_DATE}`);
});
