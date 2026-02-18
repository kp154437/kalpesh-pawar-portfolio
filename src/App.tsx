import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import WorkingFlow from './pages/WorkingFlow';
import Services from './components/Services';
import Portfolio from './components/ProjectShowcase';
import ClientBehavior from './components/Testimonials';
import Contact from './components/Contact';

// Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="bg-obsidian min-h-screen text-white overflow-x-hidden font-sans selection:bg-cobalt selection:text-white">
          <Routes>
            {/* Admin Routes (No Navbar) */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Public Routes (With Navbar) */}
            <Route path="*" element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<div className="pt-20"><Portfolio /></div>} />
                  <Route path="/services" element={<div className="pt-20"><Services /></div>} />
                  <Route path="/process" element={<WorkingFlow />} />
                  <Route path="/testimonials" element={<div className="pt-20"><ClientBehavior /></div>} />
                  <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
