# Forum API
Sample Question:
```json
{
  "id": 3,
  "title": "Just why?",
  "description": "Can anyone tell me why?",
  "tags": [
    "metaphysics",
    "language"
  ],
  "votes": 100,
  "createdAt": "2023-08-07T18:00:56.270Z"
}
```

Sample Answer:
```json
{
  "id": 3,
  "questionId": 3,
  "title": "Because",
  "description": "just because",
  "votes": -2,
  "createdAt": "2023-08-07T18:00:56.347Z"
}
```

Here are the endpoints provided:

## `GET /api/questions`
Fetch a JSON array of questions.

### Query Params
* `searchTerm` (optional) - filter by a string contained in the question title or description
* `tags` (optional) - filter by one or more tags (comma-separated)

## `GET /api/questions/:id`
Fetch a JSON object for a single question with the given ID

## `POST /api/questions`
Add a question to the database.

Send the question as a JSON object request body.

## `PUT /api/questions/:id`
Update a question in the database. The question is identified by ID and all properties are overwritten by the JSON object request body.

## `DELETE /api/questions/:id`
Delete the question with the given ID

## `GET /api/questions/:id/answers`
Fetch a JSON array of answers for the question with the given ID

## `GET /api/answers`
Fetch a JSON array of answers.

### Query Params
* `questionId` (optional) - only include answers for the given question

## `GET /api/answers/:id`
Fetch a JSON object for a single answer with the given ID

## `POST /api/answers`
Add a answer to the database.

Send the answer as a JSON object request body.

## `PUT /api/answers/:id`
Update a answer in the database. The answer is identified by ID and all properties are overwritten by the JSON object request body.

## `DELETE /api/answers/:id`
Delete the answer with the given ID
