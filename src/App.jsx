import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import { PageLoader } from './components/common/SkeletonLoader';
import './index.css';

// Lazy-load all page components → smaller initial JS bundle = faster first load
const HomePage = lazy(() => import('./pages/HomePage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailsPage = lazy(() => import('./pages/PropertyDetailsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Suspense fallback={<PageLoader message="Loading page…" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/properties/:id" element={<PropertyDetailsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

