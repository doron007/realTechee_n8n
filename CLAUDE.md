# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with TypeScript and Tailwind CSS, using the App Router architecture.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Dev Server**: Turbopack (enabled by default)

## Common Commands

```bash
# Install dependencies
# Note: If npm cache issues occur, use:
npm install --cache /tmp/npm-cache-temp

# Run development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

The development server runs on [http://localhost:3000](http://localhost:3000) by default.

**Note:** If you encounter npm cache permission errors, use the `--cache /tmp/npm-cache-temp` flag with npm commands.

## Project Structure

```
src/
├── app/              # App Router directory
│   ├── layout.tsx    # Root layout component
│   ├── page.tsx      # Home page component
│   └── globals.css   # Global styles with Tailwind directives
```

## Architecture

### App Router
This project uses Next.js App Router (not Pages Router). Key concepts:
- `layout.tsx` defines the root layout for all pages
- `page.tsx` files define route endpoints
- Server Components by default (use `'use client'` directive for client components)
- Metadata is exported from page/layout files

### Path Aliases
The project uses `@/*` import alias mapping to `./src/*`:
```typescript
import Component from '@/components/Component'
```

### Styling
- Tailwind CSS is configured in [tailwind.config.ts](tailwind.config.ts)
- Global styles in [src/app/globals.css](src/app/globals.css)
- CSS variables for theming: `--background` and `--foreground`
- Dark mode support via `prefers-color-scheme`

## Development Guidelines

### Creating New Pages
Create new routes by adding folders with `page.tsx` files in `src/app/`:
```
src/app/about/page.tsx → /about route
```

### Adding Components
Place reusable components in `src/components/` directory.

### Environment Variables
- Create `.env.local` for local environment variables (already gitignored)
- Access in Server Components: `process.env.VARIABLE_NAME`
- Prefix with `NEXT_PUBLIC_` for client-side access

### TypeScript
- Type definitions are in `tsconfig.json`
- Next.js auto-generates types in `.next/types/` during dev
- Use `next-env.d.ts` for Next.js type references
