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
Make sure you have [Node.js](https://nodejs.org/) installed. To install the dependencies needed enter the following lines in the project root folder after Node.js has been properly installed.

Dependencies:
``` 
npm install express
``` 
devDependencies:
``` 
npm install chai chai-http mocha nyc supertest --save-dev
``` 
Database:
``` 
npm install sqlite3
``` 

To start the project go to the root folder of project and enter the following into the commandline:
``` 
node index.js
``` 
The server will now be up and running.

To visit it enter http://localhost:3000/index.html into your choice of web browser such as Google Chrome, this will take you to the Home-page of the website.


### Features
Upload an image to the website.
Image classification of uploaded pictures to the website.

More features to come.

## Kanban board
Click [here](https://github.com/users/simondereuver/projects/3) to view the Kanban board of the project.