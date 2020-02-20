# Node version (LTS)
FROM node:carbon-alpine

# Create app directory
WORKDIR /app

# Copy all package files to install all dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Bundle app source
COPY . .

# Exposed port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
