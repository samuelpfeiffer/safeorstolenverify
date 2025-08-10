import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// Main verification form component
const VerificationForm = () => {
  const [itemType, setItemType] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setResult({
        status: 'clean',
        message: 'This item appears to be legitimate.',
        details: {
          identifier: identifier,
          type: itemType,
          checkedAgainst: ['FBI Database', 'Local Police Reports', 'Insurance Claims'],
          timestamp: new Date().toISOString()
        }
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Verify Your Item</h2>
        
        <form onSubmit={handleVerification} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Type
            </label>
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select item type</option>
              <option value="phone">Mobile Phone (IMEI)</option>
              <option value="laptop">Laptop (Serial Number)</option>
              <option value="vehicle">Vehicle (VIN)</option>
              <option value="other">Other Electronics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {itemType === 'phone' && 'IMEI Number'}
              {itemType === 'laptop' && 'Serial Number'}
              {itemType === 'vehicle' && 'VIN Number'}
              {!itemType && 'Identifier'}
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter the identifier to verify"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Verify Item'}
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Verification Result
            </h3>
            <p className="text-green-700 mb-4">{result.message}</p>
            <div className="text-sm text-green-600">
              <p><strong>Identifier:</strong> {result.details.identifier}</p>
              <p><strong>Type:</strong> {result.details.type}</p>
              <p><strong>Checked Against:</strong> {result.details.checkedAgainst.join(', ')}</p>
              <p><strong>Verified:</strong> {new Date(result.details.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple authentication component
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    alert(`${isLogin ? 'Login' : 'Sign up'} functionality will be implemented with Supabase`);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>
        
        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

// Navigation component
const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              Safe or Stolen
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Verify
            </Link>
            <Link
              to="/auth"
              className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main app component
export const VerificationApp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-8">
        <Routes>
          <Route path="/" element={<VerificationForm />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Safe or Stolen. Professional verification services.</p>
        </div>
      </footer>
    </div>
  );
};