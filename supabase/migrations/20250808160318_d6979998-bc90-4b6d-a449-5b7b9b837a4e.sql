-- Enable required extension
create extension if not exists pgcrypto with schema public;

-- Shared timestamp trigger function
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Profiles table (no FK to auth.users per guidelines)
create table if not exists public.profiles (
  id uuid primary key,
  email text,
  full_name text,
  avatar_url text,
  department text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Policies for profiles
create policy if not exists "Profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy if not exists "Users can insert their own profile"
  on public.profiles for insert with check (auth.uid() = id);

create policy if not exists "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Trigger for profiles
create trigger if not exists update_profiles_updated_at
before update on public.profiles
for each row execute function public.update_updated_at_column();

-- Posts table
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  content text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

create index if not exists idx_posts_user_id on public.posts(user_id);

-- Policies for posts
create policy if not exists "Posts are viewable by everyone"
  on public.posts for select using (true);

create policy if not exists "Users can insert their own posts"
  on public.posts for insert with check (auth.uid() = user_id);

create policy if not exists "Users can update their own posts"
  on public.posts for update using (auth.uid() = user_id);

create policy if not exists "Users can delete their own posts"
  on public.posts for delete using (auth.uid() = user_id);

-- Trigger for posts
create trigger if not exists update_posts_updated_at
before update on public.posts
for each row execute function public.update_updated_at_column();

-- Realtime configuration
alter table public.posts replica identity full;
alter table public.profiles replica identity full;
alter publication supabase_realtime add table public.posts;
alter publication supabase_realtime add table public.profiles;