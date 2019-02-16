FROM node:carbon-slim

ARG port
# Copy source
COPY . /usr/src/oumienet-api
# Create app directory
WORKDIR /usr/src/oumienet-api
# Install dependencies
RUN npm i -g @adonisjs/cli
RUN npm install
# Expose port
EXPOSE ${port}
# Start the server
CMD sh -c 'adonis serve'
