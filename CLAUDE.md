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

# Run development server
npm run dev

# Run development server with Turbopack (if needed)
npm run dev:turbo

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
├── components/       # Reusable components
│   └── ui/          # shadcn/ui components
└── lib/             # Utility functions
    └── utils.ts     # cn utility for class merging
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
- Tailwind CSS is configured in [tailwind.config.ts](tailwind.config.ts) with shadcn/ui support
- Global styles in [src/app/globals.css](src/app/globals.css) with CSS variables
- shadcn/ui design system with HSL color variables for theming
- Dark mode support via `.dark` class and `prefers-color-scheme`
- Use `cn()` utility from `@/lib/utils` for conditional classes

## AWS Amplify Gen 2 Integration

This project is configured for deployment on AWS Amplify Gen 2 with:

### Backend Services
- **Authentication**: AWS Cognito with email/password login
- **Data**: GraphQL API with real-time subscriptions
- **Authorization**: Owner-based data access control

### Local Development with Cloud Backend
```bash
# Start cloud backend sandbox (generates amplify_outputs.json)
npx ampx sandbox

# Start frontend development server
npm run dev
```

### Key Files
- `amplify/` - Backend configuration (auth, data, functions)
- `src/app/amplify-provider.tsx` - Client-side Amplify configuration
- `amplify.yml` - Build configuration for Amplify hosting
- `amplify_outputs.json` - Generated backend connection details (gitignored)

## Development Guidelines

### Creating New Pages
Create new routes by adding folders with `page.tsx` files in `src/app/`:
```
src/app/about/page.tsx → /about route
```

### Adding Components
Place reusable components in `src/components/` directory.
- Use `src/components/ui/` for shadcn/ui components
- Follow shadcn/ui design patterns and conventions
- Import components using `@/components/ui/component-name`

### Environment Variables
- Create `.env.local` for local environment variables (already gitignored)
- Access in Server Components: `process.env.VARIABLE_NAME`
- Prefix with `NEXT_PUBLIC_` for client-side access

### TypeScript
- Type definitions are in `tsconfig.json`
- Next.js auto-generates types in `.next/types/` during dev
- Use `next-env.d.ts` for Next.js type references
- Amplify generates types for GraphQL schema in `amplify/data/resource.ts`

### Amplify Development
- Modify backend in `amplify/` directory
- Use TypeScript for backend configuration
- Authentication state managed by Amplify Authenticator
- GraphQL client auto-configured for authenticated requests

## Portal Design Guidelines

This application serves as a portal to multiple subpages, each connected to its own n8n workflow.

### Home Page Design
- Clean landing page with title, subtitle, and expandable cards
- Cards represent different workflow-enabled features
- Uses ResourceCardsGrid component for consistent card layout
- Mobile-responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)

### Current Portal Features
1. **Design Agent** - AI-powered design automation workflow
2. **Prompt Agent** - Smart prompt engineering and optimization
3. **Real-Time Insights from X** - Social media analytics and monitoring

### Component Guidelines
- Use framer-motion for smooth animations and interactions
- Cards should have hover states and visual feedback
- Maintain consistent spacing and typography
- Follow shadcn/ui design patterns for new components

## n8n Webhook Integration

The Real-Time Insights page (`/x-insights`) calls n8n webhooks directly from the client.

### Webhook Configuration
- **URL**: `https://realtechee.app.n8n.cloud/webhook-test/bafca7c5-dc53-4967-9f1b-c2f5b1048c00`
- **Method**: POST
- **CORS**: Must be configured in n8n webhook node (see `N8N_WEBHOOK_SETUP.md`)

### Request Format
**Main "Ask" button:**
```json
{
  "question": "user's question",
  "metadata": {
    "timestamp": "2025-10-16T16:20:00.000Z"
  }
}
```

**Category "Send Alert" buttons:**
```json
{
  "question": "user's question",
  "metadata": {
    "tool": "techUpdates|breaking_news|content_analysis|historical_events|memes_trends|community_pulse",
    "category": "Card title",
    "timestamp": "2025-10-16T16:20:00.000Z"
  }
}
```

### Response Format
Frontend parses n8n response: `data[0].response.body[0].output`
Supports multiple fallback formats for compatibility.

See `N8N_WEBHOOK_SETUP.md` for complete webhook configuration instructions.
