# Cryptology Notes API

Basic Notes API implemented in the scope of Cryptology test task

The server is built with [Nest](https://github.com/nestjs/nest) framework and follows its best practices.

## Environment Variables

* `NODE_APP_PORT`: Port for running app (basic is 3000)
* `DATABASE_HOST`: PostgreSQL DB Host
* `DATABASE_NAME`: PostgreSQL DB Name
* `DATABASE_USER`: PostgreSQL DB User
* `DATABASE_PASSWORD`: PostgreSQL DB Password

## Required System Dependencies

* NodeJS 18.x
* npm 8+

## Installing Project Dependencies

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app in container with postgres

```bash
$ docker-compose up
```

## Swagger usage
When service successfully run please open your browser and got to http://localhost:3000/api-docs#/.

For API testing firstly you need to get `access_token`. Use `/login` endpoint and this credentials for authorization
```json
{
  "login": "admin",
  "password": "secretPassword"
}
```

in response you will receive `access_token` please use to authorize all endpoints;

## Test & Lint

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# run formatting
$ npm run format

# check formatting
$ npm run format:check

# run linter
$ npm run lint

# check linter
$ npm run lint:check
```