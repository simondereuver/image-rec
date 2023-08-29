# IMAGE RECOGNITION WEBSITE

This is a freetime project I will make during summer. The intent of this project is to learn how to make a website and using predefined AI models, in preparation for future courses.

The main idea of this project is to create a website where users are able to
upload a picture and a AI model will classify the image. As this is the first version it will be updated along the way when new ideas and features come to mind.

## Program specifications and languages

#### Server-side
The server-side of the website will be programmed using JavaScript with Node.js as the runtime enviroment including Express as the application framework.

#### Testing
Framework used for unit tests are Mocha alongside with testing libraries chai, chai-http, supertest and nyc (previously Istanbul) is used for codecoverage.

#### Client-side
The client side is programmed using JavaScript, HTML and CSS.

#### Database
SQLite is used for database implementation.

## Compiling and running instructions
Create a directory for where you want the project to reside and enter ```git remote add origin git+https://github.com/simondereuver/image-rec.git``` into the commandline while at the directory. Before installing dependencies and mor make sure you have [Node.js](https://nodejs.org/) installed.

To install Dependencies, devDependencies and SQLite simply run:
``` 
npm install
``` 
This will install everything you need to be able to run the web-application and creates a node_modules/ directory within the root direcory of the project.

To start the project go to the root directory of project and enter the following into the commandline:
``` 
node server.js
``` 
The server will now be up and running.

To visit it enter http://localhost:3000/index.html into your choice of web browser such as Google Chrome, this will take you to the Home-page of the website.

### Features
Upload an image to the website.
Image classification of uploaded pictures to the website.

More features to come.

## Kanban board
Click [here](https://github.com/users/simondereuver/projects/3) to view the Kanban board of the project.