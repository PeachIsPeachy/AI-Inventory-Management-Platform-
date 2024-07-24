FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (assuming your application listens on this port)
EXPOSE 3000

# Generate Prisma client
RUN npx prisma generate

# Start the application
CMD [ "npm", "run", "dev" ]
