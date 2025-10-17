# Design System Reference
## Apple-Inspired Minimalist Theme

**Last Updated**: October 16, 2025

---

## Color Palette

### Light Theme (Default)
```css
Background Colors:
- Primary BG:    #ffffff (pure white)
- Secondary BG:  #f5f5f7 (light gray - cards, sections)
- Tertiary BG:   #e8e8ed (subtle dividers)

Text Colors:
- Primary Text:   #1d1d1f (near black)
- Secondary Text: #6e6e73 (medium gray)
- Tertiary Text:  #86868b (light gray - labels)

Border Colors:
- Subtle Border:  #d2d2d7 (light gray)
- Medium Border:  #86868b (medium gray)
```

### Dark Theme
```css
Background Colors:
- Primary BG:    #000000 (pure black)
- Secondary BG:  #161617 (dark gray - cards, sections)
- Tertiary BG:   #1d1d1f (slightly lighter - dividers)

Text Colors:
- Primary Text:   #f5f5f7 (off-white)
- Secondary Text: #a1a1a6 (light gray)
- Tertiary Text:  #6e6e73 (medium gray - labels)

Border Colors:
- Subtle Border:  #2c2c2e (dark gray)
- Medium Border:  #48484a (medium gray)
```

### Accent Colors (USE SPARINGLY)
```css
Primary Accent (CTAs):
- Orange Gradient: linear-gradient(135deg, #ff9500, #ff6b35)
- Usage: Primary buttons, active states, key icons

Secondary Accent (Links):
- Blue: #0071e3 (Apple's signature blue)
- Usage: Text links, informational icons

Status Colors:
- Success: #30d158 (green)
- Warning: #ffd60a (yellow)
- Error:   #ff453a (red)
- Info:    #64d2ff (cyan)
```

---

## Typography

### Font Family
```css
Sans-serif stack (system fonts):
font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI',
             'Helvetica Neue', Arial, sans-serif;
```

### Type Scale
```css
Display:    clamp(48px, 5vw, 80px)  / font-weight: 700 / line-height: 1.05
Heading 1:  clamp(40px, 4vw, 56px)  / font-weight: 600 / line-height: 1.1
Heading 2:  clamp(32px, 3vw, 40px)  / font-weight: 600 / line-height: 1.15
Heading 3:  clamp(24px, 2vw, 32px)  / font-weight: 600 / line-height: 1.2
Body Large: 20px / font-weight: 400 / line-height: 1.5
Body:       17px / font-weight: 400 / line-height: 1.55
Body Small: 14px / font-weight: 400 / line-height: 1.6
Caption:    12px / font-weight: 400 / line-height: 1.65
```

### Font Weights
- Regular: 400 (body text)
- Medium:  500 (subtle emphasis)
- Semibold: 600 (headings, buttons)
- Bold: 700 (display text only)

---

## Spacing Scale

Based on 8px grid system:

```css
4px   - xs   - Tight spacing (icon gaps, small padding)
8px   - sm   - Compact spacing (input padding, small gaps)
16px  - md   - Standard spacing (card padding, element gaps)
24px  - lg   - Comfortable spacing (section internal)
32px  - xl   - Generous spacing (between components)
48px  - 2xl  - Section spacing (vertical rhythm)
64px  - 3xl  - Large section breaks
80px  - 4xl  - Major section spacing (hero to content)
120px - 5xl  - Maximum spacing (page sections)
```

---

## Component Patterns

### Cards
```
Light Mode:
- Background: #ffffff
- Border: 1px solid #d2d2d7
- Shadow: 0 2px 8px rgba(0,0,0,0.04)
- Hover Shadow: 0 4px 16px rgba(0,0,0,0.08)
- Hover Transform: translateY(-2px)
- Transition: all 300ms ease

Dark Mode:
- Background: #161617
- Border: 1px solid #2c2c2e
- Shadow: 0 2px 8px rgba(0,0,0,0.3)
- Hover Shadow: 0 4px 16px rgba(0,0,0,0.5)
```

### Buttons

