import { ConceptProject } from '../types';
import nexaImg from '../assets/images/nexa_fitness_1791392503369.jpg';
import velaImg from '../assets/images/vela_fashion_1791392521921.jpg';
import dentaloraImg from '../assets/images/dentalora_clinic_1791392534487.jpg';
import forgeImg from '../assets/images/forge_saas_1791392552112.jpg';
import lumenImg from '../assets/images/lumen_roast_1791392565006.jpg';
import apexImg from '../assets/images/focuss_workspace_1791392484885.jpg';

export const projectsData: ConceptProject[] = [
  {
    id: 'nexa-fitness',
    name: 'NEXA Fitness',
    industry: 'Premium Fitness & Athletics',
    category: 'branding',
    featured: true,
    summary: 'Digital transformation concept modernizing an athletic gym into a high-performance wellness club.',
    problem: 'The brand suffered from an outdated, fragmented identity, a sluggish desktop-only website, and stagnant organic gym inquiries relying on walk-ins.',
    strategy: 'Build a high-contrast electric brand identity that appeals to high-income athletes, paired with a mobile-first trial booking funnel and Meta lead acquisition campaign.',
    solution: 'Designed a dynamic visual identity system, developed a sub-second load landing page with integrated trial booking, produced high-energy video reel templates, and structured localized lead-gen ad creatives.',
    deliverables: [
      'Brand identity & athletic vector logo suite',
      'High-conversion mobile-first trial landing page',
      '6x Hook-tested Instagram Reels & Meta ad variations',
      'Automated SMS lead confirmation workflow blueprint'
    ],
    expectedImpact: 'Projected 3.2x increase in free-trial bookings with reduced cost-per-lead through automated qualification.',
    image: nexaImg
  },
  {
    id: 'vela-fashion',
    name: 'VELA Studio',
    industry: 'D2C Contemporary Apparel',
    category: 'marketing',
    featured: true,
    summary: 'Direct-to-consumer fashion concept combining editorial minimalism with conversion-engineered shopping.',
    problem: 'Independent fashion labels struggle to justify premium price points against fast-fashion competitors due to generic Shopify themes and bland ad creatives.',
    strategy: 'Position VELA with editorial prestige through stark monochromatic art direction, bespoke typography, and high-CTR video lookbooks optimized for social discovery.',
    solution: 'Engineered an ultra-clean digital storefront aesthetic, designed luxury matte packaging elements, and produced short-form narrative videos designed to capture impulse purchase intent.',
    deliverables: [
      'Minimalist wordmark & brand packaging system',
      'High-fidelity eCommerce product page concept',
      'Editorial lookbook & paid social creative suite',
      'Klaviyo post-purchase automated retention sequence'
    ],
    expectedImpact: 'Expected +48% uplift in average order value (AOV) driven by elevated brand perception and curated bundles.',
    image: velaImg
  },
  {
    id: 'dentalora-clinic',
    name: 'DENTALORA Aesthetic Dental',
    industry: 'Healthcare & Aesthetics',
    category: 'websites',
    featured: true,
    summary: 'Modern patient acquisition and appointment funnel concept for a cosmetic dental clinic.',
    problem: 'Patients faced anxiety-inducing clinical imagery, confusing service menus, and phone-only booking that lost high-intent prospects outside office hours.',
    strategy: 'Reframe dental aesthetics as hospitality-level wellness. Build a frictionless multi-step online consultation quiz and automated calendar scheduler.',
    solution: 'Designed a serene, reassuring digital aesthetic with clear transparent pricing guides, a 60-second smile assessment quiz, and an automated appointment reminder flow.',
    deliverables: [
      'Warm architectural clinic branding & signage system',
      'Interactive Smile Assessment quiz & web booking portal',
      'Google Local Search SEO & review generation strategy',
      'Automated SMS booking confirmation & reminder pipeline'
    ],
    expectedImpact: 'Projected 65% reduction in appointment no-shows and capture of 24/7 self-service patient bookings.',
    image: dentaloraImg
  },
  {
    id: 'forge-saas',
    name: 'FORGE Systems',
    industry: 'B2B Developer Infrastructure',
    category: 'ai',
    featured: false,
    summary: 'Positioning and pipeline automation concept for an infrastructure analytics startup.',
    problem: 'Complex technical capabilities were buried in jargon-heavy documentation, resulting in low demo requests and slow sales development cycle.',
    strategy: 'Translate complex developer tooling into quantifiable business impact metrics, supported by an interactive product tour and automated lead routing.',
    solution: 'Constructed an authoritative dark-mode product showcase page, designed live interactive telemetry widgets, and mapped an n8n webhook triage pipeline for enterprise demo inquiries.',
    deliverables: [
      'High-contrast technical brand identity & icon system',
      'Interactive product demonstration landing page',
      'n8n inbound webhook triage & Slack alerting workflow',
      'Technical case study whitepaper layout design'
    ],
    expectedImpact: 'Accelerated qualified demo conversion with sub-5-minute automated inbound response time.',
    image: forgeImg
  },
  {
    id: 'lumen-roast',
    name: 'LUMEN Specialty Roasters',
    industry: 'Artisanal Food & Beverage',
    category: 'content',
    featured: false,
    summary: 'Direct-to-consumer coffee subscription brand concept merging craft aesthetics with recurring billing.',
    problem: 'Local roaster had exceptional product but was restricted to physical foot traffic and lacked a recurring digital subscription customer base.',
    strategy: 'Develop an artisanal packaging identity paired with an interactive "Find Your Roast" flavor profile quiz driving subscription recurring revenue.',
    solution: 'Crafted tactile matte black packaging designs, shot video brewing guides for social content, and structured a 3-step coffee quiz funnel.',
    deliverables: [
      'Custom packaging labels & roast flavor rating charts',
      'Interactive 30-second taste profile questionnaire',
      'Short-form manual brewing technique video series',
      'Subscription customer onboarding email sequence'
    ],
    expectedImpact: 'Establishment of predictable recurring monthly subscription volume alongside local retail.',
    image: lumenImg
  },
  {
    id: 'apex-living',
    name: 'APEX Architectural Residences',
    industry: 'Luxury Real Estate',
    category: 'websites',
    featured: false,
    summary: 'Lead qualification and digital showcase concept for luxury architectural developments.',
    problem: 'High-net-worth real estate buyers were turning away from cluttered multi-listing portals that degraded the exclusive feel of single architectural properties.',
    strategy: 'Develop dedicated, single-property digital showcases featuring cinematic video tours and pre-qualifying inquiry questionnaires.',
    solution: 'Constructed an editorial architectural portfolio website with cinematic full-screen video embeds, floor plan viewers, and private VIP showing inquiry intake.',
    deliverables: [
      'Monolithic editorial visual identity & typography',
      'Single-property digital showcase web architecture',
      'Private viewing qualification intake questionnaire',
      'VIP investor brochure digital editorial design'
    ],
    expectedImpact: 'Direct capture of qualified high-ticket private viewing requests bypassing commercial aggregator fees.',
    image: apexImg
  }
];
