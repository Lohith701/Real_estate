import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Future routes will be added here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
