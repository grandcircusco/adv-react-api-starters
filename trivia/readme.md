# Trivia API

Here are the endpoints provided:

## `GET /api/quizzes`

Fetch a JSON array of quizzes.

## `GET /api/quizzes/:id`

Fetch a JSON object for a single quiz with the given ID

## `POST /api/quizzes`

Add a quiz to the database.

Send the quiz as a JSON object request body.

## `PUT /api/quizzes/:id`

Update a quiz in the database. The quiz is identified by ID and all properties are overwritten by the JSON object request body.

## `DELETE /api/quizzes/:id`

Delete the question with the given ID
