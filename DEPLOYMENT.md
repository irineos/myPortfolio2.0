# Portfolio Deployment Guide

This repository contains a hybrid portfolio built with Jekyll for content management and Next.js for the frontend, automatically deployed to GitHub Pages.

## Architecture

- **Jekyll Content**: Manages portfolio data (projects, resume, profile) in `jekyll-content/`
- **Next.js Frontend**: Renders the portfolio UI in `nextjs-portfolio/`
- **GitHub Actions**: Automatically builds and deploys on content changes

## Deployment Process

### Automatic Deployment

The portfolio automatically deploys when you push changes to the `v2` branch that affect:

- Jekyll content (`jekyll-content/**`)
- Next.js application (`nextjs-portfolio/**`)
- Workflow configuration (`.github/workflows/deploy.yml`)
- Build script (`build.sh`)

### Manual Deployment

You can trigger a manual deployment from the GitHub Actions tab:

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. Select "Deploy Portfolio to GitHub Pages"
4. Click "Run workflow"

### Local Development

To test the build process locally:

```bash
# Run the complete build process
./build.sh

# Or run individual steps:
cd jekyll-content && bundle exec jekyll build
cp _site/*.json ../nextjs-portfolio/public/
cp -r _site/assets ../nextjs-portfolio/public/
cd ../nextjs-portfolio && npm run build
```

## Content Management

### Adding New Projects

1. Create a new markdown file in `jekyll-content/_projects/`
2. Follow the existing format with front matter
3. Add project images to `jekyll-content/assets/images/projects/`
4. Commit and push to `v2` branch

### Updating Profile/Resume

1. Edit `jekyll-content/_data/profile.yml` for profile information
2. Edit `jekyll-content/_data/resume.yml` for resume data
3. Commit and push to `v2` branch

### Updating Frontend

1. Make changes in `nextjs-portfolio/src/`
2. Test locally with `npm run dev`
3. Commit and push to `v2` branch

## GitHub Pages Configuration

The site is configured to deploy to GitHub Pages with:

- **Base Path**: `/myPortfolio2.0` (for repository-based deployment)
- **Output**: Static export (`next export`)
- **Images**: Unoptimized (for GitHub Pages compatibility)

## Workflow Details

The GitHub Actions workflow:

1. **Builds Jekyll content** using Ruby/Bundler
2. **Copies generated JSON and assets** to Next.js public folder
3. **Installs Node.js dependencies** for Next.js
4. **Builds Next.js application** with static export
5. **Deploys to GitHub Pages** using the official Pages action

## Troubleshooting

### Build Failures

- Check Ruby version compatibility in `jekyll-content/Gemfile`
- Verify Node.js version in `nextjs-portfolio/package.json`
- Ensure all required dependencies are listed

### Deployment Issues

- Verify GitHub Pages is enabled in repository settings
- Check that the workflow has proper permissions
- Review the Actions tab for detailed error logs

### Content Not Updating

- Ensure changes are pushed to the `v2` branch
- Check that modified files are in the watched paths
- Verify Jekyll build is generating new JSON files

## Repository Structure

```
myPortfolio2.0/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── jekyll-content/                 # Content management
│   ├── _data/                      # Profile and resume data
│   ├── _projects/                  # Project markdown files
│   └── _site/                      # Generated Jekyll output
├── nextjs-portfolio/               # Next.js frontend
│   ├── src/                        # React components
│   ├── public/                     # Static assets
│   └── out/                        # Built static site
└── build.sh                        # Local build script
```

## Live Site

The portfolio is automatically deployed to:
`https://[your-username].github.io/myPortfolio2.0/`
