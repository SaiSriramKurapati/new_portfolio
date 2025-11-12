# Portfolio Website

A modern, animated portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 **GitHub-inspired Design** - Clean, developer-centric UI
- ✨ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **Modern Stack** - Next.js 15 App Router, TypeScript, Tailwind CSS
- 🧩 **Component Library** - Built with shadcn/ui components
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── sections/             # Page sections
│   ├── Navigation.tsx         # Navigation component
│   └── Footer.tsx            # Footer component
└── lib/
    └── utils.ts              # Utility functions
```

## Customization

### Update Personal Information

Edit the following files to update your information:

- `components/sections/Hero.tsx` - Hero section with name and contact info
- `components/sections/Experience.tsx` - Professional experience
- `components/sections/Skills.tsx` - Skills and technologies
- `components/sections/Projects.tsx` - Projects showcase
- `components/sections/Education.tsx` - Education details
- `components/sections/Certifications.tsx` - Certifications

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `app/globals.css`. You can customize colors, spacing, and other design tokens there.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

MIT

