# Task Manager API

Here are the endpoints provided:

## `GET /api/projects`

Fetch a JSON array of projects.

## `GET /api/projects/:id`

Fetch a project in the database. The project is identified by ID and all properties are overwritten by the JSON object request body.

## `POST /api/projects`

Add a project to the database.

Send the project as a JSON object request body.

## `PUT /api/projects/:id`

Update a project in the database. The project is identified by ID and all properties are overwritten by the JSON object request body.

## `DELETE /api/projects/:id`

Delete the project with the given ID

## `GET /api/projects/:id/tasks`

Fetch a JSON array of tasks for the project with the given project's ID

## `GET /api/tasks`

Fetch a JSON array of tasks.

### Query Params

- `projectId` (optional) - only include tasks for the given project

## `GET /api/tasks/:id`

Fetch a JSON object for a single task with the given ID

## `POST /api/tasks`

Add a task to the database.

Send the task as a JSON object request body.

## `PUT /api/tasks/:id`

Update a task in the database. The task is identified by ID and all properties are overwritten by the JSON object request body.

## `DELETE /api/tasks/:id`

Delete the task with the given ID
