create table books (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  author text,
  mime_type text not null,
  file_path text not null,
  uploaded_by uuid references auth.users(id),
  created_at timestamp with time zone default now()
);
