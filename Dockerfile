FROM node:carbon-slim

ARG port

# Create app directory
WORKDIR /usr/src/oumienet-api
# Install dependencies
RUN npm i -g @adonisjs/cli
# Expose port
EXPOSE ${port}
# Start the server
CMD sh -c 'adonis serve --dev --polling'
