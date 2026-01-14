# Build Stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files from the web directory
COPY web/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the web application source code
COPY web/ .

# Build the application
# This generates 'dist/index.html' and assets
RUN npm run build 

# Production Stage
FROM nginx:alpine

# Copy the build output to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Customized Nginx config could be added here if needed, 
# but default is usually fine for a simple SPA if we handle 404s (optional)

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
