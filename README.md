# SWO Guide

Static website for [swoguide.com](https://swoguide.com). No build system is required.

## Deploy with GitHub and Cloudflare Pages

1. Create an empty GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. In Cloudflare, open **Workers & Pages**, choose **Create**, then **Pages** and connect the GitHub repository.
4. Use **None** or no framework preset, leave the build command empty, and set the output directory to the repository root.
5. After the first deployment, add `swoguide.com` under the Pages project's custom domains.
6. Add `www.swoguide.com` and redirect it to the primary domain if desired.

## Edit content

- Homepage: `index.html`
- Styles: `styles.css`
- Guides: `guides/<guide-name>/index.html`
- Policy pages: `about/index.html` and `privacy/index.html`

Do not add live AdSense code until the site has been approved. Use the exact `ads.txt` line provided in the AdSense account.
