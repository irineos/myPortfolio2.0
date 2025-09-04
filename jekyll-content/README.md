# 📁 Jekyll Content Structure

This directory contains the Jekyll-based content management system for the portfolio.

## 🏗️ Directory Structure

```
jekyll-content/
├── _data/                   # YAML data files
│   ├── profile.yml         # Personal information
│   └── resume.yml          # Education & experience
│
├── _projects/              # Individual project files (NEW!)
│   ├── voeska-mobile-app.md
│   ├── neural-network-mnist.md
│   ├── weather-app.md
│   ├── rock-paper-scissors-board.md
│   ├── text-to-speech-editor.md
│   ├── pi-day-monte-carlo.md
│   └── neural-network-library.md
│
├── assets/images/          # Static assets
│   ├── profile/           # Profile images
│   └── projects/          # Project screenshots
│
├── _site/                 # Generated output (auto-generated)
│   ├── profile.json
│   ├── projects.json
│   ├── resume.json
│   └── assets/
│
├── *.json                 # Liquid templates for JSON generation
├── _config.yml           # Jekyll configuration
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## 🆕 New Project Structure

### Why Individual Files?

The `projects.yml` file was becoming too large and difficult to maintain. Now each project has its own Markdown file with:

- **Front matter** (YAML metadata)
- **Markdown content** (detailed project description)
- **Better organization** (one file per project)
- **Easier editing** (focused content)

### Project File Format

```markdown
---
tag: 'Technology'
image: '/assets/images/projects/screenshot.png'
title: 'Project Name'
description: "Brief project description"
order: 1
links:
  - link: 'https://github.com/username/repo'
    icon: 'logo-github'
  - link: 'https://live-demo.com'
    icon: 'globe'
---

## Project Description

Full markdown content with:
- Rich formatting
- Code blocks
- Lists and headers
- Links and images

### Features

- Feature 1
- Feature 2

### Technologies

- Tech stack details
```

## 📝 Content Management

### Adding a New Project

1. Create a new file: `_projects/project-name.md`
2. Use the format above with appropriate front matter
3. Write detailed markdown content
4. Set the `order` field for sorting
5. Run `bundle exec jekyll build` to generate JSON

### Editing Existing Projects

1. Edit the corresponding `.md` file in `_projects/`
2. Modify front matter or markdown content as needed
3. Rebuild Jekyll to update the JSON output

### Project Ordering

Projects are sorted by the `order` field in the front matter:
- `order: 1` = First project
- `order: 2` = Second project
- etc.

## 🔧 Jekyll Configuration

The `_config.yml` now includes:

```yaml
collections:
  projects:
    output: false
    sort_by: order
```

This tells Jekyll to:
- Process files in `_projects/` as a collection
- Sort them by the `order` field
- Don't generate individual HTML pages (we only want JSON)

## 🚀 Build Process

The `projects.json` template processes the collection:

```liquid
{
  "projects": [
    {% for project in site.projects %}
    {
      "tag": "{{ project.tag }}",
      "title": "{{ project.title }}",
      "details": {{ project.content | markdownify | jsonify }}
    }
    {% endfor %}
  ]
}
```

## 📊 Benefits

### ✅ **Maintainability**
- One file per project = easier to find and edit
- Smaller files = faster to load and edit
- Clear separation of concerns

### ✅ **Scalability**  
- Easy to add new projects
- No single large file to manage
- Better version control (smaller diffs)

### ✅ **Flexibility**
- Each project can have unique content structure
- Rich markdown formatting per project
- Individual file management

### ✅ **Organization**
- Clean, descriptive filenames
- Order controlled by front matter
- Logical grouping

## 🔄 Migration Notes

The old `_data/projects.yml` has been replaced with individual files in `_projects/`. The generated JSON structure remains the same, so the Next.js application continues to work without changes.

## 🎯 Usage

After editing any project file:

```bash
# Build Jekyll
bundle exec jekyll build

# Copy to Next.js (or use build script)
cp _site/*.json ../nextjs-portfolio/public/

# Or use the automated build script
cd .. && ./build.sh
```
