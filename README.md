# docker_node_sample
This repository explains how to build microservices in node with docker compose

### Recommend to use Vs code for it

# Initial Steps
First install Node.js using the OS specific commands.

Run the command npm init in the root folder for the project.

> npm init
Let install packages initially required to run the service:

> npm install express request body-parser cors dotenv nodemon --save

To build this microservice, let’s assume that we have the title of a Movie or TV series. The requirement wants the service to configure external API calls to get all movies that match the title.

Let’s build our service!

Create a Server to Accept Requests
For this, you need to create the server.js file, which is the primary file of the project.
create server js file(I only support linux and thinks that windows is shit, so command will be for Linux based OS) :
> touch server.js

create index js file  for defining routes:
> touch index.js


Now run this command to install all packages
> npm install

Flow goes like this :

http://localhost:4000/api  -> calls server.js -> calls routes.js -> calls search.js(in routes) -> calls searhCtrl.js -> calls TMDBService.js


*** Note please add below thing to git ignore to ignore node modules(mostly dependecies) and only focus on code that you are writing

*node_modules/*




# DOCKER STUFF
