#!/bin/bash

set -e

echo "Starting deployment process..."

echo "1. Pulling latest changes from git..."
git pull origin main

echo "2. Installing dependencies..."
npm install

echo "3. Building the project (skipping TypeScript checking)..."
npx vite build --mode production

echo "4. Deploying to /var/www/inseat..."
sudo rsync -av --delete dist/ /var/www/inseat/

echo "Deployment completed successfully!"