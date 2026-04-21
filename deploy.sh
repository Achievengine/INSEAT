#!/bin/bash

set -e

echo "Starting deployment process..."

echo "1. Pulling latest changes from git..."
git pull origin main

echo "2. Installing dependencies..."
npm install

echo "3. Ensuring preview.png is correctly referenced..."
# Verify preview.png exists in public folder
if [ ! -f "public/preview.png" ]; then
    echo "Error: preview.png not found in public folder!"
    exit 1
fi
echo "✓ preview.png found in public folder"

echo "4. Building the project with prerendered SEO output..."
npm run build

echo "5. Verifying build contains preview.png..."
if [ ! -f "dist/preview.png" ]; then
    echo "Error: preview.png not found in dist folder after build!"
    exit 1
fi
echo "✓ preview.png found in dist folder"

DEPLOY_ROOT="/var/www/inseat-portfolio"

echo "6. Deploying to ${DEPLOY_ROOT}..."
rsync -av --delete dist/ "${DEPLOY_ROOT}/"

echo "7. Verifying deployment..."
if [ -f "${DEPLOY_ROOT}/preview.png" ]; then
    echo "✓ preview.png successfully deployed"
else
    echo "Error: preview.png not found in deployed folder!"
    exit 1
fi

# Check if index.html references preview.png
if grep -q 'content="/preview.png"' "${DEPLOY_ROOT}/index.html; then
    echo "✓ index.html correctly references preview.png"
else
    echo "Warning: index.html may not be referencing preview.png correctly"
fi

echo "Deployment completed successfully!"
