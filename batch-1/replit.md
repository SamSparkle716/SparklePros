# Sparkle Pros - Cleaning Services Website

## Overview

This is a conversion-optimized website for Sparkle Pros, a cleaning company based in Buffalo, NY. The application is built as a React application with an Express backend. The primary goal is lead generation through walkthrough booking requests.

### Site Structure

- **/** - Entry Gate page (no header/footer) with two options: Commercial or Residential
- **/commercial** - Full commercial cleaning landing page with all sections
- **/residential** - Placeholder page ("Coming Soon") with Go Back button

**Business Details:**
- Company: Sparkle Pros
- Phone: 716-500-0506
- Email: info@sparklepros.us
- Address: 7078 Transit Rd, Buffalo, NY
- Services: Routine Cleaning, Commercial Carpet Cleaning, Power Washing
- Service Areas: Buffalo and 26+ surrounding towns in Western NY

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend is a single-page application with multiple sections (Hero, Services, Industries, Walkthrough, Testimonials, FAQ, Service Area, etc.) composed into the Home page. UI components are from shadcn/ui using Radix UI primitives.

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: REST endpoints under `/api/*`

The backend currently handles walkthrough form submissions via POST `/api/walkthrough`. Form data is validated using Zod schemas shared between frontend and backend.

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage class (`MemStorage`) for user data
- **Database Config**: Drizzle Kit configured with `DATABASE_URL` environment variable

The database schema includes a users table and a walkthrough form validation schema. The application is prepared for PostgreSQL but can function without it for the landing page use case.

### Shared Code
- **Location**: `shared/` directory
- **Purpose**: Zod schemas and TypeScript types shared between client and server
- **Key Exports**: `walkthroughFormSchema`, user types and schemas

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Scripts**: `npm run dev` for development, `npm run build` for production build

## External Dependencies

### UI Component Libraries
- **shadcn/ui**: Pre-configured with New York style, using Radix UI primitives
- **Radix UI**: Full suite of accessible component primitives (dialogs, forms, navigation, etc.)
- **Lucide React**: Icon library

### Database & ORM
- **Drizzle ORM**: SQL toolkit and ORM
- **Drizzle Zod**: Zod schema generation from Drizzle schemas
- **PostgreSQL**: Target database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### Form & Validation
- **Zod**: Schema validation
- **React Hook Form**: Form state management
- **zod-validation-error**: User-friendly validation error messages

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **Replit plugins**: Runtime error overlay, cartographer, dev banner (development only)