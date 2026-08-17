# Deployment Guide - Starboard Realtors

## Pre-Deployment Checklist

### 1. Environment Variables Setup

**CRITICAL**: Before deploying, you must configure production environment variables.

Copy `.env.production.example` to `.env.production` and fill in real values:

```bash
cp .env.production.example .env.production
```

Then edit `.env.production` with actual values:

#### Required:

- **RESEND_API_KEY**: Get from [Resend Dashboard](https://resend.com/api-keys)
  - Without this, contact forms will not work

#### Optional (but recommended for analytics):

- **NEXT_PUBLIC_GA_MEASUREMENT_ID**: Google Analytics tracking ID
- **NEXT_PUBLIC_GTM_ID**: Google Tag Manager container ID
- **NEXT_PUBLIC_GSC_VERIFICATION**: Google Search Console verification code

### 2. Verify Build

```bash
# Run all checks
npm run prod:check

# Or run individually:
npm run lint
npm run typecheck
npm run build
```

### 3. Domain Configuration

Current domain is configured as: `https://www.starboardrealtors.co.in`

If deploying to a different domain, update:

- `src/app/layout.tsx` (line 17: `siteUrl`)
- `src/app/robots.ts` (line 3: `siteUrl`)
- `src/app/sitemap.ts` (line 3: `siteUrl`)

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**In Vercel Dashboard:**

1. Go to Project Settings > Environment Variables
2. Add all production environment variables
3. Redeploy

### Option 2: Docker

```dockerfile
# Use Node.js 20 Alpine
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

### Option 3: Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Post-Deployment Verification

### 1. Test Contact Forms

- Test popup form
- Test contact section form
- Verify email delivery

### 2. Check Analytics

- Verify Google Analytics is tracking
- Check GTM container is firing
- Test tag implementations

### 3. SEO Verification

- Check robots.txt: `https://www.starboardrealtors.co.in/robots.txt`
- Check sitemap: `https://www.starboardrealtors.co.in/sitemap.xml`
- Verify in Google Search Console

### 4. Performance Testing

```bash
# Run Lighthouse audit
npx lighthouse https://www.starboardrealtors.co.in --view
```

### 5. Security Headers

Verify security headers are present:

```bash
curl -I https://www.starboardrealtors.co.in
```

Should include:

- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Referrer-Policy: strict-origin-when-cross-origin

## Monitoring Setup

### Recommended Services:

1. **Error Tracking**: [Sentry](https://sentry.io)

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

2. **Analytics**: Google Analytics (already configured)

3. **Uptime Monitoring**:

   - [UptimeRobot](https://uptimerobot.com)
   - [Pingdom](https://www.pingdom.com)

4. **Performance Monitoring**:
   - [Vercel Analytics](https://vercel.com/analytics) (if using Vercel)
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)

## Environment Variables Reference

| Variable                        | Required       | Description                 |
| ------------------------------- | -------------- | --------------------------- |
| `RESEND_API_KEY`                | ✅ Yes         | Email service API key       |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ⚠️ Recommended | Google Analytics tracking   |
| `NEXT_PUBLIC_GTM_ID`            | ⚠️ Recommended | Tag Manager container       |
| `NEXT_PUBLIC_GSC_VERIFICATION`  | ❌ Optional    | Search Console verification |
| `CONTACT_EMAIL_TO`              | ❌ Optional    | Override recipient email    |
| `CONTACT_EMAIL_FROM`            | ❌ Optional    | Override sender email       |

## Troubleshooting

### Issue: Emails not sending

**Solution**: Verify `RESEND_API_KEY` is set correctly and has proper permissions.

### Issue: Analytics not tracking

**Solution**: Check browser console for GTM/GA errors. Verify IDs are correct.

### Issue: Build fails

**Solution**: Run `npm run typecheck` and `npm run lint` to identify issues.

### Issue: Images not loading

**Solution**: Verify all images exist in `public/images/` directory.

## Security Notes

- Never commit `.env.production` or `.env.local` files
- Keep API keys secure and rotate them regularly
- Enable HTTPS on your production domain
- Set up CORS policies if using API routes from external domains
- Review and update dependencies regularly: `npm outdated`

## Support

For issues or questions:

- Email: connect@starboardrealtors.co.in
- Check Next.js docs: https://nextjs.org/docs

---

**Last Updated**: August 17, 2026
**Next.js Version**: 16.2.10
**Node Version Required**: 20.x or higher
