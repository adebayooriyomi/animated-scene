# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

# Part 3: Testing

### I will test the App with the following Frameworks and Libraries:

Jest: As the primary testing framework due to its support for snapshots, async code, and its robust mocking capabilities.

React Testing Library: To test the components in a way that resembles how users interact with the application.

Cypress: For end-to-end testing to ensure that the application works as expected in a real browser environment.

Mock Service Worker (MSW): To mock network requests if the application needs to interact with external services.

### I will also perform so Unit Testing: 

Verify that the basic structure of the component renders as expected using Jest snapshots.

Test the animation state by clicks on the play and pause buttons, and checking if the corresponding class names are applied.

Mock the html2canvas function and test that it is called when the snapshot button is clicked, and ensure the simulated download process is initiated with the expected file name and data URL.