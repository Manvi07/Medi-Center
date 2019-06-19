This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
##Packages that are needed

\$ sudo npm i bootstrap

\$ sudo npm i redux

\$ sudo npm i react-redux

\$ sudo npm i reat-router-dom

##About the user dashboard

In the user dashboard consists of the following nav links:

1.Doctors available
2.Appointment form
3.History of the appointments

Doctors avialble page opens as the user is logged in.The user selects from the doctors currently available from the names listed ,for the online appointments.
Then the page redirects to the online appointments page with the name of the doctor selected in the previous page and the submit button submits the form which can be viewed in the history section of the dashboard.

## Contents of the src folder of the react-app and its flow

-The user dashboard folder consists of the components of the user dashboard which are
the appointment form ,doctors list ,history and navigation which are routed through the react-router-dom executed in the index.js file.

-As the user selects the doctors from the provided doctors list the name of the doctor gets stored in value variable of the object in the store created in the
index.js file.

-The value which consists of the name of the doctor is viewed at the top of the appointment page.Then user fills the appointment page and
the form gets submitted. And the values gets stored in the patient_data object in the store.

-The recent appointments made by the user can be viewed in the history page.

-The actions and reducers folder consists of the respective files for taking the actions and for updating the state according to the new value provided by the action. The combine reducers function (in index.js) combines the reducers and updates the state of the store.Which is in turn accessed by the various components of the user dashboard.

-Still many things to add in the future...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
