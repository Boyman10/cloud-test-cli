Cloud Test Cli
--------------

This is the *Angular application* dealing with the micro-services provided by the Cloud Test repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Plugin in micro services

The current front end application should be linked to the CloudTest repository which features multiple micro services.
In order to have a full working environment, you need to follow the steps :

  1. Start config server
     a. docker-compose in config-repo
     b. ./mvnw spring-boot:run -pl spring-config  (8888 port)
  2. Start eureka (optional)
     a. ./mvnw spring-boot:run -pl eureka
  3. start db of micro user
     docker-compose in micro-user/db (postgres 5432) 
  4. Start Keycloak
    docker-compose
    http://localhost:8090/auth/
  5. Start micro user
     ./mvnw spring-boot:run -pl micro-user
  6. ng serve

