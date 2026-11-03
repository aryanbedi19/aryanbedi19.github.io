# Aryan Bedi personal site

This is a dependency-free static recovery of the public site, ready for a GitHub Pages user site at `aryanbedi19.github.io`. It does not include a `CNAME`; connect `aryanbedi.com` only after DNS is ready.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Test the homepage, `/playbooks/`, `/thoughts/`, and `/gallery/` before publishing.

## Editing

- Edit page content in `index.html`, `playbooks/index.html`, `thoughts/index.html`, and `gallery/index.html`.
- Shared visual styles are in `site.css`; theme selection and portrait flip behavior are in `site.js`.
- Portrait images are in `assets/aryan-casual.png` and `assets/aryan-conference.jpg`.

## GitHub Pages publishing

1. Put these files at the root of the `aryanbedi19.github.io` repository's `main` branch.
2. In GitHub Pages settings, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. Wait for the Pages deployment, then verify `https://aryanbedi19.github.io` and every route above.
4. Add a custom domain and `CNAME` only during the separate DNS cutover.

## Recovery note

The original source was unavailable, so this is a clean static reconstruction from the publicly served backup. The original playbooks page displayed an email modal that only set a local browser flag and showed a fake success state; this recovery deliberately does not recreate it. It instead offers a direct **Subscribe on Substack** link. No analytics, Lovable scripts, credentials, or email collection are included.
