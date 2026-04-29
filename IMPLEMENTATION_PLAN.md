# Homepage Implementation Plan

## Goal
Recreate the provided homepage design as closely as possible using the supplied assets, with placeholders for any missing assets.

## Source Of Truth (Must Always Reference)
- Primary visual reference: `public/reference/home-desktop.png`
- Every spacing, sizing, alignment, and typography decision should be validated against this reference before marking a section complete.
- If implementation and assumption conflict, the reference screenshot wins.

## Available Inputs
- Visual reference screenshot: `public/reference/home-desktop.png`
- Site logo: `public/assets/site-logo.png`
- Board certified badge: `public/assets/boad-certified.png`
- 3 partner photos: `public/assets/partner-1.png`, `public/assets/partner-2.png`, `public/assets/partner-3.png`
- Font: Adobe Caslon Pro (requested)
- Missing assets (to be replaced with placeholders): service icons and office/location images

## Asset Mapping
- Header + footer brand: `public/assets/site-logo.png`
- Board certified section badge: `public/assets/boad-certified.png`
- Partners cards: `public/assets/partner-1.png`, `public/assets/partner-2.png`, `public/assets/partner-3.png`
- Hero background: if not present yet in `public/assets`, use temporary placeholder and replace once added.
- Office/location row: placeholder images until final assets are provided.

## Scope
- Build full homepage sections visible in reference design
- Desktop and mobile responsive behavior
- Maintain visual hierarchy, spacing rhythm, and section ordering
- Keep implementation easy to swap with final icons/images later
- Use `public/reference/home-desktop.png` continuously as the layout and style baseline during build.

## Section-by-Section Build Plan
1. Header and Hero
   - Top navigation and call line
   - Hero background with dark overlay
   - Main headline and supporting text
   - Two CTA buttons
   - Decorative side arcs

2. Newsletter Signup Strip
   - Left text block
   - Right form with two inputs and subscribe button

3. Practice Areas Grid
   - Dark section background
   - Heading and section intro
   - 3x3 card grid
   - Gold-stroke custom placeholder icons
   - Title, short description, and Learn More link

4. Board Certified Section
   - Left badge image
   - Right heading, paragraph, and CTA button

5. Partners Section
   - Section heading and subcopy
   - Three attorney profile cards with provided photos
   - CTA button

6. Process Section
   - Three numbered steps: Consult, Match, Advocate
   - Connector arrows and explanatory paragraph
   - CTA button

7. Testimonials Section
   - Dark gradient background
   - Heading and category chips
   - Two testimonial cards
   - Pagination indicators and CTA button

8. Office Locations Row
   - Four office cards
   - Placeholder location images

9. Footer
   - Brand/logo mark and social links
   - Link columns
   - Bottom legal strip

## Files To Edit
- app/page.tsx
- app/globals.css
- app/theme.css (reusable color and typography tokens)
- app/layout.tsx (only if metadata/font wiring is needed)
- public/ (store assets and placeholders)

## Technical Notes
- Keep components semantic and accessible
- Preserve contrast and focus states
- Add restrained hover transitions matching the visual style
- Use centralized tokens for colors/spacing/typography in CSS where practical
- Treat app/theme.css tokens as the single source for colors, font stacks, spacing, and shadows during implementation.
- Run a visual check against `public/reference/home-desktop.png` after each major section (Hero, Services, Partners, Testimonials, Footer).

## Verification Checklist
1. Run lint: npm run lint
2. Run production build: npm run build
3. Compare section-by-section against `public/reference/home-desktop.png`
4. Check responsive behavior for mobile/tablet/desktop
5. Confirm placeholder assets are isolated and easy to swap later

## Assumptions
- Pixel-perfect means best possible parity from screenshot + provided assets
- Exact Figma inspect values are not available in this environment

## Out of Scope
- Additional pages/routes
- Backend integrations
- Dynamic CMS content
