# Ikigai

A minimalist Hugo theme designed for personal portfolios and blogs. It features a clean design with self-hosted fonts, Bootstrap Icons for contact links, code blocks, and optional project feedback links to GitHub issues.

**Key features:**
- Minimalist, responsive design.
- Self-hosted static content (e.g. no external font requests).
- Code snippets.
- Contact links with icons from [Bootstrap Icons](https://icons.getbootstrap.com/).
- Optional feedback section with automatic GitHub issue links.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) version 0.123.7 or higher.

## Installation

### Adding the theme as a Git Submodule

To install this theme in your Hugo project:

1. Navigate to your Hugo site's themes directory:
   ```bash
   cd themes
   ```

2. Add the theme as a git submodule:
   ```bash
   git submodule add git@github.com:dancs-dev/ikigai.git
   ```

3. Synchronise and initialise the submodule:
   ```bash
   git submodule sync
   git submodule update --init --recursive --remote
   ```

4. Configure your site to use the theme by adding it to your `hugo.toml`:
   ```toml
   theme = 'ikigai'
   ```

### Updating the theme

To update to the latest version of the theme:

```bash
git submodule update --init --recursive --remote
```

## Configuration

### Required configuration

Add the following to your site's `hugo.toml` file:

```toml
[params]
    # Author information (displayed in footer copyright)
    [params.author]
        name = 'Your Name'

    # Feedback section configuration
    [params.feedback]
        enabled = true
        repository = 'https://github.com/username/repository'

    # Contact link examples
    [params.contact.github]
        name = 'GitHub'
        href = 'https://github.com/username'
        icon = 'bi bi-github'

    [params.contact.linkedin]
        name = 'LinkedIn'
        href = 'https://linkedin.com/in/username'
        icon = 'bi bi-linkedin'

    [params.contact.rss]
        name = 'RSS'
        href = 'index.xml'
        icon = 'bi bi-rss-fill'
```

### Content frontmatter

#### Optional parameters

Add these to your content files' frontmatter to enable additional features:

```toml
+++
title = 'My post title'
date = 2026-01-26T10:00:00+00:00
draft = false
# Brief description to show on index pages.
summary = 'Brief description to show on index pages.'
[params]
    # Adds a "View the code" link for project pages.
    repo = 'https://github.com/username/project-repo'
+++
```

### Customising Colours

The theme uses CSS custom properties for easy colour customisation. Override these in your site's custom CSS:

```css
:root {
  --main-background: #f5f9fd;    /* Main page background colour */
  --accent-background: hsl(212, 69%, 10%);    /* Header/footer background */
  --anchor-color: hsl(212, 69%, 35%);    /* Link colour */
}
```

### Available Bootstrap Icons

The theme includes Bootstrap Icons via self-hosted fonts. Common icons you might use:

- `bi bi-github` - GitHub logo.
- `bi bi-linkedin` - LinkedIn logo.
- `bi bi-envelope` - Email icon.
- `bi bi-rss-fill` - RSS feed icon.

Browse the full icon set at [icons.getbootstrap.com](https://icons.getbootstrap.com/).

## Development

### Theme structure

```
ikigai/
├── archetypes/              # Content templates
│   └── default.md           # Default frontmatter template
├── assets/
│   ├── css/
│   │   ├── main.css         # Main stylesheet with CSS variables
│   │   └── bootstrap-icons.css  # Bootstrap Icons styles
│   └── js/
│       ├── copybutton.js    # Code block copy functionality for code snippets
│       └── main.js          # General JavaScript
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── home.html        # Home page template
│   │   ├── list.html        # Index template
│   │   └── single.html      # Single page template
│   └── partials/
│       ├── head.html        # HTML head section
│       ├── head/
│       │   ├── css.html     # CSS assets
│       │   └── js.html      # JavaScript assets
│       ├── header.html      # Site header with title and menu
│       ├── menu.html        # Site menu
│       ├── footer.html      # Site footer
│       └── terms.html       # Taxonomy terms
└── static/
    ├── fonts/               # Self-hosted fonts
    │   ├── merriweather-*   # Heading font
    │   ├── ubuntu-*         # Body font
    │   ├── source-code-pro-* # Code font
    │   └── bootstrap-icons.* # Icon font files
    └── favicon.ico          # Default favicon
```

### Typography

The theme uses three self-hosted font families:

- **Merriweather** - Serif font for headings.
- **Ubuntu** - Sans-serif font for body text.
- **Source Code Pro** - Monospace font for code blocks.

### Testing Changes

As this is a theme and not a standalone site, test changes by using it within a Hugo site:

1. Create or use an existing Hugo site with this theme configured.
2. Start the development server:
   ```bash
   hugo server
   ```
3. Make changes to theme files and preview in the browser.
4. Hugo's live reload will automatically rebuild the site upon changes to content, layouts, or configuration.

## Credits

- Code block copy button implementation inspired by [Aaron Luna's blog post](https://aaronluna.dev/blog/add-copy-button-to-code-blocks-hugo-chroma/).
