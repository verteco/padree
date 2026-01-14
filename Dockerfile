# Build Stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code (respects .dockerignore)
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy the build output to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE port 80 (default for Nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
