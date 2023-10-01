# Use an official Node.js runtime as a parent image
FROM node:16 as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN yarn build

# Expose port 3000, which is the port where the React app will run
EXPOSE 3000

# Command to start the React app
CMD ["yarn", "start"]
