# ABI-Test app

## App Setup

Make sure you are into the **root app folder**.

### Stating app

To start the app be sure to have installed [NodeJS and npm](https://nodejs.org/) to test it out:

`$ node --version` 

`$ npm --version`

After that, you can install all the dependencies of the project executing:

`$ npm install` or `$ yarn` (if you have *yarn* installed)

Then finally you can start the app using the following command:

`$ npm run start` or `$yarn start`

### Run unit tests

To run unit tests you just need to run this command:

`$ npm test` or `$ yarn test`


## Docker setup

Make sure you are into the **root app folder**.

### Startgin app with docker

Just make sure that you have [Docker](https://www.docker.com/get-started) installed by testing

`$ docker version`

If every thing is ok you can run the following commands:

`$ docker build -t danilo-scavassa/abi-test .`

`$ docker run -p 3000:3000 -d danilo-scavassa/abi-test`

### Starting app with docker-compose

Just make sure that you have [docker-compose](https://docs.docker.com/compose/install/) installed by testing

`$ docker-compose --version`

All good? So you just need to run this command:

`$ docker-compose up`
