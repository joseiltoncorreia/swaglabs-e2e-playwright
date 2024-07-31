# deel_hometask

## Swag Labs Automated Tests
This project contains automated end-to-end tests for the Swag Labs assessment feature using Playwright, a powerful browser automation library for Node.js.

## Prerequisites
[Node.js]: Ensure you have *Node.js* installed. You can check by running *node -v* in your terminal.
[Playwright]: Install Playwright using *npm install -D @playwright/test*.
[Browsers]: Run npx playwright install to install the required browsers (Chromium, Firefox, WebKit).
[GitHub_Account]: You'll need a GitHub account to utilize the GitHub Actions workflow.

## Project Structure
[tests] Contains the Playwright test files (e.g., login.spec.js).
[pages] Contains the Playwright page objcts (e.g., LoginPage.js)
[.github/workflows/main.yml] Defines the GitHub Actions workflow configuration.

## Installation
1. Clone this repository:
    git clone <https://github.com/joseiltoncorreia/hometaskjs.git>

2. Navigate to the project directory:
    cd hometaskjs

3. Install dependencies:
    npm install

## Running Tests
[Locally]: Execute *npx playwright test* in your terminal. This will run the tests in headless mode by default. To see the browser UI, use *npx playwright test --headed*.

[GitHub_Actions]:  The workflow defined in *.github/workflows/web-tests.yml* will trigger automated test runs on each push to the repository. The workflow sets up the environment, installs dependencies, and runs the tests across different browsers and operating systems.

## Test Cases
 - Successful Login: Verify that a user with valid credentials can successfully log into the application.
 - Login with Invalid Username: Confirm that the application correctly handles and displays an error message when a user attempts to log in with an incorrect username.
 - Login with Invalid Password: Ensure that the application appropriately handles and displays an error message when a user attempts to log in with an incorrect password.
 - Login with Empty Username: Verify that the application prevents login attempts with an empty username field and provides appropriate feedback
 - Login with Empty Password: Ensure that the application prevents login attempts with an empty password field and provides appropriate feedback.
 - Add Product to Cart: Confirm that users can successfully add a product to their shopping cart.
 - Remove Product From Cart: Verify that users can remove a product from their shopping cart.
 - View Products Details: Ensure that users can view detailed information about a product.
 - Note: Due to time limitations, only a subset of the application's functionality has been selected for automated testing.

## Reporting
[Playwright_Reports]: Playwright generates detailed HTML reports with information about passed and failed tests, including screenshots and console logs. These reports are saved in the playwright-report folder.
[GitHub_Actions]: The workflow publishes test results in JUnit format to the GitHub Actions interface, providing a summary of test runs and highlighting any failures.