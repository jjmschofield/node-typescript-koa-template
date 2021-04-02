# Node Webservice Template
An opinionated template to start a RESTful API project quickly.

You get:
* A koa webservice
* A postgres database
* Docker compose
* Env var based config
* A structure

## Getting Started

Checkout out [package.json](package.json) for the available scripts, but if you want to get going even quicker:

```shell
$ npm i
$ npm start
```

This will startup two containers, one that has your service (on port 3000) and one that has your database.

## Choices that have been made for you

You have:
* Sequelize as an ORM
* Joi for validation
* Boom for error handling
* Correlation ID and logging using a custom lib

## Structure

### Routes
[src/service/hero/routes](src/service/hero/routes/index.ts) - An example resource in your API, all route controllers exported in a single place

[src/service/hero/routes/create.ts](src/service/hero/routes/create.ts) - An example route controller, note that it contains absolutely no business logic

[src/service/server.ts](src/service/server.ts) - Server startup and route registration

### Resources

[src/service/lib/hero](src/service/lib/hero) - an example domain model managed by your service

[src/service/lib/hero/model.ts](src/service/hero/db/model.ts) - an example model, representing a repository if you like. Note `toPojo` is so that you don't loose control of your data layer by spreading your ORM models all over the system.

[src/service/lib/hero/create.ts](src/service/hero/lib/create.ts) - an example action, actions to be carried out on a resource actions are always verbs

[src/service/db](src/service/db) - DB setup, ORM model registration and sync

### service
[src/service](src/service) - you can copy this to get multiple services if you want (create new services in docker compose)

[src/lib](src/lib) - generic stuff that can be shared across services

## Gotchya's

Look out for:
* ORM model syncs that delete all your data each time the app starts
* The lack of a test runner
* The lack of migrations


