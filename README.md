app.dockerfile:

docker build -t app-image -f app.Dockerfile .
docker run -d --name app-container1 -p 3000:3000 app-image


cypress.dockerfile:

docker build -t cypress-tests -f cypress.Dockerfile .
docker run --add-host=host.docker.internal:host-gateway cypress-tests
