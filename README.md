[![License: Custom](https://img.shields.io/badge/license-Custom-blue.svg)](./LICENSE.md)
🔒 This is a personal team project — open for learning and contributions, but **all rights are reserved**. See [LICENSE](./LICENSE) for details.

# Scriptor - Script-to-Voice Transcriptor

**Scriptor** is a powerful tool that helps convert scripts into voices using a backend-driven, scalable architecture built on **Next.js**, **Prisma**, and **PostgreSQL**.

This project is designed to be a **full-stack application** with a focus on **AI-driven** features, allowing users to create, manage, and transcribe scripts and voices efficiently.

## 🚀 Features

- **Convert scripts to voices**: The application will eventually allow converting scripts into voices using cutting-edge technologies such as Large Language Models (LLMs), Distillation techniques, or Retrieval-Augmented Generation (RAG)-based methods. These technologies will improve the system’s ability to understand and process text contextually and generate human-like voice outputs.
- **Voice to script transcription**: Allows the system to transcribe audio back into text, enabling a seamless flow between voice and written script, powered by AI-driven transcription models.
- **AI-driven enhancements**: In the future, I will integrate LLMs or RAG-based technologies to empower the script-to-voice and voice-to-script processes, ensuring context-aware conversions that are more accurate and natural. This will enable the platform to handle diverse input and generate outputs that feel more human, efficient, and adaptable.

## 🛠 Technologies

- **Frontend**: Next.js (App Router for routing and layout)
- **Backend**: Prisma ORM with PostgreSQL for structured database access
- **State Management**: Managed via Prisma Client for seamless DB interaction
- **Authentication**: Custom Auth API endpoints (JWT/session-based)
- **Testing**: Jest, Supertest, Zod validation, Prisma Test Suite
- **AI Integration**: Planned LLMs, RAG (Retrieval-Augmented Generation), or distillation-based models
- **Dev Tools**: ESLint, Prettier, Husky (pre-commit hooks), Git branching conventions
- **Deployment**: Vercel or similar serverless-compatible platforms
- **Environment Management**: .env with dotenv support for secrets/configs

## 🌐 Project Structure

<details>
<summary>📁 Project Structure (Click to expand)</summary>

- **`prisma/`**: Contains Prisma schema and DB migrations.
- **`public/`**: Holds static assets like images and favicon.
- **`src/app/`**: Includes app routes and API endpoints for handling requests.
- **`src/components/`**: Contains reusable UI components like buttons and inputs.
- **`src/config/`**: Stores app-wide configuration files (e.g., environment variables, rate limits).
- **`src/controllers/`**: Manages the request logic (API controller functions).
- **`src/lib/`**: Holds utility libraries like Prisma client initialization.
- **`src/middleware/`**: Contains logic for authentication, logging, and rate-limiting.
- **`src/models/`**: Defines data models and TypeScript interfaces.
- **`src/services/`**: Business logic and database interactions.
- **`src/utils/`**: Utility functions for tasks like hashing and token generation.

📁 For a full directory tree, [view structure.md ➜](./structure.md)

</details>

## 🛠 Installation

<details>
<summary>🛠 Installation (Click to expand)</summary>

### Prerequisites

- Node.js 16.0+ (or LTS version)
- PostgreSQL
- Prisma CLI (`npx prisma`)

### 1. Clone the repo

```bash
git clone https://github.com/iamanishsrivastava/scriptor.git
cd scriptor
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

- Copy the `.env.example` file to `.env` and fill in the required values.

```bash
cp .env.example .env
```

### 4. Set up the database

- Create a PostgreSQL database and update the `DATABASE_URL` in your `.env` file.
- Run the following command to create the database and apply migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Seed the database (optional)

- If you want to seed the database with initial data, run:

```bash
npx prisma db seed
```

### 6. Start the development server

```bash
pnpm run dev
```

- Open your browser and navigate to `http://localhost:3000` to see the app in action.

</details>

## 🧪 Running Tests

<details>
<summary>🧪 Running Tests (Click to expand)</summary>

- To run the tests, use the following command:

```bash
pnpm test
```

- This will run all the tests in the `__tests__` directory and generate a coverage report.
- You can also run tests for specific files or directories by specifying the path:

```bash
pnpm test src/components/Button.test.tsx
```

- For more advanced testing options, refer to the [Jest documentation](https://jestjs.io/docs/cli).
- You can also run the tests in watch mode for continuous testing during development:

```bash
pnpm test --watch
```

- This will watch for file changes and re-run the tests automatically.

</details>

## 📚 API Endpoints

<details>
<summary>📦 API Endpoints (Click to expand)</summary>

- **POST** `/api/auth/login`: Authenticate user and return JWT token.
- **POST** `/api/auth/register`: Register a new user.
- **GET** `/api/auth/user`: Get the authenticated user's details.
- **POST** `/api/scripts`: Create a new script.
- **GET** `/api/scripts`: Get all scripts.
- **GET** `/api/scripts/:id`: Get a specific script by ID.
- **PUT** `/api/scripts/:id`: Update a specific script by ID.
- **DELETE** `/api/scripts/:id`: Delete a specific script by ID.
- **POST** `/api/voices`: Convert script to voice.
- **GET** `/api/voices`: Get all voices.
- **GET** `/api/voices/:id`: Get a specific voice by ID.
- **PUT** `/api/voices/:id`: Update a specific voice by ID.
- **DELETE** `/api/voices/:id`: Delete a specific voice by ID.
- **POST** `/api/transcriptions`: Transcribe voice to script.
- **POST** `/api/projects`: Create a new project.
- **GET** `/api/projects`: Get all projects.
- **GET** `/api/projects/:id`: Get a specific project by ID.
- **PUT** `/api/projects/:id`: Update a specific project by ID.
- **DELETE** `/api/projects/:id`: Delete a specific project by ID.
- **POST** `/api/feedback`: Submit feedback.
- **GET** `/api/feedback`: Get all feedback.
- **GET** `/api/feedback/:id`: Get a specific feedback by ID.
- **PUT** `/api/feedback/:id`: Update a specific feedback by ID.
- **DELETE** `/api/feedback/:id`: Delete a specific feedback by ID.
- **POST** `/api/notifications`: Create a new notification.
- **GET** `/api/notifications`: Get all notifications.
- **GET** `/api/notifications/:id`: Get a specific notification by ID.
- **PUT** `/api/notifications/:id`: Update a specific notification by ID.
- **DELETE** `/api/notifications/:id`: Delete a specific notification by ID.
- **POST** `/api/analytics`: Create a new analytics record.
- **GET** `/api/analytics`: Get all analytics records.
- **GET** `/api/analytics/:id`: Get a specific analytics record by ID.
- **PUT** `/api/analytics/:id`: Update a specific analytics record by ID.
- **DELETE** `/api/analytics/:id`: Delete a specific analytics record by ID.

</details>

## 🔑 Authentication

The API uses a custom authentication system, where users must sign up and log in to access features like script creation and project management. Passwords are securely hashed before being stored in the database.

- JWT tokens are used for authentication, and they should be included in the `Authorization` header of requests to protected endpoints.
- The token should be in the format `Bearer <token>`.
- Ensure to handle token expiration and refresh tokens as needed.
- The authentication middleware checks for the presence of a valid token before allowing access to protected routes.
- You can use the `useAuth` hook in the frontend to manage authentication state and access user information.

## 🔒 License

This project is **open-sourced with restrictions**.

- All rights are reserved by the core team.
- You are free to use or adapt the code, but **must credit the original authors**.
- Contributions are welcome and will be **acknowledged**, but do not grant ownership or redistribution rights.
- Redistribution or commercial use without explicit permission is **not allowed**.
- You may not use the code in any way that could be considered **derivative** or **commercial** without explicit permission from the Scriptor Team.  
  Read more at [LICENSE.md](./LICENSE.md).

## The Scriptor Team

- [Anish Srivastava](https://github.com/iamanishsrivastava)
- [Sandeep](https://github.com/devwithgroot)
