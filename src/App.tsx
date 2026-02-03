import React, { useState } from 'react';
import { Login } from './components/Login';
import { AdminDashboard } from './components/AdminDashboard';
import { EmployeeDashboard } from './components/EmployeeDashboard';
import { DataProvider } from './contexts/DataContext';
import { Toaster } from 'sonner@2.0.3';

export type UserRole = 'admin' | 'employee' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'employee';
  avatar?: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<string>('login');

  const handleLogin = (role: 'admin' | 'employee') => {
    const user: User = {
      id: role === 'admin' ? '1' : '2',
      name: role === 'admin' ? 'Sarah Chen' : 'John Martinez',
      email: role === 'admin' ? 'sarah@startup.com' : 'john@startup.com',
      role: role,
      avatar: role === 'admin' ? '👩‍💼' : '👨‍💻'
    };
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  if (currentView === 'login' || !currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      <DataProvider>
        {currentUser.role === 'admin' ? (
          <AdminDashboard
            user={currentUser}
            onLogout={handleLogout}
            currentView={currentView}
            onViewChange={handleViewChange}
          />
        ) : (
          <EmployeeDashboard
            user={currentUser}
            onLogout={handleLogout}
            currentView={currentView}
            onViewChange={handleViewChange}
          />
        )}
      </DataProvider>
    </>
  );
}

export default App;