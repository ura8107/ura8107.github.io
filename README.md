This repository contains the Jekyll source for my academic profile website.

The site uses the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) remote theme and publishes the generated static site from `docs/`.

## Local development

Install dependencies:

```sh
bundle install --path vendor/bundle
```

Build the production site:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

Preview locally:

```sh
JEKYLL_ENV=production bundle exec jekyll serve --host 127.0.0.1 --port 4000
```
