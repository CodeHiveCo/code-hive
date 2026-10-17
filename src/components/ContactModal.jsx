import { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Architecture',
    budget: '$15k - $30k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-[2.5rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden transition-colors">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ddf160]/15 dark:bg-[#ddf160]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9f8be7]/20 dark:bg-[#9f8be7]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-800 dark:text-white flex items-center justify-center transition-colors border border-black/5 dark:border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-16 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#ddf160]/30 border border-[#ddf160] text-neutral-900 dark:text-[#ddf160] flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-[#ddf160]" />
            </div>
            <h3 className="font-display text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Message Received!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-[#a1a1aa] max-w-sm">
              Our engineering team will review your brief and schedule an initial discovery call within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ddf160]/20 dark:bg-[#ddf160]/10 border border-[#ddf160]/30 text-xs font-semibold text-neutral-900 dark:text-[#ddf160] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9f8be7] dark:text-[#ddf160]" /> START A NEW INQUIRY
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">
              Say Hello to CodeHive
            </h3>
            <p className="text-sm text-neutral-600 dark:text-[#a1a1aa] mb-8">
              Tell us about your timeline, technical goals, and product aspirations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] mb-1.5 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] mb-1.5 font-medium">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                  >
                    <option>Full-Stack Web Architecture</option>
                    <option>Autonomous AI & LLM Workflows</option>
                    <option>UI/UX & Brand Design System</option>
                    <option>Mobile / Cross-Platform Product</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] mb-1.5 font-medium">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                  >
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] mb-1.5 font-medium">
                  Project Brief
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share key goals, target users, or launch dates..."
                  className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-neutral-900 text-white dark:bg-[#ddf160] dark:text-[#111215] hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#c8df46] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-black/10 dark:shadow-[#ddf160]/20"
              >
                <span>Transmit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
