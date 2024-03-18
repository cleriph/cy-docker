This is a practice repo for running cypress tests in docker containers. 


### Steps to run Cypress tests in docker containers:

Create node app image:
`docker build -t app-image -f app.Dockerfile .`

Run node app container:
`docker run -d --name app-container1 -p 3000:3000 app-image`


Create cypress-tests image:
`docker build -t cypress-tests -f cypress.Dockerfile .`

Run cypress-tests container: 
(This starts the container and runs the cy tests headlessly)
`docker run --add-host=host.docker.internal:host-gateway cypress-tests`



### To stop and delete container:

`docker ps --all`
`docker stop [container ID or name]`
`docker rm [container ID or name]`

### To delete image:

`docker images`
`docker rmi [image ID or name]`