#### Primary Button (Accent)
```css
Light & Dark:
- Background: linear-gradient(135deg, #ff9500, #ff6b35)
- Text: #ffffff
- Padding: 12px 24px
- Border Radius: 12px
- Font Weight: 600
- Hover: brightness(1.1)
- Active: scale(0.98)
```

#### Secondary Button
```css
Light Mode:
- Background: #f5f5f7
- Text: #1d1d1f
- Border: 1px solid #d2d2d7
- Hover Background: #e8e8ed

Dark Mode:
- Background: #1d1d1f
- Text: #f5f5f7
- Border: 1px solid #48484a
- Hover Background: #2c2c2e
```

#### Ghost Button
```css
Light Mode:
- Background: transparent
- Text: #1d1d1f
- Hover Background: #f5f5f7

Dark Mode:
- Background: transparent
- Text: #f5f5f7
- Hover Background: #1d1d1f
```

### Inputs
```css
Light Mode:
- Background: #ffffff
- Border: 1px solid #d2d2d7
- Text: #1d1d1f
- Placeholder: #86868b
- Focus Border: #ff9500
- Focus Shadow: 0 0 0 4px rgba(255, 149, 0, 0.1)

Dark Mode:
- Background: #161617
- Border: 1px solid #48484a
- Text: #f5f5f7
- Placeholder: #6e6e73
- Focus Border: #ff9500
- Focus Shadow: 0 0 0 4px rgba(255, 149, 0, 0.15)

Sizing:
- Height: 48px (standard), 56px (large)
- Padding: 12px 16px
- Border Radius: 12px
- Font Size: 17px
```

### Modals
```css
Backdrop:
- Background: rgba(0, 0, 0, 0.7)
- Backdrop Filter: blur(8px)

Modal Container:
Light Mode:
- Background: #ffffff
- Border: 1px solid #d2d2d7
- Shadow: 0 20px 60px rgba(0, 0, 0, 0.2)
- Border Radius: 16px
- Max Width: 640px (small), 896px (large)
- Padding: 32px

Dark Mode:
- Background: #1d1d1f
- Border: 1px solid #48484a
- Shadow: 0 20px 60px rgba(0, 0, 0, 0.8)
```

---

## Animation Guidelines

### Timing Functions
```css
Ease Out:     cubic-bezier(0.25, 0.46, 0.45, 0.94) - For entrances
Ease In:      cubic-bezier(0.55, 0.055, 0.675, 0.19) - For exits
Ease In Out:  cubic-bezier(0.645, 0.045, 0.355, 1) - For transitions
Spring:       Use framer-motion spring with defaults
```

### Durations
```css
Fast:     150ms - Small UI changes (button states)
Medium:   300ms - Standard transitions (hovers, reveals)
Slow:     500ms - Large movements (modals, slides)
Very Slow: 800ms - Page transitions (rare)
```

### Animation Patterns
```javascript
// Fade In
opacity: 0 → 1
duration: 300ms

// Slide Up
y: 20px → 0
opacity: 0 → 1
duration: 400ms

// Scale In
scale: 0.95 → 1
opacity: 0 → 1
duration: 300ms

// Hover Lift
transform: translateY(0) → translateY(-2px)
shadow: small → medium
duration: 200ms
```

---

## Responsive Breakpoints

```css
Mobile:       < 640px
Tablet:       640px - 1024px
Desktop:      1024px - 1440px
Large Desktop: > 1440px

Container Max Widths:
- Mobile: 100% - 32px padding
- Tablet: 100% - 48px padding
- Desktop: 1200px
- Large: 1440px
```

---

## Usage Guidelines

### DO
- Use gray, black, white for 90%+ of the design
- Apply accent color ONLY to primary CTAs and key interactive elements
- Use generous whitespace - don't be afraid of empty space
- Keep animations subtle and purposeful
- Ensure WCAG AA contrast ratios (4.5:1 minimum)
- Test in both light and dark themes
- Use consistent border radius (12px standard, 16px large)
- Follow 8px spacing grid

### DON'T
- Use color gratuitously - every color should have a purpose
- Apply gradients to backgrounds (only CTAs)
- Use aggressive animations (> 500ms or large scales)
- Mix border radius values inconsistently
- Use custom shadows (stick to design system)
- Override system font unless absolutely necessary
- Create visual hierarchy with color alone (use size, weight, spacing)

