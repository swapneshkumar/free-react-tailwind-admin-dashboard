import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { JSX } from 'react';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
