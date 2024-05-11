# Angular Front End Test

This an Angular test. The project is based on Angular 17 :) and needs Node 18.18.2 to run.

## Installation

`git clone https://github.com/chrismerino/angular-frontend-test.git`

Then install the dependencies:
`npm install`

## Run from Docker Image

First, make sure Docker is installed in your machine.

Then run:

`docker pull chrismerino/angular-frontend-test`

Verify the image has been pulled from DockerHub by running the command:

`docker images`

The image `chrismerino/angular-frontend-test` should be there.\
Now, run the project with the command:

`docker run -p 8080:80 chrismerino/angular-frontend-test`

Open your Web Browser and go to: `http://localhost:8080/`.

## Run the Project from Local Repository

To run the project from local repository:
`npm run start`

Then, open your Web Browser and go to: `http://localhost:4200/`

## Testing

The project has a few unit tests. You can start the testing suite by typing the command:

`npm run test`
