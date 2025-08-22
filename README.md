# Caleb Yang — Software Engineer Portfolio

A clean, minimal, and cozy lo-fi retro portfolio website built with Next.js and Tailwind CSS.

## ✨ Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with beautiful breakpoints
- **Performance Optimized**: Static export for fast loading
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Interactive Elements**: Retro terminal, smooth animations, easter eggs
- **SEO Ready**: Meta tags, Open Graph, Twitter cards

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom color palette
- **Language**: TypeScript for type safety
- **Deployment**: GitHub Pages with automatic CI/CD
- **Fonts**: Inter (UI) + IBM Plex Mono (code/retro accents)

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered interface
- **Cozy Lo-Fi**: Warm, muted color palette with retro vibes
- **Professional**: Polished interactions and smooth animations
- **Creative**: Interactive elements and playful details

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/calebjyang/calebjyang.github.io.git
   cd calebjyang.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build & Deploy

- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Deploy**: Automatically deployed to GitHub Pages on push to main branch

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/            # Reusable components (future)
└── lib/                   # Utility functions (future)
```

## 🎯 Customization

### Colors
The portfolio uses a custom lo-fi color palette defined in `tailwind.config.ts`:

- `bg`: Deep charcoal base
- `paper`: Card backgrounds
- `ink`: Primary text
- `muted`: Secondary text
- `teal`: Primary accent
- `peach`: Secondary accent
- `yellow`: Highlight color

### Content
Update the following files to customize your portfolio:

- `src/app/page.tsx` - Main content and projects
- `src/app/layout.tsx` - Metadata and SEO
- `tailwind.config.ts` - Colors and design tokens

## 🌐 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The workflow:

1. Triggers on push to main branch
2. Builds the Next.js app with static export
3. Deploys to GitHub Pages
4. Updates automatically

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

## 📄 License

Personal project - feel free to use as inspiration for your own portfolio.

---

Built with ❤️, ☕, and tidy pull requests by Caleb Yang
# Fri Aug 22 06:28:16 PDT 2025
