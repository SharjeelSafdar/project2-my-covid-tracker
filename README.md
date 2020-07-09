## Project 2: COVID-19 Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was created for submission in Pana Cloud Bootcamp 2020.

### Link to Web App

The web app has been deployed to Surge, and can be accessed [here](https://covid19-tracker-sharjeel.surge.sh/).

### Features

The following are some of the features of the app:
- Shows current number of confirmed cases, active cases, recoveries and deaths.
- Shows the number of active cases, recoveries and deaths as a doughnut to make more sense of these numbers.
- Shows the recovery and death rates on another doughnut chart.
- Shows the history of cases since Jan. 22, 2020.
- Shows the above visuals for any country the user selects from a drop down menu.

### Learning Outcomes
The following are some of the learning outcomes of this project:
- Using [Material UI](https://material-ui.com/) with React to create an interactive UI
- Making the app mobile responsive.
- Using [Chart.js](https://www.chartjs.org/) with [React Chartjs 2](https://www.npmjs.com/package/react-chartjs-2).
- Customizing chart appearance, labels, onclick events etc.
- Implementing Render-as-You-Fetch approach using [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html). Displaying a fallback UI while the data is being fetched.
- Creating a Suspense compatable [custom hook](https://github.com/SharjeelSafdar/project2-my-covid-tracker/blob/master/src/api/useAsyncResource.js) to fetch data without `useEffect` hook. (The custom hook is inspired by [use-async-resource](https://github.com/andreiduca/use-async-resource) library. But it had some bugs: so, I created my own custom hook to cater my needs.)
- Creating and using [ErrorBoundary](https://reactjs.org/docs/concurrent-mode-suspense.html) component to catch JS errors in app and show a fallback UI.

### API Used
[Disease.sh](https://disease.sh/)