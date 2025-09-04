#!/bin/bash

# Portfolio Build Script
# This script builds Jekyll content and then builds the Next.js app

set -e  # Exit on any error

echo "🏗️  Starting Portfolio Build Process..."
echo "=================================="

# Step 1: Build Jekyll content
echo "📝 Step 1: Building Jekyll content..."
cd jekyll-content
echo "   → Running Jekyll build..."
bundle exec jekyll build
echo "   ✅ Jekyll build complete"

# Step 2: Copy Jekyll outputs to Next.js
echo "📋 Step 2: Copying Jekyll outputs to Next.js..."
cd ..
echo "   → Copying JSON files..."
cp jekyll-content/_site/*.json nextjs-portfolio/public/
echo "   → Copying assets..."
cp -r jekyll-content/_site/assets nextjs-portfolio/public/
echo "   ✅ Files copied successfully"

# Step 3: Build Next.js application
echo "🚀 Step 3: Building Next.js application..."
cd nextjs-portfolio
echo "   → Installing/updating dependencies..."
npm install --silent
echo "   → Running Next.js build..."
npm run build
echo "   ✅ Next.js build complete"

# Step 4: Summary
echo "=================================="
echo "🎉 Build Process Complete!"
echo ""
echo "📊 Build Summary:"
echo "   • Jekyll content: ✅ Generated"
echo "   • Assets copied: ✅ Done"
echo "   • Next.js built: ✅ Ready for deployment"
echo ""
echo "📁 Output locations:"
echo "   • Jekyll output: jekyll-content/_site/"
echo "   • Next.js output: nextjs-portfolio/out/"
echo ""
echo "🚀 Your portfolio is ready for deployment!"
