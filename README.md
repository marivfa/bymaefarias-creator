# By Mae — Creator Landing Page

Astro static site for **bymaefarias.com**. No React, backend, database or CMS required.

## 1. Open in VS Code

Open the folder `by-mae-creator-site` in Visual Studio Code, then open the integrated terminal.

```bash
npm install
npm run dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## 2. Where to edit content

### Portfolio / Reels
Edit:

`src/data/portfolio.ts`

Each Reel has:
- `title`
- `eyebrow`
- `reelUrl`
- `videoSrc`
- `poster`

For example:

```ts
videoSrc: '/videos/funche.mp4',
poster: '/images/posters/funche.jpg',
```

Put the actual files in:

- `public/videos/`
- `public/images/posters/`

The website currently shows designed placeholders until these files are added.

### English / Spanish copy
Edit:

`src/data/copy.ts`

English lives at `/` and Spanish at `/es/`.

### Email / Instagram
Edit:

`src/data/site.ts`

**Important:** `hello@bymaefarias.com` is currently a placeholder. Replace it with the real contact email before publishing.

## 3. Visual identity

The color tokens are at the top of:

`src/styles/global.css`

Current palette:

- Teal `#337B7D`
- Coral `#EC9577`
- Mustard `#E9AD26`
- Mint `#EAF4EF`
- Blush `#FDF0EB`

The site intentionally uses white as the dominant canvas so it stays more minimal than the concept mockup.

## 4. Portrait

The About section currently contains a placeholder. Once you have your portrait, add it under `public/images/` and replace the placeholder block in `src/components/About.astro` with an `<img>`.

## 5. Test production build

```bash
npm run build
npm run preview
```

The generated static site lives in `dist/`.

## 6. Push to GitHub

Create a new GitHub repository and run:

```bash
git init
git add .
git commit -m "Initial By Mae creator site"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 7. Enable GitHub Pages

In the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions**.
3. Push to `main`.
4. The included workflow `.github/workflows/deploy.yml` builds and publishes the Astro site automatically.

## 8. Custom domain

`public/CNAME` already contains:

`www.bymaefarias.com`

Keep it if this repository will replace the current website. GitHub Pages may still require confirming the custom domain in the repository Pages settings and your DNS records must continue pointing to GitHub Pages.

## Notes

- No Instagram embeds are used. This keeps the page faster and gives you full visual control.
- Each card can link back to the original Instagram Reel.
- Videos automatically play only while visible and remain muted/looped/inline.
- Motion respects `prefers-reduced-motion`.
- Portfolio items are data-driven, so adding/removing projects doesn't require copying page markup.

## V3 visual adjustments
- Hero typography and overall hero height reduced for a more editorial scale.
- Featured hero cards use a subtle floating motion.
- Service/collaboration section now includes lightweight inline SVG icons (no icon library dependency).
- Selected Work remains intentionally compact: no oversized category headline.

## V4 notes: brand, hero and video behavior

- **Brand:** keep `byMaeFarias` / `@bymaefarias` as the brand identity.
- **Creator name:** use **Mari** in personal copy and CTAs (`Hi, I'm Mari`, `Work with Mari`).
- Hero previews are intentionally **static**. They no longer autoplay, float, rotate, or show play buttons.
- For a better hero frame, set `heroPoster` in `src/data/portfolio.ts` to a curated JPG/WEBP still. This can be different from the regular card poster.
- `Selected Work` videos autoplay muted only when visible, and the site keeps **one portfolio video playing at a time**.
- Set the temporary or final portrait in `src/data/site.ts`:

```ts
aboutImage: '/images/about-mari.jpg'
```

Then place the file at `public/images/about-mari.jpg`.

## V5 configuration notes

### 1) Use the real byMaeFarias logo
Put your logo file in `public/images/`, for example:

`public/images/bymaefarias-logo.png`

Then edit `src/data/site.ts`:

```ts
logoSrc: '/images/bymaefarias-logo.png',
```

If `logoSrc` is empty, the text fallback is shown.

### 2) Hero content is now independent from Selected Work
The hero no longer pulls the first two portfolio videos. Configure two separate stills in `src/data/site.ts`:

```ts
heroVisuals: [
  { src: '/images/hero/hero-food.jpg', alt: '...', label: 'Food' },
  { src: '/images/hero/hero-motherhood.jpg', alt: '...', label: 'Motherhood' },
],
```

This lets you use different content in the hero and avoids the duplicated-video feeling.

### 3) Selected Work videos play inside the website
Clicking the round play button now plays/pauses the local video inline. The separate `View original Reel` link is the only element that opens Instagram.

Auto-play still activates only one visible portfolio/performance video at a time. Clicking another video makes that one the active video until it leaves the viewport.

### 4) About image
Set:

```ts
aboutImage: '/images/about-mari.jpg',
```

### 5) Important when moving from V4
If you already added your own MP4 files, posters, email, or portrait to a local V4 project, copy those assets/settings into V5. This ZIP intentionally does not contain your local video files.

## V8: thumbnails + native Reel proportions

Selected Work and Organic Performance now display vertical Reels at 9:16 instead of cropping them to squares.

For the cleanest portfolio presentation, add a custom thumbnail for every Reel under `public/images/posters/` and set its `poster` value in `src/data/portfolio.ts`. The thumbnail remains visible until Play is pressed; the real downloaded Reel then plays inline. Only the `View original Reel` link opens Instagram.

V8 also includes responsive layouts for desktop, tablet, and mobile. On standard phones Selected Work uses two 9:16 columns; on very narrow screens the performance feature stacks for readability.
