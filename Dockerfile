# ---- Base Node ----
FROM node:18-alpine AS base
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install project dependencies
RUN npm install --production && npm cache clean --force

# ---- Development ----
FROM base AS development

# Copy all project files
COPY . .

# Assign execution permissions to the entrypoint script
RUN chmod +x /app/etc/bin/entrypoint.sh

# Expose the listening port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
