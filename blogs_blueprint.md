# Blogs Blueprint

## Goal
Add a blog page to the Goftus frontend with an admin panel to create, edit, and publish posts. Posts created in the admin should appear on the public blog once published.

## Proposed Architecture
- Frontend: Vite + React (existing).
- Backend API: Node.js + Express (new).
- Database: SQLite (simple local storage). Can swap to Postgres later.
- Admin panel: Protected route in the frontend (basic auth or token).

## Data Model
Table: `posts`
- id (uuid or integer primary key)
- title (string)
- slug (string, unique)
- excerpt (text)
- content (markdown or rich text)
- cover_image (string URL or path)
- author (string)
- tags (string or JSON array)
- status (draft | published)
- published_at (datetime, nullable)
- created_at (datetime)
- updated_at (datetime)

## API Endpoints
Public:
- GET `/api/posts` -> list published posts (supports pagination)
- GET `/api/posts/:slug` -> get one published post

Admin (requires auth):
- POST `/api/admin/login` -> returns token
- GET `/api/admin/posts` -> list all posts
- POST `/api/admin/posts` -> create post
- PUT `/api/admin/posts/:id` -> update post
- DELETE `/api/admin/posts/:id` -> delete post
- POST `/api/admin/posts/:id/publish` -> publish post
- POST `/api/admin/posts/:id/unpublish` -> unpublish post

## Auth (Simple)
Option A (fast): single admin user in `.env` with username/password, token-based auth (JWT).
Option B (more robust): users table, password hash (bcrypt).

## Frontend Pages
Public:
- `/blogs` -> list published posts (cards with title, excerpt, date)
- `/blogs/:slug` -> post detail

Admin:
- `/admin/blogs` -> list + create
- `/admin/blogs/new` -> editor
- `/admin/blogs/:id/edit` -> editor

## Editor
- Markdown editor (simple textarea + preview) or a lightweight rich text editor.
- Save as draft or publish.

## File/Folder Layout (Suggestion)
Backend:
- `server/`
  - `index.ts` (express app)
  - `db.ts` (sqlite connection)
  - `routes/`
    - `public.ts`
    - `admin.ts`

Frontend:
- `src/pages/Blogs.tsx`
- `src/pages/BlogPost.tsx`
- `src/pages/admin/AdminBlogs.tsx`
- `src/pages/admin/AdminBlogEditor.tsx`
- `src/api/blogs.ts` (API calls)

## Deployment
Local dev:
- `npm run dev` (frontend)
- `npm run server` (backend)
Production:
- host backend separately (Render/Fly/VM)
- frontend builds to static assets

## Next Steps
1) Confirm backend stack (Node/Express + SQLite or another).
2) Decide auth approach.
3) Implement API + DB.
4) Build frontend blog + admin pages.
