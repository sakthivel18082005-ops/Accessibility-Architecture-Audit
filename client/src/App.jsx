import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DashboardLayout from './components/DashboardLayout';

import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;