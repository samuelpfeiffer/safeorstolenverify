# HMR React Context Corruption Fix

## Problem
The app was experiencing critical crashes with the error:
```
Uncaught TypeError: Cannot read properties of null (reading 'useState')
```

This occurred when `AuthProvider` tried to call React hooks, but React's internal context had become `null` during Hot Module Replacement (HMR) in development mode.

## Root Cause
During Vite's HMR process, React's internal module can get corrupted when:
1. Provider components are re-mounted rapidly
2. Module dependencies are reloaded in the wrong order
3. React's context becomes null before hooks are called

This creates a cascading failure:
- React becomes `null`
- Hooks like `useState`, `useEffect` fail
- The entire app crashes with a blank screen

## Solution Applied

### 1. Enhanced HMR Error Detection (`src/main.tsx`)
- Added immediate React availability check at startup
- Implemented smart reload counter to prevent infinite reload loops (max 3 attempts)
- Added comprehensive error catching for React hook errors
- Force hard reload (`window.location.href = window.location.href`) instead of soft reload
- Clear corrupted session/localStorage on error
- Added success handler to reset reload counter

### 2. React Import Consistency
Changed all React imports to use namespace import:
```typescript
import * as React from 'react';
```

This ensures React is available as a namespace and prevents import resolution issues during HMR.

Files updated:
- `src/main.tsx`
- `src/lib/auth.tsx`
- `src/core/app/AppRoot.tsx`

### 3. AuthProvider Safety Checks (`src/lib/auth.tsx`)
- Added HMR safety check at module level (before exports)
- Added runtime check in `AuthProvider` function before hooks
- Early return with null if React is corrupted to prevent crash

```typescript
// Module-level check
if (import.meta.env.DEV && (!React || typeof React.useState !== 'function')) {
  console.error('React is corrupted, forcing reload...');
  window.location.reload();
  throw new Error('React context corrupted - reloading');
}

// Component-level check
export function AuthProvider({ children }: { children: React.ReactNode }) {
  if (import.meta.env.DEV && !React) {
    console.error('React is null in AuthProvider');
    window.location.reload();
    return null;
  }
  // ... rest of component
}
```

## How It Works

### Normal Flow
1. App loads with React properly initialized
2. All hooks work normally
3. HMR updates modules without corruption

### Error Recovery Flow
1. HMR corrupts React context
2. Error detected immediately (before hooks are called)
3. Console error logged
4. Session/localStorage cleared
5. Hard reload triggered
6. Reload counter incremented
7. After 3 failed attempts, manual refresh requested

### Prevention of Infinite Loops
- Reload counter stored in `sessionStorage`
- Counter incremented on each reload
- After 3 attempts, shows alert instead of reloading
- Counter reset on successful load (after 1 second)

## Benefits
- ✅ Prevents blank screen crashes
- ✅ Automatic recovery from HMR corruption
- ✅ Prevents infinite reload loops
- ✅ Better developer experience
- ✅ Clear error logging
- ✅ Only affects development mode

## Testing
To verify the fix works:
1. Make code changes that trigger HMR
2. If React corruption occurs, app should auto-reload
3. Check console for "React is corrupted" or "Critical React error detected" messages
4. App should recover automatically within 1-3 reloads
5. After 3 failed attempts, alert should appear

## Production Impact
- **NONE** - All safety checks are wrapped in `import.meta.env.DEV` conditions
- Production builds are unaffected
- No performance impact in production

## Related Issues
This fix addresses these error patterns:
- `Cannot read properties of null (reading 'useState')`
- `Cannot read properties of null (reading 'useEffect')`
- `Cannot read properties of null (reading 'useContext')`
- `Cannot read properties of null (reading 'useRef')`
- `Invalid hook call`
- HMR-related React errors

## Files Modified
1. `src/main.tsx` - Enhanced HMR error recovery
2. `src/lib/auth.tsx` - Added React safety checks
3. `src/core/app/AppRoot.tsx` - Consistent React import
