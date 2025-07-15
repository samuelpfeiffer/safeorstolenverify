import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { AuthProvider } from '@/core/providers/AuthProvider';
import HomePage from '@/pages/HomePage';
import AuthPage from '@/pages/AuthPage';
import DashboardPage from '@/pages/DashboardPage';
import VerificationPage from '@/pages/VerificationPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/verify" element={<VerificationPage />} />
          </Routes>
          <Toaster />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;