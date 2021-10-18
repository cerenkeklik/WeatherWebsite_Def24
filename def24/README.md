This is an React Application that shows cities and its informations about weather. This app made for DEF24 job application.

I work with React and Redux for state management. I used redux-thunk and redux-persist for permanent states.

This project has two main pages: Home and About.

Homepage includes a search bar. With this search bar you can filter a city with name. If it is not included,
an alert says you the error. For this alert I added sweetalert2 package(yarn add sweetalert2).

Secondly this homepage includes a refresh button with another searchbar. Refresh button can be clickable 60 seconds
after your last click and it refreshes the information of my cities. Also, another search bar again searches a city but in out city list. If it does not contain this city, shows an error.

At the end of the page you can see all cities that I added from first searchbar and footer of the page You can also delete a city from your list. Using the footer, you can go second page: About

In about page there is the name of the app and its version. Also, you can see footer at the end of the page.

In App.js I managed the routes of my app. As you know there is two different page. So, it includes two different routes.

In index.js it includes my store and persistor. Store is for redux, redux-thunk and persistor for redux-persist. It makes my store permanent like local storage.

My application has five different folders in my src folder: apis, assets, components, redux and views.

-In apis folder I hold my weather api instance with axios and apiKey for weather API.
-In assets folder I hold css files and images.
-In components folder there are two different file: Footer and SearchBar. I added my searchbar for preventing the confusion. It is a container.
-In redux folder, I manage my redux as actions, contants, reducers and store. I requested API in actions and manage in reducers.
In views folder, there are my pages as you know home and about pages.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
