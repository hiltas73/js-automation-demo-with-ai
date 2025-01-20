# Self Enrollment Portal System

## Overview

In this project, I utilized JavaScript along with Tabnine AI and Perplexity AI, employing the Playwright automation tool. Additionally, I implemented BDD Cucumber for behavior-driven development. My development environment was set up in VS Code, where I installed several extensions, including:

- Better Comments
- Cucumber (Gherkin) Full Support
- Material Icon Theme
- NPM
- npm Intellisense
- NPM Run
- Playwright Snippets
- Tabnine

 Webpage I automated The Self Enrollment Portal System is designed to provide a secure and efficient checkout experience for customers purchasing products or services online. This system streamlines the enrollment process by allowing users to select products, enter personal details, choose payment plans, agree to terms and conditions, and complete payment processing seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Framework Structure and Usage](#framework-structure-and-usage)
- [Code Generation with Tabnine AI](#code-generation-with-tabnine-ai)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [Author](#author)

## Features

- Behavior-Driven Development (BDD) using Cucumber
- Automated testing with Playwright
- AI integration using Tabnine and Perplexity AI
- Easy setup and configuration

## Technologies Used

- **JavaScript**: The primary programming language.
- **Cucumber**: For BDD-style testing.
- **Playwright**: For browser automation.
- **Tabnine**: AI-powered code completion.
- **Perplexity AI**: For enhanced automation capabilities.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version v18 or higher)
- npm (Node Package Manager) v6 or higher, which comes with Node.js
- Visual Studio Code
- Git
- Playwright Test
- cucumber (v10 or higher)
- cucumber-html-reporter (v7 or higher)

To install necessary libraries, open your terminal and run:

npm install @playwright/test @cucumber/cucumber cucumber-html-reporter


### Installation

1. Clone the repository:

https://github.com/hiltas73/js-automation-demo-with-ai.git 


2. Navigate to the project directory:

cd your-repo-name


3. Install the dependencies:

npm install


## Framework Structure and Usage

[1.](features) The features folder
This folder is used for storing the feature files, each feature file has a unique tag name which can be used to run specific feature in package.json file

[2.](hooks) The hooks Folder
This folder contains the globalHooks for cucumber step definitions.
It also has the playwright utility for page & browser

[3.](pages) The pages Folder
This folder is used for storing webelements of the pages.
BasePage must be the parent class of all the page classes.
Every single page class must be added and initialized in the globalPagesSetup.js to be able to locate elements of each pages by using same page fixture of playwright

[4.](steps) The steps Folder
This folder is used for storing the step definitions of the features.
The file names of the steps should match with its feature file's name.

[5.](cucumber.cjs) cucumber.cjs File
A CommonJS configuration file for CucumberJS, managing settings for BDD-style automated tests. It includes paths for step definitions, support files, plugins, and output formatting options, allowing customization of test execution.

[6.](package.json) package.json File
The package.json file for the "js-automation-demo-with-ai" project includes several key sections:

name: Identifies the project as "js-automation-demo-with-ai".

version: Marks the current version at "1.0.0".

main: Points to the main entry file of the project, "index.js".

scripts: Defines custom scripts for the project.

dependencies: Lists project dependencies, including Cucumber, Playwright for testing, and dotenv for environment variable management.

type: Specifies the module system, set to "module" for ES Module support.

This setup facilitates BDD-style testing with CucumberJS and Playwright, and includes cross-platform support for viewing test reports.

## Code Generation with Tabnine AI

The majority of the code in this file has been generated using Tabnine AI. To utilize this feature, simply type your code after the `//` symbol and press Enter. Tabnine will then provide code suggestions, which you can accept by pressing the Tab key. Here are the examples:

1. [clickNextButton.js step definition file:](steps\getting-started\clickNextButton.js)
```
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
```

2. [startAndRefundDates.js step definition file:](steps\getting-started\startAndRefundDates.js)

```
import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('user is on the enrollment page', async function () {
    // login using startApplicationPage
    await startApplicationPage.login();
});

Then('the program start date is displayed', async function () {
    // assert that the program start date is visible on the page using the locators in startApplicationPage
    await expect(startApplicationPage.programStartDate).toBeVisible();

});

Then('the program refund date is displayed', async function () {
    // assert that the program refund date is visible on the page using the locators in startApplicationPage
    await expect(startApplicationPage.refundEndDate).toBeVisible();

});

Then('the displayed program start date is correct', async function () {
    // get the actual program start date from the UI using the locators in startApplicationPage
    const ACTUAL_START_DATE = await startApplicationPage.programStartDate.innerText();
    // get the expected start date from the qa_data.json file
    const EXPECTED_START_DATE = productInfo.startDate;
    // assert that the actual start date matches the expected start date
    expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
    // print the actual start date
    console.log(`Actual start date: ${ACTUAL_START_DATE}`);
    // print the expected start date
    console.log(`Expected start date: ${EXPECTED_START_DATE}`);

});

Then('the displayed program refund date is correct', async function () {
    // get the actual program refund date from the UI using the locators in startApplicationPage
    const ACTUAL_REFUND_DATE = await startApplicationPage.refundEndDate.innerText();
    // get the expected refund date from the qa_data.json file
    const EXPECTED_REFUND_DATE = productInfo.refundDate;
    // assert that the actual refund date matches the expected refund date
    expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);
// print the actual refund date
console.log(`Actual refund date: ${ACTUAL_REFUND_DATE}`);
// print the expected refund date
console.log(`Expected refund date: ${EXPECTED_REFUND_DATE}`);
});
```

## Running Tests

To run the tests, use the following command with the specified scenarios with tags:

npx cucumber-js --tags @yourTag


### Running Specific Tests

You can also run specific tests by specifying the feature file:

npx cucumber-js path/to/your/feature/file.feature


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
git checkout -b feature/YourFeature

3. Make your changes and commit them:
git commit -m "Add some feature"

4. Push to the branch:
git push origin feature/YourFeature

5. Open a pull request.


## Author

hiltas73 - [hiltas73](https://www.linkedin.com/in/halim-iltas/)