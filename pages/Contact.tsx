import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacyAgreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, privacyAgreed: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyAgreed: false
      });
      // Clear success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full py-8">
      
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Work With Us</h1>
        <p className="text-lg text-slate-700 font-light max-w-2xl mx-auto">
          Let's build the future of digital solutions together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
        {/* Contact Info Cards */}
        <div className="relative group animate-scale-in animate-float" style={{ animationDelay: '200ms' }}>
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow"></div>
          <div className="relative glass-panel rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-110">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-heartbeat">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">Email</h3>
            <a href="mailto:info@genio-digital.com" className="text-blue-700 font-medium hover:text-blue-900 transition-colors">
              info@genio-digital.com
            </a>
          </div>
        </div>

        <div className="relative group animate-scale-in animate-float" style={{ animationDelay: '300ms', animationDuration: '3.5s' }}>
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-teal-700 rounded-2xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow"></div>
          <div className="relative glass-panel rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-110">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center mb-4 shadow-xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-heartbeat">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors duration-300">Address</h3>
            <p className="text-slate-700 font-medium">
              Lõõtsa 5, 11415<br/>Tallinn, Estonia
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="relative group animate-scale-in max-w-3xl mx-auto" style={{ animationDelay: '500ms' }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500 animate-glow"></div>
        <div className="relative glass-panel rounded-2xl p-8 transform transition-all duration-500 group-hover:scale-[1.02]">
          {isSent ? (
            <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center mb-2 shadow-xl">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-slate-700">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setIsSent(false)} 
                className="mt-4 text-blue-700 font-semibold hover:text-blue-900 hover:underline transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h2>
              <p className="text-slate-600">Fill out the form below and we'll respond within 1-2 business days.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white/70 border border-slate-300/60 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all duration-300 hover:bg-white/80 focus:scale-[1.02]"
                />
                <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-all duration-300 group-focus-within:scale-110">👤</span>
              </div>
              <div className="relative group">
                 <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/70 border border-slate-300/60 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all duration-300 hover:bg-white/80 focus:scale-[1.02]"
                />
                 <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-all duration-300 group-focus-within:scale-110">🏢</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                 <input
                  type="email"
                  name="email"
                  placeholder="Work Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/70 border border-slate-300/60 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all duration-300 hover:bg-white/80 focus:scale-[1.02]"
                />
                <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-all duration-300 group-focus-within:scale-110">✉️</span>
              </div>
              <div className="relative group">
                 <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/70 border border-slate-300/60 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all duration-300 hover:bg-white/80 focus:scale-[1.02]"
                />
                <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-all duration-300 group-focus-within:scale-110">📞</span>
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="How Can We Help? *"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/70 border border-slate-300/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 resize-none transition-all duration-300 hover:bg-white/80 focus:scale-[1.01]"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-700">
                <input 
                  type="checkbox" 
                  required
                  checked={formData.privacyAgreed}
                  onChange={handleCheckbox}
                  className="w-4 h-4 text-blue-900 border-slate-300 rounded focus:ring-blue-500" 
                />
                <span>I agree with the <a href="#/privacy" className="underline hover:text-blue-900">Privacy Policy</a></span>
              </label>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="glass-button px-10 py-3 rounded-full text-white font-semibold hover:scale-110 transition-all duration-500 shadow-xl w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </span>
              </button>
            </div>
          </form>
          )}
        </div>
      </div>

    </div>
  );
};

export default Contact;