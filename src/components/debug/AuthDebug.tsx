import React from 'react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const AuthDebug = () => {
  const { user, session, loading, initialized, signOut } = useAuth();

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Authentication Debug Info</CardTitle>
        <CardDescription>
          Current authentication state and debugging information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Loading:</strong> {loading ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>Initialized:</strong> {initialized ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>User:</strong> {user ? 'Authenticated' : 'Not authenticated'}
          </div>
          <div>
            <strong>Session:</strong> {session ? 'Active' : 'None'}
          </div>
        </div>

        {user && (
          <div className="space-y-2 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200">User Info:</h4>
            <div className="text-sm space-y-1">
              <div><strong>ID:</strong> {user.id}</div>
              <div><strong>Email:</strong> {user.email}</div>
              <div><strong>Full Name:</strong> {user.fullName || 'Not set'}</div>
              <div><strong>Email Verified:</strong> {user.emailVerified ? 'Yes' : 'No'}</div>
            </div>
          </div>
        )}

        {session && (
          <div className="space-y-2 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Session Info:</h4>
            <div className="text-sm space-y-1">
              <div><strong>Access Token:</strong> {session.access_token ? 'Present' : 'Missing'}</div>
              <div><strong>Refresh Token:</strong> {session.refresh_token ? 'Present' : 'Missing'}</div>
              <div><strong>Expires At:</strong> {session.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : 'Not set'}</div>
            </div>
          </div>
        )}

        {!user && !loading && initialized && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Not Authenticated</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              User is not signed in. Authentication and payment features will not work.
            </p>
          </div>
        )}

        {user && (
          <div className="pt-4">
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </div>
        )}

        <div className="text-xs text-gray-500 pt-4 border-t">
          <div>Supabase URL: {import.meta.env.VITE_SUPABASE_URL || 'Not set'}</div>
          <div>Environment: {import.meta.env.MODE}</div>
        </div>
      </CardContent>
    </Card>
  );
};