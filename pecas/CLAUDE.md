# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML landing page for "Pecas Burgers", a vegan burger business in Montevideo, Uruguay. The project consists of a single HTML file (`index.html`) that serves as the complete website.
n
## Project Structure

- **Single-page application**: All code is contained within one HTML file
- **Self-contained**: CSS styles are embedded in `<style>` tags within the HTML
- **No build process**: Direct HTML/CSS/SVG implementation without any build tools or dependencies
- **No external dependencies**: Uses only Google Fonts and inline SVG graphics

## Technical Architecture

### Frontend Stack
- Pure HTML5 with semantic markup
- CSS3 with modern features (Grid, Flexbox, CSS Variables)
- Inline SVG for icons and logo
- Google Fonts integration (Manrope, Inter, Space Grotesk, Syne)
- Responsive design with mobile-first approach

### Key Features
- **Fixed header** with smooth scroll navigation
- **Hero section** with call-to-action
- **Product showcase** with detailed ingredient lists
- **Customer testimonials** section
- **Contact integration** with WhatsApp and Instagram links
- **Responsive grid layouts** for different screen sizes

## Development Workflow

Since this is a static HTML file with no build process:

1. **Editing**: Direct file modification of `index.html`
2. **Testing**: Open the HTML file directly in a browser
3. **Deployment**: Upload the HTML file to any static hosting service

## Code Conventions

### CSS Organization
- Styles are organized by section (Header, Hero, About, Products, etc.)
- Uses semantic class naming (`hero`, `product-card`, `testimonial-card`)
- Responsive breakpoints handled with media queries
- CSS custom properties could be added for color theming

### HTML Structure
- Semantic HTML5 elements (`header`, `section`, `footer`)
- Proper heading hierarchy (h1, h2, h3, h4)
- Accessible markup with meaningful alt texts and ARIA labels where needed
- Social media and contact links use `target="_blank"` for external navigation

### Design System
- **Color Palette**: Green primary (#10B981), Orange accent (#F59E0B), Navy text (#0F172A)
- **Typography**: Multiple font families for hierarchy (Syne for branding, Manrope for headings, Inter for body)
- **Spacing**: Consistent padding/margin system
- **Border Radius**: Consistent rounded corners (12px, 20px, 24px)

## Contact Integration

The site integrates with:
- **WhatsApp**: Direct links to phone number 59891601090
- **Instagram**: Links to @belu_jaimes_
- **Business hours**: Monday-Sunday 18:00-22:00
- **Delivery area**: Montevideo and metropolitan area

## File Organization

Since everything is in one file, sections are clearly commented:
- Header navigation
- Hero section
- About section with benefits cards
- Products section with detailed product cards
- Testimonials grid
- Process steps
- Contact section
- Footer

This structure makes it easy to locate and modify specific sections of the landing page.