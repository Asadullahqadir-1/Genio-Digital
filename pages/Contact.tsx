import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

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
      <div className="text-center mb-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Work With Us</h1>
        <p className="text-lg text-slate-700 font-light">
          Let's build the future of digital solutions together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Text */}
        <div className="hidden lg:block space-y-6 pt-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-bold text-slate-900">Why Contact Us?</h2>
          <p className="text-xl text-slate-700 font-light leading-relaxed">
             Whether you have a groundbreaking idea or need a partner to scale your digital ecosystem, our team is ready to help.
          </p>
          <div className="space-y-4 pt-4">
             <div className="flex items-center gap-3 text-slate-800">
               <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">1</span>
               <span className="font-medium">Initial Consultation (Free)</span>
             </div>
             <div className="flex items-center gap-3 text-slate-800">
               <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">2</span>
               <span className="font-medium">Project Scoping</span>
             </div>
             <div className="flex items-center gap-3 text-slate-800">
               <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">3</span>
               <span className="font-medium">Agile Development</span>
             </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="glass-panel rounded-xl p-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {isSent ? (
            <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setIsSent(false)} 
                className="mt-4 text-blue-700 font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-slate-50/70 border border-slate-200/60 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all"
                />
                <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-colors">👤</span>
              </div>
              <div className="relative group">
                 <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-50/70 border border-slate-200/60 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all"
                />
                 <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-colors">🏢</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                 <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50/70 border border-slate-200/60 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all"
                />
                <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-blue-500 transition-colors">✉️</span>
              </div>
              <div className="relative flex group">
                 <div className="flex items-center px-3 bg-slate-50/70 border border-r-0 border-slate-200/60 rounded-l-lg text-slate-600 text-sm group-focus-within:border-blue-500 group-focus-within:bg-white transition-all">
                   🇩🇪 +49 
                 </div>
                 <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50/70 border border-slate-200/60 rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 transition-all"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="How Can We Help?"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-50/70 border border-slate-200/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-500 resize-none transition-all"
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
                className="glass-button px-8 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
          )}
           <p className="text-center text-xs text-slate-600 mt-6">We'll get back to you within 1-2 business days.</p>
        </div>
      </div>
      
      <div className="text-center mt-12 flex justify-center items-center gap-2 text-slate-200 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
         <Mail size={20} />
         <span className="font-medium text-lg">info@geniodigital.com</span>
      </div>

    </div>
  );
};

export default Contact;