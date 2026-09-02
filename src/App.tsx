import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './lib/theme';
import { HomePage } from './pages/HomePage';
import { BlogHubPage } from './pages/BlogHubPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiesPolicyPage } from './pages/CookiesPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminPasswordRecoveryPage } from './pages/admin/AdminPasswordRecoveryPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Institutional Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/conteudos" element={<BlogHubPage />} />
          <Route path="/conteudos/:slug" element={<ArticleDetailPage />} />
          
          {/* Compliance & Institutional Policies */}
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/politica-de-cookies" element={<CookiesPolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUsePage />} />

          {/* Administration Portal */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/recuperar-senha" element={<AdminPasswordRecoveryPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
