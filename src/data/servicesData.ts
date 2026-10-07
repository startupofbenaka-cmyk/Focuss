import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'graphic-design',
    number: '01',
    title: 'Brand & Graphic Design',
    tagline: 'Visual systems that elevate perception and demand premium pricing.',
    description: 'We craft comprehensive identity systems and high-converting marketing creative that make your business instantly recognizable, memorable, and trusted.',
    iconName: 'Palette',
    capabilities: [
      'Brand identity systems',
      'Logo design & typography',
      'Social media creative systems',
      'High-converting ad creatives',
      'YouTube & article thumbnails',
      'Posters & outdoor advertising',
      'Print & digital marketing materials',
      'Keynote & pitch presentation design',
      'Comprehensive brand guidelines'
    ],
    deliverables: [
      'Master vector logos & mark variations',
      'Complete color palette & typography hierarchy',
      'Brand style guide & application rules',
      'High-resolution marketing & social templates',
      'Figma design system source files'
    ],
    impact: 'Elevates perceived business value and commands higher pricing power.'
  },
  {
    id: 'video-content',
    number: '02',
    title: 'Video & Content Production',
    tagline: 'Visual storytelling designed to capture attention and convert audiences.',
    description: 'In a noisy digital landscape, generic video gets scrolled past. We produce dynamic, hook-driven short-form reels, product demos, and narrative ads that engage.',
    iconName: 'Video',
    capabilities: [
      'Instagram Reels & TikTok videos',
      'Short-form vertical video editing',
      'Promotional & product launch videos',
      'Multi-platform social media content',
      'High-CTR paid advertising video',
      'Motion graphics & kinetic typography',
      'YouTube editing & pacing optimization',
      'Story-driven commercial content'
    ],
    deliverables: [
      'Platform-optimized vertical (9:16) & widescreen (16:9) cuts',
      'Sound design, color grading & captions styling',
      'Hook testing variants for paid ad iterations',
      'Organized media project archives'
    ],
    impact: 'Drives algorithmic reach, viewer retention, and qualified inbound curiosity.'
  },
  {
    id: 'web-development',
    number: '03',
    title: 'Modern Web Development',
    tagline: 'Lightning-fast, conversion-engineered websites built with modern workflows.',
    description: 'We build high-performance business websites and conversion-focused landing pages using modern frameworks and AI-assisted rapid web development to ship faster without compromising code quality.',
    iconName: 'Globe',
    capabilities: [
      'High-converting business websites',
      'Conversion-focused landing pages',
      'Rapid prototype-to-production workflows',
      'AI-assisted rapid web development',
      'Fully responsive & mobile-first architecture',
      'WordPress & headless CMS integration',
      'Core Web Vitals & technical SEO optimization',
      'Custom interactive calculators & funnels'
    ],
    deliverables: [
      'Clean, accessible, production-grade frontend codebase',
      'Sub-second page load speeds & mobile responsiveness',
      'Lead capture & analytics tracking integration',
      'Interactive components and zero-layout-shift design'
    ],
    impact: 'Transforms passive web visitors into paying customers and qualified leads.'
  },
  {
    id: 'ads-marketing',
    number: '04',
    title: 'Paid Ads & Performance Marketing',
    tagline: 'Data-driven campaigns that turn advertising spend into predictable customer pipeline.',
    description: 'We structure, test, and manage paid acquisition funnels on Meta and Google, pairing razor-sharp creative testing with methodical audience targeting.',
    iconName: 'TrendingUp',
    capabilities: [
      'Meta (Facebook & Instagram) advertising',
      'Google Search, Display & Performance Max ads',
      'End-to-end campaign architecture',
      'Creative strategy & iterative split-testing',
      'Qualified B2B & local lead generation',
      'Conversion rate optimization (CRO)',
      'Multi-touch marketing funnels',
      'Behavioral retargeting & re-engagement strategy'
    ],
    deliverables: [
      'Targeting matrices & campaign structures',
      'Weekly performance analytics & cohort breakdown',
      'Iterative ad creative refreshes',
      'Conversion event tracking setup (Pixel / CAPI / GA4)'
    ],
    impact: 'Lowers customer acquisition cost (CAC) and establishes scalable growth levers.'
  },
  {
    id: 'ai-automation',
    number: '05',
    title: 'AI Workflows & Business Automation',
    tagline: 'Replace manual busywork with intelligent systems that work 24/7.',
    description: 'We audit your operating bottlenecks and engineer reliable automation workflows, AI agents, and voice agents using n8n and modern APIs to streamline client intake and internal ops.',
    iconName: 'Cpu',
    capabilities: [
      'Custom n8n-based automation pipelines',
      'Autonomous AI agents for research & triage',
      'Inbound voice agents for appointment booking',
      'Automated lead qualification & routing',
      'Intelligent customer support triage',
      'Internal operational workflow automation',
      'Document parsing & data extraction systems',
      'Cross-platform CRM & database synchronization'
    ],
    deliverables: [
      'Configured n8n workflow blueprints & webhooks',
      'Custom prompt architectures & LLM tool definitions',
      'CRM sync & instant alert notification channels',
      'Fail-safe logging and error handling pipelines'
    ],
    impact: 'Recovers 15–30 hours weekly of founder and team time while accelerating response times.'
  },
  {
    id: 'business-growth',
    number: '06',
    title: 'Business Strategy & Operations',
    tagline: 'Data-backed analysis to fix broken funnels and unlock untapped revenue.',
    description: 'Growth is not just marketing—it is having the right offer, clear positioning, and smooth customer journeys. We analyze your business model to remove friction and capitalize on high-margin opportunities.',
    iconName: 'Briefcase',
    capabilities: [
      'Deep business case studies & audit reports',
      'Competitor landscape & pricing analysis',
      'End-to-end customer journey mapping',
      'Sales process & consultation call optimization',
      'Core offer restructuring & value stacking',
      'Frictionless internal process improvement',
      'Growth bottleneck identification',
      'Strategic market opportunity research'
    ],
    deliverables: [
      'Comprehensive Growth & Bottleneck Diagnostic Report',
      'Customer journey friction map with tactical remedies',
      'Revised offer architecture & pricing ladder',
      'Actionable 90-day implementation roadmap'
    ],
    impact: 'Eliminates structural inefficiencies and clarifies the path to consistent growth.'
  }
];
