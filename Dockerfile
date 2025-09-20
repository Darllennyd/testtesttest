# --- base image ---
FROM node:18-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# --- deps ---
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
# Prefer npm, fallback to yarn/pnpm if lockfile exists
RUN if [ -f package-lock.json ]; then npm ci;     elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile;     elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile;     else npm i; fi

# --- build ---
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- runtime ---
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Next.js standalone output
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public || true
COPY --from=build /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
