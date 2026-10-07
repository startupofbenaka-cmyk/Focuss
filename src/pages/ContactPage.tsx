import React, { useState, useEffect } from 'react';
import { PageId, LeadEnquiry } from '../types';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck,
  Eye,
  Trash2
} from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: initialService || 'Full Growth Partner (Comprehensive)',
    budget: '$5,000 – $10,000',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Stored leads view for founder management & verification (Section 19)
  const [storedLeads, setStoredLeads] = useState<LeadEnquiry[]>([]);
  const [showLeadDrawer, setShowLeadDrawer] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('focuss_lead_enquiries');
      if (saved) {
        setStoredLeads(JSON.parse(saved));
      }
    } catch {
      // LocalStorage access exception fallback
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Please provide your business or startup name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid business email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a phone number for scheduling.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please tell us a bit about your project or current bottleneck.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide a little more detail (at least 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Realistic processing
    setTimeout(() => {
      try {
        const newLead: LeadEnquiry = {
          id: 'lead_' + Date.now(),
          name: formData.name.trim(),
          businessName: formData.businessName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          budget: formData.budget,
          message: formData.message.trim(),
          createdAt: new Date().toLocaleString()
        };

        const updated = [newLead, ...storedLeads];
        setStoredLeads(updated);
        localStorage.setItem('focuss_lead_enquiries', JSON.stringify(updated));

        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          businessName: '',
          email: '',
          phone: '',
          service: 'Full Growth Partner (Comprehensive)',
          budget: '$5,000 – $10,000',
          message: ''
        });
        setErrors({});
      } catch (err) {
        setIsSubmitting(false);
        setSubmitError('Something went wrong. Please try again or contact us directly.');
      }
    }, 450);
  };

  const handleClearLeads = () => {
    localStorage.removeItem('focuss_lead_enquiries');
    setStoredLeads([]);
  };

  return (
    <div className="pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* 1. HERO HEADER */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded">
          Direct Founder Consultation
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Let's build something that moves your business forward.
        </h1>
        <p className="text-base sm:text-lg text-[#9AA6B2] leading-relaxed">
          Tell us where your business is currently at, what isn't converting, or what you'd like to automate. We'll respond with actionable insights within 24 hours.
        </p>
      </div>

      {/* 2. MAIN GRID: CONTACT FORM + DIRECT DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Container */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#090D14] border border-white/10 relative">
          {submitSuccess ? (
            <div className="py-12 px-4 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  Message sent successfully. We'll get back to you soon.
                </h3>
                <p className="text-sm text-[#9AA6B2] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your enquiry into our triage queue and will review your business requirements directly.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#101722] hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                >
                  Send Another Message
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] rounded-xl transition-colors"
                >
                  Explore Concept Projects
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-xs text-rose-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Name & Business Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white mb-2">
                    Your Name <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-[#05070B] border text-sm text-white placeholder-[#9AA6B2]/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-[#1677FF] focus:ring-[#1677FF]/30'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-xs font-medium text-white mb-2">
                    Business / Startup Name <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Acme Co."
                    className={`w-full px-4 py-3 rounded-xl bg-[#05070B] border text-sm text-white placeholder-[#9AA6B2]/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.businessName
                        ? 'border-rose-500 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-[#1677FF] focus:ring-[#1677FF]/30'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.businessName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white mb-2">
                    Business Email <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@acme.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#05070B] border text-sm text-white placeholder-[#9AA6B2]/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-[#1677FF] focus:ring-[#1677FF]/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-white mb-2">
                    Phone / WhatsApp <span className="text-[#1677FF]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 rounded-xl bg-[#05070B] border text-sm text-white placeholder-[#9AA6B2]/50 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-500 focus:ring-rose-500/50'
                        : 'border-white/10 focus:border-[#1677FF] focus:ring-[#1677FF]/30'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Required & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-white mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-sm text-white focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/30 transition-all cursor-pointer"
                  >
                    <option value="Full Growth Partner (Comprehensive)">Full Growth Partner (Comprehensive)</option>
                    <option value="Brand & Graphic Design">Brand & Graphic Design</option>
                    <option value="Video & Content Production">Video & Content Production</option>
                    <option value="Modern Web Development">Modern Web Development</option>
                    <option value="Paid Ads & Marketing">Paid Ads & Marketing</option>
                    <option value="AI Workflows & Business Automation">AI Workflows & Business Automation</option>
                    <option value="Business Strategy & Operations">Business Strategy & Operations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-white mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#05070B] border border-white/10 text-sm text-white focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/30 transition-all cursor-pointer"
                  >
                    <option value="$2,000 – $5,000">$2,000 – $5,000 (Sprint)</option>
                    <option value="$5,000 – $10,000">$5,000 – $10,000 (Full Build)</option>
                    <option value="$10,000 – $25,000">$10,000 – $25,000 (Transformation)</option>
                    <option value="$25,000+">$25,000+ (Ongoing Ecosystem)</option>
                  </select>
                </div>
              </div>

              {/* Tell us about your project */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white mb-2">
                  Tell us about your project <span className="text-[#1677FF]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What is your business doing, what is current bottleneck or target milestone, and how soon are you looking to begin?"
                  className={`w-full px-4 py-3 rounded-xl bg-[#05070B] border text-sm text-white placeholder-[#9AA6B2]/50 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/50'
                      : 'border-white/10 focus:border-[#1677FF] focus:ring-[#1677FF]/30'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#2D8CFF] active:scale-[0.99] disabled:opacity-50 rounded-xl shadow-lg shadow-[#1677FF]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Transmitting Enquiry...</span>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#9AA6B2] text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Strict privacy. Direct founder review. Never shared with 3rd parties.</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Info & Transparency */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct channels */}
          <div className="p-8 rounded-3xl bg-[#090D14] border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Access Channels</h3>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              If you prefer to bypass the form and reach out directly for a time-sensitive venture, our channels are open:
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:hello@focuss.growth"
                className="flex items-center justify-between p-4 rounded-xl bg-[#05070B] border border-white/10 hover:border-[#1677FF] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#101722] flex items-center justify-center text-[#1677FF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9AA6B2] block">Official Email</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#2D8CFF] transition-colors">
                      hello@focuss.growth
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9AA6B2] group-hover:text-white transition-colors" />
              </a>

              <a
                href="tel:+18005553628"
                className="flex items-center justify-between p-4 rounded-xl bg-[#05070B] border border-white/10 hover:border-[#1677FF] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#101722] flex items-center justify-center text-[#1677FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9AA6B2] block">Direct Consultation</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#2D8CFF] transition-colors">
                      +1 (800) 555-FOCS
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#9AA6B2] group-hover:text-white transition-colors" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[#101722] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Clock className="w-4 h-4 text-[#2D8CFF]" />
                <span>Response SLA</span>
              </div>
              <p className="text-xs text-[#9AA6B2] leading-relaxed">
                All business inquiries receive an initial technical and strategic assessment within 1 business day.
              </p>
            </div>
          </div>

          {/* Section 19: Storage & Lead Inspector for Founder/Admin verification */}
          <div className="p-6 rounded-2xl bg-[#101722]/50 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Inquiry Log
              </span>
              <span className="text-xs text-[#9AA6B2] font-mono">
                {storedLeads.length} logged
              </span>
            </div>
            <p className="text-xs text-[#9AA6B2] leading-relaxed">
              Submissions are recorded into local browser storage and structured for direct webhook synchronization with CRM pipelines.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setShowLeadDrawer(!showLeadDrawer)}
                className="px-3 py-1.5 text-xs font-medium text-white bg-[#05070B] hover:bg-[#101722] border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showLeadDrawer ? 'Hide Saved Leads' : 'Inspect Saved Leads'}</span>
              </button>
              {storedLeads.length > 0 && (
                <button
                  onClick={handleClearLeads}
                  className="px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {showLeadDrawer && (
              <div className="mt-3 p-3 rounded-xl bg-[#05070B] border border-white/10 max-h-56 overflow-y-auto space-y-3">
                {storedLeads.length === 0 ? (
                  <p className="text-xs text-[#9AA6B2] italic py-2 text-center">
                    No leads submitted in this browser yet. Fill out the form to test live capture.
                  </p>
                ) : (
                  storedLeads.map((lead) => (
                    <div key={lead.id} className="p-2.5 rounded-lg bg-[#101722] border border-white/5 text-xs space-y-1">
                      <div className="flex items-center justify-between text-white font-semibold">
                        <span>{lead.name} · {lead.businessName}</span>
                        <span className="text-[10px] text-[#9AA6B2] font-mono">{lead.createdAt}</span>
                      </div>
                      <p className="text-[#2D8CFF] text-[11px]">{lead.service} ({lead.budget})</p>
                      <p className="text-[#9AA6B2] text-[11px] line-clamp-2">{lead.message}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
