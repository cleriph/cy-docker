# Use the official Cypress image
FROM cypress/included:10.0.0

# Set the working directory
WORKDIR /e2e

# Copy the project files into the container
COPY . /e2e

# Install project dependencies
RUN npm install

# Open Cypress test runner
CMD ["npm", "run", "cy:run"]
