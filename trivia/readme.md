# Trivia API
Sample Quiz:
```json
{
  "id": 1,
  "title": "Rome",
  "questionIds": [
    "5f9f1b9b0e1b9c0017a5f1a5",
    "645c9f5342ea81e2554c5f0a",
    "6239f838a72e7a347ac879d6"
  ],
  "createdAt": "2023-08-10T14:15:21.735Z"
}
```

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
