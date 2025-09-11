# Ikigai

## Features

- Minimalist design
- Contact links with icons from [Bootstrap Icons](https://icons.getbootstrap.com/)
- Facilitate discussion with automatic links to create an issue

## Installation

To install this theme in your Hugo project:

1. `cd themes`
1. `git submodule add git@github.com:dancs-dev/ikigai.git`
1. `git submodule sync`
1. `git submodule update --init --recursive --remote`

To update, run:

1. `git submodule update --init --recursive --remote`

## Configuration

Beyond the usual Hugo configuration:

```toml
[params]
    [params.author]
        name = '<name>'

    [params.feedback]
        enabled = true
        repository = '<github-repository-link>'

    # Add or remove contact links as required.
    [params.contact.github]
        name = 'GitHub'
        href = '<github-profile-link>'
        icon = 'bi bi-github'

    [params.contact.rss]
        name = 'RSS'
        href = 'index.xml'
        icon = 'bi bi-rss-fill'
```
