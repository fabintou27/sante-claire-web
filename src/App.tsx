import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/categorie/:category" element={<CategoryPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}