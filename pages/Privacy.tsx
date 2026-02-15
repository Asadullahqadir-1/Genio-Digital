import React from 'react';
import GlassCard from '../components/GlassCard';
import { Mail } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-lg text-slate-600 uppercase tracking-widest font-medium">GENIO Digital OÜ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <GlassCard title="1. Introduction">
          <p className="text-sm text-slate-700">
            GENIO DIGITAL OÜ is committed to protecting personal data. <br/><br/>
            This Privacy Policy explains how personal information is collected, used, and protected when visiting our website.
          </p>
        </GlassCard>

        <GlassCard title="2. Data Controller">
          <div className="text-sm text-slate-700 space-y-2">
            <p className="font-semibold">GENIO DIGITAL OÜ</p>
            <p>Registered Address: Tallinn, Estonia</p>
            <p>Email: info@geniodigital.com</p>
          </div>
        </GlassCard>

        <GlassCard title="3. Data We Collect">
          <p className="text-sm text-slate-700 mb-2">We may collect the following:</p>
          <ul className="text-sm text-slate-700 space-y-1">
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Full name</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Company name</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Email address</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Phone number</li>
             <li className="flex gap-2"><span className="text-blue-500">✓</span> Messages submitted via contact forms.</li>
          </ul>
        </GlassCard>

        <GlassCard title="4. Purpose of Processing">
          <p className="text-sm text-slate-700">
             We process data to:
          </p>
           <ul className="text-sm text-slate-700 space-y-1 mt-2">
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Respond to inquiries</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Provide services</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Improve website performance</li>
          </ul>
        </GlassCard>

         <GlassCard title="5. Legal Basis">
           <p className="text-sm text-slate-700 mb-2">We process your data based on:</p>
           <ul className="text-sm text-slate-700 space-y-1">
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Your consent</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Legitimate interest (Article 6(1f) GDPR)</li>
          </ul>
        </GlassCard>

        <GlassCard title="6. Data Sharing">
          <p className="text-sm text-slate-700">
            Personal data is kept only as long as necessary to fulfill the purpose for which it was collected or as required by law.
          </p>
        </GlassCard>

        <GlassCard title="7. Your Rights">
           <ul className="text-sm text-slate-700 space-y-1">
            <li className="flex gap-2"><span className="text-blue-500">✓</span> You have the right to access your data</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Request correction or deletion</li>
            <li className="flex gap-2"><span className="text-blue-500">✓</span> Withdraw consent at any time.</li>
          </ul>
        </GlassCard>

        <GlassCard title="8. Cookies">
          <p className="text-sm text-slate-700">
            Personal data is kept on a basic cookies only for functionality and performance. No tracking or advertising used without consent.
          </p>
        </GlassCard>

      </div>
       <div className="text-center mt-12 flex justify-center items-center gap-2 text-slate-200">
         <Mail size={20} />
         <span className="font-medium text-lg">info@geniodigital.com</span>
      </div>
    </div>
  );
};

export default Privacy;