import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import AuthForm from '../features/auth/AuthForm';

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Reset your password</h2>
          <p className="text-sm text-gray-600 mb-6">Enter the email associated with your account and we'll send a reset link.</p>
          <AuthForm mode="reset" onSubmit={(payload) => console.log('reset', payload)} />
          <p className="text-sm text-gray-600 mt-6 text-center">
            Remembered? <Link to="/login" className="text-yellow-600 hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
