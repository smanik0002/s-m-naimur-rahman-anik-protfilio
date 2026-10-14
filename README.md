# S. M. Naimur Rahman Anik — Personal Portfolio

My personal portfolio site. I built this to have one clean place to show my academic background, technical skills, and the projects I've been working on as a CSE undergrad.
It's not just a static page — there's a Three.js particle background, 3D tilt cards, a live GitHub repo section, and even a small photo upload feature so I can swap my profile pictures without touching the code.

**Live:** [Add your Netlify link here after deploying]

---

## What's inside

- **Hero** — animated typing text, quick intro, and a circular photo frame with glowing rings
- **About** — bio, academic background, and a quick look at my focus areas
- **Education** — full timeline from school to university
- **Skills** — 8 technical skills with 3D tilt cards and progress bars
- **Projects** — pulls live repos from my GitHub account + some curated ones
- **Contact** — working form with confetti on submit, plus direct WhatsApp/email links
- **Photo Upload** — there's a "My Photos" button in the navbar that lets you upload 2 photos; they get saved in the browser's localStorage

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (with `vite-plugin-singlefile` so the build becomes one HTML file)
- **Tailwind CSS v4**
- **Three.js** — for the animated 3D background
- **Lucide React** — icons
- **Canvas Confetti** — for the little celebration on form submit
- **Netlify** — for hosting

---

## Running it locally

```bash
# 1. Clone the repo
git clone https://github.com/smanik0002/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server (runs on http://localhost:3000)
npm run dev
```

---

## Building for production

```bash
npm run build
```

This spits out a `dist/` folder. Because of `vite-plugin-singlefile`, the whole app gets bundled into one `index.html` (plus the `images/` folder). That's what you drag into Netlify.

---

## Deploying to Netlify

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder into the upload box
4. Done. Netlify will give you a link like `https://something.netlify.app`
5. You can rename the site from **Site configuration → Change site name**

The included `netlify.toml` already handles the SPA redirect so refreshing any route doesn't break.

---

## Changing my photos

Two ways:

**Option 1 — Use the website itself (easy)**
1. Click the **My Photos** button in the navbar
2. Select both photos
3. They're stored in your browser and applied instantly

**Option 2 — Permanent replacement (for deploys)**
1. Replace `public/images/Anik-1.jpg` and `public/images/Anik-2.jpg` with your own
2. Keep the exact same names (`Anik-1.jpg`, `Anik-2.jpg` — capital A, lowercase jpg)
3. Rebuild and redeploy

---

## Project structure

```
├── public/
│   └── images/
│       ├── Anik-1.jpg        # Blue shirt photo (hero avatar)
│       └── Anik-2.jpg        # Grey shirt photo (about portrait)
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── AcademicSection.tsx
│   │   ├── CardTilt.tsx      # Reusable 3D tilt wrapper
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PhotoUploadModal.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ThreeCanvas.tsx   # Three.js background
│   ├── context/
│   │   └── PhotoContext.tsx  # Photo state + localStorage
│   ├── data/
│   │   └── portfolioData.ts  # All personal info, skills, projects, education
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html                # Dev entry
├── standalone.html           # Single-file version
├── portfolio-single-file.html
├── netlify.toml
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Updating content

Almost everything you'd want to change lives in **one file**:

```
src/data/portfolioData.ts
```

That file holds:
- Personal info (name, email, phone, socials, bio)
- Education timeline
- Skills list
- Projects list
- Academic courses

Change it there, and the whole site updates.

---

## A few things to know

- The **Projects** section tries to fetch live repos from the GitHub API. If it fails (rate limit, offline, etc.), it just falls back to the curated list in `portfolioData.ts`. So it always shows something.
- The **photo upload** feature stores images in `localStorage` as base64. That means photos only persist in *that browser*. For permanent changes, replace the files in `public/images/`.
- Three.js background has `pointer-events: none` so it never blocks clicks.
- Card tilt uses a custom `CardTilt` component (no vanilla-tilt library needed in the React version).

---

## Contact

- **Email:** smank.u2023@gmail.com
- **WhatsApp:** +880 1999 459065
- **GitHub:** [@smanik0002](https://github.com/smanik0002)
- **Facebook:** [cloudboy.anik](https://www.facebook.com/cloudboy.anik)

---

## License

This is my personal portfolio. Feel free to look at the code for learning, but please don't copy it 1:1 and claim it as your own. If you use parts of it, a credit or link back is appreciated.

---

Honestly, this thing runs on coffee, Stack Overflow, and a lot of trial and error.  
If it inspired you, feel free to give it a star. If not, that's totally fine too.
