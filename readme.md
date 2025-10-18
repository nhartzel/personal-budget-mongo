# Personal Budget - MongoDB/Mongoose Fork

This project is a fork of the original [Personal Budget](https://github.com/nhartzel/personal-budget) application.

## Key Changes

The primary modification in this version is the backend integration:

* **Database:** Uses a local MongoDB instance.
* **ODM:** Implements Mongoose for interacting with the MongoDB database (fetching and adding budget data).
* **API:** Provides API endpoints (`/budget`) for the frontend to communicate with the database via Mongoose.

## Purpose

This fork demonstrates how to replace the original data source with a persistent MongoDB database using Mongoose for data modeling and interaction within a Node.js/Express backend.

## Running Locally

1.  **Ensure MongoDB is running** locally (e.g., via `brew services start mongodb-community`).
2.  Clone this repository.
3.  Navigate to the project directory: `cd personal-budget-mongodb`
4.  Install dependencies: `npm install`
5.  Start the server: `node server.js`
6.  Open `public/index.html` in your browser (or navigate to `http://localhost:3000` if served by Express).