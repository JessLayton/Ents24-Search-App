# Ents24 Search App

### Setup

Add a .env file in the root directory:

```
REACT_APP_API_URL = '<>'
```

### Running the app

To run app in browser:

```
npm start
```

### Storybook

To run the app in Storybook:

```
npm run storybook
```

The Controls tab allows you to change the state of the components.  
The Interactions tab simulates user interactions with the page and its separate components.

### Tests

Interaction tests are set up with storybook testing library (this uses Jest and Testing library in the background)  
https://storybook.js.org/docs/react/writing-tests/interaction-testing  
To run the tests:

Make sure the application is running on Storybook. Then run:

```
npm test-storybook
```

OR  
Go to Storybook on http://localhost:6006 and see the Interactions tabs for test results for each story.
