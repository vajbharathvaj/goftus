# Admin Authentication

## Overview
This project uses a **simple token-based admin authentication** for the blog admin panel.
It is intentionally lightweight and controlled by environment variables + a small admin table in Supabase.

There are two kinds of admin users:
1) **Primary admin (super admin)** — defined in the backend `.env`.
2) **Additional admins** — stored in the `admin_users` table in Supabase.

Only the primary admin can add or delete other admins.

---

## Primary Admin (Super Admin)
Configured in:
`server/.env`

Required fields:
```
ADMIN_EMAIL=your-admin@email.com
ADMIN_PASSWORD=your-password
ADMIN_TOKEN=goftus-admin-token
```

When the primary admin logs in, the backend returns a token.
This token encodes the admin’s email and is used for all admin API calls.

---

## Additional Admins
Stored in Supabase table: `admin_users`

Schema (SQL):
```sql
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  created_at timestamptz default now()
);
```

Passwords are stored **hashed** using `bcryptjs`.

---

## Login Flow
Frontend calls:
```
POST /api/admin/login
```
Body:
```json
{ "email": "admin@email.com", "password": "secret" }
```

Backend checks:
- If email/password match `.env` → **super admin**
- Otherwise check `admin_users` table → **regular admin**

Response:
```json
{
  "token": "goftus-admin-token.<base64-email>",
  "email": "admin@email.com",
  "isSuperAdmin": true
}
```

---

## Token Usage
The token must be sent with every admin request:
```
Authorization: Bearer <token>
```

Token format:
```
ADMIN_TOKEN + "." + base64(email)
```

Example:
```
goftus-admin-token.dmFqYmhhcmF0aDY2NUBnbWFpbC5jb20=
```

---

## Protected Admin Routes
All admin endpoints use token-based auth:
- `/api/admin/posts`
- `/api/admin/users`
- publish/unpublish/delete routes

Only the primary admin can call:
- `POST /api/admin/users`
- `DELETE /api/admin/users/:id`

---

## Notes
- This is a **simple auth layer**, not full OAuth/JWT.
- Best suited for internal admin panels or small teams.
- You can replace it later with Supabase Auth or JWT if needed.
