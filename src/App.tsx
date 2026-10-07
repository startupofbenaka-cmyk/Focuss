/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ConceptProject } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProject, setActiveProject] = useState<ConceptProject | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  // Parse path on initial load
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
      if (!path || path === '') return 'home';
      if (path === 'services') return 'services';
      if (path === 'work' || path === 'portfolio') return 'work';
      if (path === 'about') return 'about';
      if (path === 'contact') return 'contact';
      return '404';
    };

    setCurrentPage(parsePath());

    const handlePopState = () => {
      setCurrentPage(parsePath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and Meta Description dynamically based on current page
  useEffect(() => {
    let title = 'Focuss — Build Better. Market Smarter. Grow Faster.';
    let description = 'Focuss helps ambitious businesses improve their brand, digital presence, marketing, sales and operations through creative execution, modern technology, and automation.';

    switch (currentPage) {
      case 'home':
        title = 'Focuss — Build Better. Market Smarter. Grow Faster.';
        description = 'Focuss helps ambitious businesses improve their brand, digital presence, marketing, sales and operations through creative execution, modern technology, AI and automation.';
        break;
      case 'services':
        title = 'Services — Focuss';
        description = 'Comprehensive growth services: Brand identity, video content, modern web engineering, performance advertising, AI & automation, and business operations.';
        break;
      case 'work':
        title = 'Our Work — Focuss';
        description = 'Selected concept projects and experiments demonstrating our approach across branding, web development, marketing funnels, and automation.';
        break;
      case 'about':
        title = 'About — Focuss';
        description = 'Small by design, focused by nature. Focuss is a founder-led growth partner combining creative execution, modern engineering, and business strategy.';
        break;
      case 'contact':
        title = 'Contact — Focuss';
        description = 'Connect directly with our founder to evaluate growth bottlenecks, build modern websites, or automate repetitive business operations.';
        break;
      case '404':
        title = 'Page Not Found — Focuss';
        description = 'Looks like you lost focus. The page you are looking for does not exist.';
        break;
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    try {
      if (window.location.pathname !== path) {
        window.history.pushState(null, '', path);
      }
    } catch {
      // In sandboxed environments if pushState is restricted
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    handleNavigate('contact');
  };

  const handleContactForSimilarProject = (projectName: string) => {
    setSelectedServiceForContact(`Concept Project Reference: ${projectName}`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F2F5F8] flex flex-col justify-between selection:bg-[#1677FF] selection:text-white overflow-x-hidden">
      {/* Sticky Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setActiveProject(project)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setActiveProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialService={selectedServiceForContact}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === '404' && (
          <NotFoundPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Concept Project Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContactForSimilar={handleContactForSimilarProject}
      />

      {/* Compact Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
