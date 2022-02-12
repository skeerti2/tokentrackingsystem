# TokenManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Run Locally

To run locally, clone the git repository and run 'npm install' in the project directory to install all dependencies.


## Upcoming features

* Pagination for Transaction History Table to accomodate large data, sort/filters as per latest transaction, token count.
* State Management for persisting data using Redux
* User log in/Authentication to accomodate multiple users and related token, transaction and game details.

## Development server

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* The app is also hosted on [Heroku](https://arcadetokentracking.herokuapp.com/)

## Improvements 
* Show Validation Error if Token Balance is less than user's chosen game tokens (before or after submit is clicked) - Currently the validation is implemented where if a user tries to play a game that requires more tokens than what is available in the balance, the submit will not allow the transaction. However, for better user experience, I will be implementing an error message notification on form submit that clearly tells the user that they don't have sufficient tokens to play the game.
* Testing
* Pagination for transaction history table