---

## Accessibility Requirements

### Color Contrast
```
Normal Text (< 18px):
- AA:  4.5:1 minimum
- AAA: 7:1 minimum

Large Text (>= 18px or 14px bold):
- AA:  3:1 minimum
- AAA: 4.5:1 minimum

UI Components:
- 3:1 minimum for interactive elements
```

### Focus States
- All interactive elements MUST have visible focus indicator
- Focus ring: 2px solid accent color with 4px offset
- Never remove focus styles without replacement

### Keyboard Navigation
- All interactive elements accessible via Tab
- Modal trap focus when open
- Escape key closes modals
- Enter/Space activates buttons

---

## Code Examples

### Theme-Aware Background
```tsx
<div className="bg-white dark:bg-black">
  <div className="bg-gray-50 dark:bg-gray-900">
    {/* Content */}
  </div>
</div>
```

### Theme-Aware Text
```tsx
<h1 className="text-gray-900 dark:text-gray-50">
  Heading
</h1>
<p className="text-gray-700 dark:text-gray-300">
  Body text
</p>
<span className="text-gray-500 dark:text-gray-500">
  Secondary text
</span>
```

### Accent Button
```tsx
<button className="bg-gradient-to-br from-orange-500 to-orange-600
                   text-white px-6 py-3 rounded-xl font-semibold
                   hover:brightness-110 active:scale-98
                   transition-all duration-200">
  Primary Action
</button>
```

### Card Component
```tsx
<div className="bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                rounded-xl p-6 shadow-sm
                hover:shadow-md hover:-translate-y-0.5
                transition-all duration-300">
  {/* Card content */}
</div>
```

### Input Component
```tsx
<input
  className="w-full h-12 px-4
             bg-white dark:bg-gray-900
             border border-gray-300 dark:border-gray-700
             text-gray-900 dark:text-gray-50
             placeholder-gray-500
             rounded-xl
             focus:outline-none focus:ring-4
             focus:ring-orange-500/20 focus:border-orange-500
             transition-all duration-200"
  placeholder="Enter text..."
/>
```

---

## Quick Reference: Before → After

### Homepage Background
```diff
- <div className="min-h-screen gradient-mesh">
+ <div className="min-h-screen bg-white dark:bg-black">
```

### Card Styling
```diff
- <div className="glass-card rounded-lg border border-white/20">
+ <div className="bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
```

### Text Colors
```diff
- <h1 className="text-premium-white">
+ <h1 className="text-gray-900 dark:text-gray-50">

- <p className="text-premium-white-secondary">
+ <p className="text-gray-700 dark:text-gray-300">
```

### Modal Background
```diff
- className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
+ className="bg-white dark:bg-gray-900"
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Install next-themes package
- [ ] Add ThemeProvider to layout
- [ ] Create theme-toggle component
- [ ] Update Tailwind config for dark mode

### Phase 2: CSS Refactor
- [ ] Remove all blue gradient utilities
- [ ] Update CSS variables for light/dark
- [ ] Create new utility classes
- [ ] Remove .glass and .glass-card

### Phase 3: Component Updates
- [ ] Update homepage (page.tsx)
- [ ] Update resource-cards-grid component
- [ ] Update x-insights page
- [ ] Fix response-modal component
- [ ] Update button components
- [ ] Update input components

### Phase 4: Testing
- [ ] Test light theme on all pages
- [ ] Test dark theme on all pages
- [ ] Test theme toggle persistence
- [ ] Verify contrast ratios
- [ ] Test responsive layouts
- [ ] Verify all interactions work

---

## Tools & Resources

### Design Tools
- Figma (Apple UI Kit): https://www.figma.com/community/file/1121065701252736567
- Apple HIG: https://developer.apple.com/design/human-interface-guidelines/

### Development Tools
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Chrome DevTools (Accessibility audit)
- next-themes: https://github.com/pacocoursey/next-themes

### Inspiration
- apple.com
- linear.app (clean, minimal)
- vercel.com (great dark mode)
- stripe.com (excellent typography)

---

**Remember**: When in doubt, remove color. Less is always more.
