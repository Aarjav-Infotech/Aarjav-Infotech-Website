# Aarjav Infotech Website

Production-ready foundation for a modern company website built with Next.js App Router, TypeScript, Tailwind CSS v4, Prisma, and PostgreSQL.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL + Prisma ORM
- **Validation:** Zod
- **Forms:** React Hook Form
- **Animation:** Framer Motion
- **UI:** shadcn/ui + Lucide React
- **Quality:** ESLint, Prettier, Husky, lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update DATABASE_URL in .env with your PostgreSQL connection string

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & API routes
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── common/           # Reusable composed components
│   └── layout/           # Navbar, Footer, SiteLayout
├── features/             # Feature-based modules
│   ├── home/
│   ├── about/
│   ├── services/
│   └── contact/
├── hooks/                # Custom React hooks
├── lib/                  # Utilities, Prisma client, constants
├── server/               # Server-side services
├── styles/               # Global CSS & design tokens
└── types/                # Shared TypeScript types
```

## Scripts

| Command               | Description              |
| --------------------- | ------------------------ |
| `npm run dev`         | Start development server |
| `npm run build`       | Production build         |
| `npm run start`       | Start production server  |
| `npm run lint`        | Run ESLint               |
| `npm run lint:fix`    | Fix ESLint issues        |
| `npm run format`      | Format with Prettier     |
| `npm run typecheck`   | TypeScript type checking |
| `npm run db:generate` | Generate Prisma client   |
| `npm run db:push`     | Push schema to database  |
| `npm run db:migrate`  | Run database migrations  |
| `npm run db:studio`   | Open Prisma Studio       |

## Architecture

- **Feature-based architecture** — each domain (home, contact, etc.) is self-contained
- **Server Components by default** — client components only when interactivity is required
- **Clean separation** — API routes delegate to server services, forms use Zod schemas
- **Design tokens** — CSS variables with light/dark theme support

## Database Models

- `ContactInquiry` — contact form submissions
- `NewsletterSubscriber` — newsletter sign-ups

## Git Hooks

- **pre-commit:** lint-staged (ESLint + Prettier)
- **commit-msg:** Conventional Commits validation

## License

Private — All rights reserved.
