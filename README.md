[![Build Status](https://travis-ci.com/shonubijerry/mini-expense.svg?branch=develop)](https://travis-ci.com/shonubijerry/mini-expense)
[![Coverage Status](https://coveralls.io/repos/github/shonubijerry/mini-expense/badge.svg?branch=develop)](https://coveralls.io/github/shonubijerry/mini-expense?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# mini-expense

CRUD expense manager

## Hosted on Heroku
https://mini-exp.herokuapp.com

## API documentation 
https://mini-exp.herokuapp.com/api-docs

## Table of Content
 * [Getting Started](#getting-started)

 * [Prerequisites for installation](#Prerequisites)
 
 * [Installation](#installation)

 * [Test](#test)
 
 * [ API End Points Test Using Postman](#api-end-points)

 * [Features](#features)

 * [License](#lincense)

## Getting Started

### Prerequisites for installation
1. Node js
2. npm
3. Git

### Installation
1. Clone this repository into your local machine:
```
git clone https://github.com/shonubijerry/mini-expense.git
```
2. Install dependencies 
```
npm install.
```
3. Start the application by running the start script.
```
npm start-dev
```
4. Install postman to test all endpoints on port 3000.

### Run Test

```
npm test
```

## API End Points Test Using Postman

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>/api/v1/auth/signup</td>  <td>User signup</td></tr>

<tr><td>POST</td> <td>/api/v1/auth/signin</td>  <td>User signin</td></tr>

<tr><td>POST</td> <td>/api/v1/expenses</td>  <td>Create an expense</td></tr>

<tr><td>GET</td> <td>/api/v1/expenses</td>  <td>View all expenses</td></tr>td></tr>

<tr><td>GET</td> <td>/api/v1/expenses/:expenseId</td>  <td>Get an expense</td></tr>

</table>

## Features

### Users
* Users can sign up
* Users can login
* Users can create an expense.
* Users can view expenses.
* Users can view a single expense

## License
This project is licensed under The MIT License (MIT) - see the LICENSE.md file for details.

