# Aryan Bedi's personal site

A dependency-free static site for GitHub Pages and the custom domain `aryanbedi.com`.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000> and check the home page plus `/thoughts/`, `/playbooks/`, and `/gallery/`.

## Editing

- Home-page content: `index.html`
- Writing, playbook, and gallery pages: their respective `index.html` files
- Shared styles: `site.css`
- Theme switch and portrait flip: `site.js`
- Portrait images: `assets/`

The HTML links to versioned copies of `site.css` and `site.js` through a `?v=` query string. Refresh that value across the HTML pages after changing a shared asset so returning visitors receive the matching version. The original portrait files are retained alongside the smaller WebP files used on the page.

## Publishing

Publish this directory from the root of the `main` branch of the `aryanbedi19.github.io` repository. In GitHub Pages, select **Deploy from a branch**, then `main` and `/ (root)`. The custom domain `aryanbedi.com` is configured separately through GitHub Pages and DNS; keep the source branch as `main`.

There are no build dependencies, analytics, email collection, or external font downloads.
