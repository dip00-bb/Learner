'use client';
import AuthProvider from '../Contexts/AuthContext/AuthProvider';

export default function AuthProviderWrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
