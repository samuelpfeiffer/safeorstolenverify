# Stolen Item Email Alert System

## Overview
Automatically notifies users via email when items they previously verified get reported as stolen by someone else.

## How It Works

### 1. User Searches for an Item
- User performs a verification search on the dashboard
- Search is saved to `verification_searches` table with:
  - `user_id`: The user who performed the search
  - `serial_number`: The identifier they searched (IMEI, VIN, or serial)
  - `item_type`: Type of item (phone, vehicle, etc.)
  - `created_at`: When the search was performed

### 2. Someone Reports Item as Stolen
- When a new record is inserted into `stolen_items` table
- Database trigger `notify_stolen_item_trigger` automatically fires
- Trigger function `notify_users_of_stolen_item()` executes:
  1. Finds all users who previously searched for this item
  2. Checks if they have email notifications enabled
  3. Creates notification records in `stolen_item_notifications` table

### 3. Notification Processing
- The `process-stolen-notifications` edge function can be called to process pending notifications
- Fetches up to 50 pending notifications at a time
- For each notification, calls `send-stolen-item-alert` edge function
- Updates notification status to 'sent' or 'failed'

### 4. Email Delivery
- `send-stolen-item-alert` edge function sends professional HTML email via Resend
- Email includes:
  - Alert that the item was reported stolen
  - Details about the item they searched
  - When they searched it
  - Stolen item details (date stolen, location, police report #)
  - Action steps to take
  - Link to their dashboard

## Database Schema

### `stolen_item_notifications` Table
```sql
id                  UUID PRIMARY KEY
user_id             UUID (references profiles)
user_email          TEXT
user_name           TEXT
stolen_item_id      UUID (references stolen_items)
searched_identifier TEXT
search_date         TIMESTAMP
notification_data   JSONB (stolen item details)
status              TEXT (pending/sent/failed)
error_message       TEXT
sent_at             TIMESTAMP
created_at          TIMESTAMP
updated_at          TIMESTAMP
```

### `profiles` Table (New Column)
```sql
email_notifications_enabled  BOOLEAN DEFAULT true
```

## Edge Functions

### `send-stolen-item-alert`
- **Purpose**: Sends individual email notification
- **Auth**: Public (no JWT required)
- **Input**:
  ```typescript
  {
    notificationId: string
    userEmail: string
    userName: string
    searchedIdentifier: string
    searchDate: string
    notificationData: {
      item_type: string
      brand: string
      model: string
      imei?: string
      vin?: string
      serial_number?: string
      date_stolen?: string
      location?: string
      police_report_number?: string
    }
  }
  ```
- **Output**: `{ success: boolean, emailId?: string }`
- **Side Effects**: Updates notification status in database

### `process-stolen-notifications`
- **Purpose**: Batch processes pending notifications
- **Auth**: Public (can be called by cron or manually)
- **Input**: None
- **Output**: 
  ```typescript
  {
    success: boolean
    processed: number
    sent: number
    failed: number
  }
  ```
- **Recommended**: Set up as scheduled cron job to run every 5-15 minutes

## Usage

### User Settings
Users can enable/disable email notifications in their settings:

```typescript
import { NotificationSettings } from '@/components/settings/NotificationSettings';

// In your settings page
<NotificationSettings />
```

### Manual Notification Processing
To manually trigger notification processing (useful for testing):

```typescript
const { data, error } = await supabase.functions.invoke('process-stolen-notifications');
console.log('Processed:', data);
```

### Check Notification Status
Query notification history for a user:

```typescript
const { data } = await supabase
  .from('stolen_item_notifications')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false });
```

## Testing

### Test the Flow
1. **Create a verification search**:
   ```typescript
   await supabase.from('verification_searches').insert({
     user_id: 'test-user-id',
     serial_number: 'TEST123456',
     item_type: 'phone'
   });
   ```

2. **Report the item as stolen**:
   ```typescript
   await supabase.from('stolen_items').insert({
     serial_number: 'TEST123456',
     item_type: 'phone',
     brand: 'Test Brand',
     model: 'Test Model',
     date_stolen: new Date().toISOString(),
     location: 'Test Location'
   });
   ```

3. **Check notifications were created**:
   ```typescript
   const { data } = await supabase
     .from('stolen_item_notifications')
     .select('*')
     .eq('status', 'pending');
   ```

4. **Process notifications**:
   ```typescript
   const { data } = await supabase.functions.invoke('process-stolen-notifications');
   ```

5. **Verify email was sent** in Resend dashboard

## Email Configuration

### Required Resend Setup
1. Sign up at https://resend.com
2. Verify your domain at https://resend.com/domains
3. Create API key at https://resend.com/api-keys
4. Add `RESEND_API_KEY` secret in Supabase (already configured)

### Email Sender
Default: `SafeOrStolen Alerts <alerts@safeorstolen.com>`

**Important**: Change the sender email to match your verified Resend domain:
- Edit `supabase/functions/send-stolen-item-alert/index.ts`
- Update the `from` field in `resend.emails.send()`

## Automation

### Recommended: Set Up Cron Job
Use Supabase's built-in cron functionality or external service:

**Option 1: External Cron (recommended for reliability)**
```bash
# Call every 5 minutes via curl or similar
curl -X POST https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/process-stolen-notifications
```

**Option 2: GitHub Actions**
```yaml
name: Process Stolen Item Notifications
on:
  schedule:
    - cron: '*/5 * * * *'  # Every 5 minutes
jobs:
  process:
    runs-on: ubuntu-latest
    steps:
      - name: Process notifications
        run: |
          curl -X POST https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/process-stolen-notifications
```

## Security

### Row Level Security
- `stolen_item_notifications` table has RLS enabled
- Users can only view their own notifications
- Edge functions use service role key to bypass RLS for processing

### Rate Limiting
- Batch processing limited to 50 notifications per run
- 100ms delay between emails to avoid rate limits
- Failed notifications can be retried by running processor again

## Monitoring

### Check Notification Stats
```sql
-- Pending notifications
SELECT COUNT(*) FROM stolen_item_notifications WHERE status = 'pending';

-- Sent notifications (last 24 hours)
SELECT COUNT(*) FROM stolen_item_notifications 
WHERE status = 'sent' AND sent_at > NOW() - INTERVAL '24 hours';

-- Failed notifications
SELECT * FROM stolen_item_notifications 
WHERE status = 'failed' 
ORDER BY created_at DESC 
LIMIT 10;
```

### View Edge Function Logs
- [Send Alert Logs](https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions/send-stolen-item-alert/logs)
- [Process Notifications Logs](https://supabase.com/dashboard/project/lxrdzbknktwlubbmlsqe/functions/process-stolen-notifications/logs)

## Troubleshooting

### Emails Not Sending
1. Check Resend API key is configured
2. Verify domain is validated in Resend
3. Check edge function logs for errors
4. Ensure notifications are in 'pending' status

### Notifications Not Created
1. Verify trigger is enabled: `SELECT * FROM pg_trigger WHERE tgname = 'notify_stolen_item_trigger';`
2. Check if users have `email_notifications_enabled = true`
3. Ensure matching identifiers in both tables

### Duplicate Notifications
- System uses DISTINCT in query to prevent duplicates per user
- Each notification is marked as 'sent' after processing
- Reprocessing will only pick up new 'pending' notifications

## Future Enhancements
- [ ] SMS notifications via Twilio
- [ ] Push notifications (web/mobile)
- [ ] Digest emails (daily/weekly summary)
- [ ] Notification preferences (immediate vs digest)
- [ ] In-app notification center
- [ ] Webhook notifications for API users
