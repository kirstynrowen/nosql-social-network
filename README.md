# 18 NoSQL: Social Network API

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Questions](#questions)

## Description

This is an API that uses MongoDB for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Installation

- Run `npm i` to install dependencies

## Usage

- Run `npm start` to run the build and start the server

This application does not have a front end, and can be tested using Insomnia or Postman, etc.

## API Routes

The following user API routes have been configured:

- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id
- POST /api/users/:userId/friends/:friendId
- DELETE /api/users/:userId/friends/:friendId

And the following thought API routes have been configured:

- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id
- POST /api/users/:userId/friends/:friendId
- DELETE /api/users/:userId/friends/:friendId

## Walkthrough Video

The walkthrough video can be viewed [here.](https://www.loom.com/share/c9c2ec781c3444e592855c80808842c9?sid=49b209d2-2af7-4fd5-b5dd-31a71455769f)

## Questions and Contact Information

If you have any questions, please contact feel free to contact me here:

- Email: [kirstyn.rowen@gmail.com](mailto:kirstyn.rowen@gmail.com)
- GitHub: [kirstynrowen](https://github.com/kirstynrowen)
