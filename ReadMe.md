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

hiltas73 - [hiltas73](https://github.com/hiltas73)