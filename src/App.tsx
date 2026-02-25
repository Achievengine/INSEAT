import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Lazy load all pages for code splitting
const LandingPage = lazy(() => import('./pages/LandingPage'));
const BlogList = lazy(() => import('./pages/Blog/BlogList'));
const BlogPost = lazy(() => import('./pages/Blog/BlogPost'));
const TableManagementPage = lazy(() => import('./pages/Products/TableManagementPage'));
const ReservationsPage = lazy(() => import('./pages/Products/ReservationsPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const IntegrationsPage = lazy(() => import('./pages/Integrations/IntegrationsPage'));
const IntegrationDetailPage = lazy(() => import('./pages/Integrations/IntegrationDetailPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Product Pages */}
          {/* Waitlist route intentionally redirected for current product positioning */}
          <Route path="/waitlist" element={<Navigate to="/features" replace />} />
          <Route path="/table-management" element={<TableManagementPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          {/* Main Pages */}
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* Integrations */}
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/integrations/:slug" element={<IntegrationDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
