# Fetch Fundamentals Challenges 2

Challenges for practicing using fetch and async/await to connect to a REST API backend.

## Installing the Dependencies

You'll need to install all the dependencies for the app by running this command.

`npm install`

## Running the Backend

The backend for these challenges uses [json-server](https://www.npmjs.com/package/json-server), a fake REST API.

You'll first need to install json-server if you don't already have it installed.

`npm install -g json-server`

Then you can start the fake backend by running this command.

`npm run backend`

You'll need to run the backend in one terminal and the frontend (with `npm start`) in another.

To change the delay on responses, you can edit the json-server.json file and change the delay property (measured in milliseconds)
