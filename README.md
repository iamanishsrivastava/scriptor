This is a script-to-voice transcriptor project.

scriptor/
├── prisma/ # Prisma schema & DB migrations
│ └── schema.prisma
│
├── public/ # Static assets (favicon, images)
│
├── src/
│ ├── app/ # App Router base (Next.js 13+)
│ │ ├── layout.tsx # Global layout
│ │ ├── page.tsx # Root route ("/")
│ │ └── api/ # API endpoints (Server functions)
│ │ ├── script/
│ │ │ └── route.ts # POST/GET /api/script
│ │ ├── auth/
│ │ │ └── route.ts # Login/Signup/etc.
│ │ └── project/
│ │ └── route.ts # Project handling
│
│ ├── components/ # Reusable UI components (Button, Input etc.)
│
│ ├── config/ # App-wide configs (env, constants, rate limits)
│ │ └── rateLimit.ts
│
│ ├── controllers/ # Handles request logic (API route → controller)
│ │ └── scriptController.ts
│
│ ├── lib/ # Libs: DB clients, SDK initializers
│ │ └── prisma.ts # Prisma client
│
│ ├── middleware/ # Auth, rate-limiter, logger, etc.
│ │ ├── auth.ts
│ │ └── logger.ts
│
│ ├── models/ # Types & interfaces (DTOs, Prisma models)
│ │ └── script.ts
│
│ ├── services/ # Business logic (DB actions, etc.)
│ │ └── scriptService.ts
│
│ └── utils/ # Hashing, token generation, common utils
│ └── hashUtils.ts
│
├── .env # Environment variables (DB_URL etc.)
├── next.config.js # Next.js config
├── package.json
└── README.md
