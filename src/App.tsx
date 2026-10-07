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

  // Parse path or hash on initial load & updates (GitHub Pages friendly)
  const parseCurrentRoute = (): PageId => {
    // 1. Check URL query params (e.g., from 404.html redirect: ?p=/services)
    const searchParams = new URLSearchParams(window.location.search);
    const redirectParam = searchParams.get('p');
    if (redirectParam) {
      const cleanParam = redirectParam.toLowerCase().replace(/^\/|\/$/g, '');
      if (cleanParam === 'services') return 'services';
      if (cleanParam === 'work' || cleanParam === 'portfolio') return 'work';
      if (cleanParam === 'about') return 'about';
      if (cleanParam === 'contact') return 'contact';
      if (!cleanParam) return 'home';
    }

    // 2. Check hash routing (e.g. #/services or #services)
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '').replace(/\/$/, '');
    if (hash === 'services') return 'services';
    if (hash === 'work' || hash === 'portfolio') return 'work';
    if (hash === 'about') return 'about';
    if (hash === 'contact') return 'contact';
    if (hash === 'home' || hash === '') {
      // If hash is explicitly home or empty, check pathname next
    } else {
      return '404';
    }

    // 3. Check pathname (extract last relevant path segment to accommodate GitHub repo subpaths)
    const pathSegments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
    if (pathSegments.length === 0) return 'home';

    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment === 'services') return 'services';
    if (lastSegment === 'work' || lastSegment === 'portfolio') return 'work';
    if (lastSegment === 'about') return 'about';
    if (lastSegment === 'contact') return 'contact';

    // If path is just the repo name (e.g. /focuss-repo/)
    if (pathSegments.length === 1 && !['services', 'work', 'about', 'contact'].includes(lastSegment)) {
      return 'home';
    }

    return 'home';
  };

  useEffect(() => {
    setCurrentPage(parseCurrentRoute());

    const handleRouteChange = () => {
      setCurrentPage(parseCurrentRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
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
    try {
      // Use hash-compatible routing for 100% GitHub Pages refresh support
      if (page === 'home') {
        if (window.location.hash) {
          window.history.pushState(null, '', window.location.pathname);
        }
      } else {
        window.location.hash = `#/${page}`;
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
