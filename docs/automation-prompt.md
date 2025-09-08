# SafeOrStolen.com Automation & Integration Prompt

## Project Overview
SafeOrStolen.com is a web application that identifies when users input or scan serial numbers, IMEI, and VIN numbers, determining if 2nd-hand items are listed as lost, stolen, or safe to handle. This stolen item checker protects buyers and sellers from financial loss and legal issues.

## Current Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Supabase (PostgreSQL, Edge Functions, Authentication)
- **Payment**: Stripe integration with subscription tiers
- **Security**: Row Level Security (RLS), audit logging, rate limiting
- **Deployment**: Lovable.dev platform

## Automation Capabilities Requested

### 1. Real-Time Data Integration
**Enable automation to:**
- Integrate with law enforcement databases (NCIC, state databases)
- Connect to manufacturer databases (Apple, Samsung, automotive OEMs)
- Sync with stolen item registries (BikeIndex, IMEI databases)
- Update verification results automatically

**Implementation Requirements:**
```typescript
// Edge function for external data sync
supabase/functions/sync-external-data/index.ts
- Rate-limited API calls to external services
- Secure credential management via Supabase secrets
- Automatic data validation and sanitization
- Audit trail for all external data updates
```

### 2. Automated Verification Pipeline
**Enable AI/bots to:**
- Process verification requests in queue
- Cross-reference multiple databases simultaneously
- Generate comprehensive verification reports
- Update user accounts with results

**Required Integrations:**
- IMEI_LOOKUP_API_KEY (configured)
- BIKEINDEX_ACCESS_TOKEN (configured)
- Additional law enforcement API credentials needed

### 3. Security & Access Control
**Automation must respect:**
- Row Level Security policies
- Rate limiting (10 verifications/hour for free users)
- Subscription tier restrictions
- Audit logging for all automated actions

### 4. Real-Time Updates
**Enable live updates for:**
- Verification status changes
- New stolen item reports
- Database synchronization events
- User notification triggers

## Secure Integration Setup

### Required API Endpoints
```typescript
// Automation-friendly endpoints
POST /api/verify-item-automated
POST /api/sync-database
POST /api/update-verification-status
GET /api/verification-queue
```

### Authentication for Automation
```sql
-- Service role for automation
CREATE USER automation_service WITH PASSWORD 'secure_generated_password';
GRANT automation_role TO automation_service;
```

### Environment Configuration
```env
# Automation credentials (stored in Supabase secrets)
AUTOMATION_API_KEY=
LAW_ENFORCEMENT_API_KEY=
MANUFACTURER_API_KEY=
STOLEN_REGISTRY_API_KEY=
```

### Database Schema for Automation
```sql
-- Automation tracking table
CREATE TABLE automation_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  automation_type TEXT NOT NULL,
  external_source TEXT NOT NULL,
  records_processed INTEGER DEFAULT 0,
  success_count INTEGER DEFAULT 0,
  error_count INTEGER DEFAULT 0,
  last_sync_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- External data sources tracking
CREATE TABLE external_data_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_name TEXT UNIQUE NOT NULL,
  api_endpoint TEXT NOT NULL,
  last_successful_sync TIMESTAMP WITH TIME ZONE,
  sync_frequency_minutes INTEGER DEFAULT 60,
  is_active BOOLEAN DEFAULT true
);
```

## Automation Workflows

### 1. Hourly Database Sync
```yaml
trigger: cron(0 * * * *)
workflow:
  - Check external APIs for new stolen items
  - Validate and sanitize incoming data
  - Update local database with new records
  - Trigger re-verification for affected items
  - Send notifications to users with updates
```

### 2. Real-Time Verification Processing
```yaml
trigger: new verification request
workflow:
  - Queue verification request
  - Check subscription limits
  - Query multiple external databases
  - Compile comprehensive report
  - Update verification_searches table
  - Notify user of completion
```

### 3. Automated Reporting
```yaml
trigger: daily(6:00 AM)
workflow:
  - Generate verification statistics
  - Compile security reports
  - Check system health
  - Send admin notifications
```

## Integration Points

### Lovable.dev Integration
- Use Lovable's API to deploy code updates
- Leverage Supabase integration for backend changes
- Maintain version control through Lovable's system

### External Service Integration
- Law enforcement databases (FBI NCIC, state registries)
- Manufacturer verification systems
- Insurance company databases
- International stolen item registries

### Monitoring & Alerting
- Real-time error monitoring
- Performance tracking
- Security breach detection
- Automated failover systems

## Security Considerations

### Access Control
- Service accounts with minimal required permissions
- API key rotation every 90 days
- IP whitelisting for automation services
- Multi-factor authentication for admin access

### Data Protection
- End-to-end encryption for all API communications
- PII scrubbing in logs
- GDPR compliance for user data
- Secure credential storage in Supabase vault

### Audit Requirements
- Complete trail of all automated actions
- Change tracking for all database modifications
- User notification for automated updates
- Compliance reporting

## Implementation Commands for Lovable

```bash
# Enable automation features
lovable add-secret AUTOMATION_API_KEY
lovable add-secret LAW_ENFORCEMENT_API_KEY
lovable deploy-edge-function sync-external-data
lovable enable-real-time-subscriptions
lovable configure-cron-jobs

# Security setup
lovable enable-audit-logging
lovable configure-rate-limiting
lovable setup-ip-whitelisting
```

## Monitoring Dashboard Requirements

Create admin dashboard at `/admin/automation` with:
- Real-time sync status
- API health monitoring
- Error rate tracking
- Performance metrics
- Manual override controls

## Success Metrics

- 99.9% uptime for verification services
- <2 second response time for verification requests
- 100% audit trail coverage
- Zero security incidents
- Real-time data synchronization accuracy >99%

---

**Note**: This prompt enables full automation capabilities while maintaining security, compliance, and user experience standards. All automation must be implemented with proper authentication, rate limiting, and audit trails.