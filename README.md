# SafeOrStolen.com

**Protect yourself from buying stolen goods.** SafeOrStolen is a comprehensive stolen item verification service that helps buyers and sellers check if second-hand items are reported lost, stolen, or safe to handle.

## 🎯 What It Does

- **Serial Number Verification**: Check electronics, phones, laptops, and more
- **IMEI Lookup**: Verify mobile device status and blacklist checks
- **VIN Verification**: Check vehicle history and theft records
- **Bike Index Integration**: Verify bicycles against the stolen bike database
- **Firearm Verification**: Check firearms against HotGunz database

## 🛡️ Key Features

- **AI-Powered Safety Advisor**: Get real-time guidance on suspicious listings
- **Smart Search Suggestions**: Intelligent autocomplete for faster verification
- **Photo Item Identification**: Upload photos to extract serial numbers automatically
- **Community Stories**: Learn from real experiences of theft recovery
- **Watchlist Alerts**: Get notified when your items are searched

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Edge Functions, Auth)
- **Payments**: Stripe (Subscriptions & Credits)
- **AI**: OpenAI GPT-4 for smart features
- **SEO**: React Helmet, JSON-LD structured data

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific modules
├── hooks/          # Custom React hooks
├── lib/            # Core utilities (auth, etc.)
├── pages/          # Route pages
├── integrations/   # Supabase client & types
└── utils/          # Helper functions

supabase/
├── functions/      # Edge functions (API endpoints)
├── migrations/     # Database migrations
└── config.toml     # Function configuration
```

## 🔐 Security

- Row-Level Security (RLS) on all tables
- JWT authentication on sensitive endpoints
- Rate limiting on verification APIs
- Audit logging for compliance

## 🌐 Live Site

**URL**: [https://safeorstolen.com](https://safeorstolen.com)

## 📄 License

Private - All rights reserved.
