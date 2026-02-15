import React from 'react';

const Imprint: React.FC = () => {
  return (
    <div className="w-full py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Impressum</h1>
        <p className="text-lg text-slate-600 uppercase tracking-widest font-medium">(LEGAL DISCLOSURE)</p>
        <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
          An impressum is a legal requirement in the European Union for websites and communications to provide transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Row 1 */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-2">1. Company Information</h3>
          <p className="text-slate-700 font-medium">GENIO DIGITAL OÜ</p>
        </div>

        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-2">2. Registered Address</h3>
          <p className="text-slate-700 flex items-center gap-2">
            <span className="text-blue-700">📍</span>
            Narva mnt 5, 10117 Tallinn, Estonia
          </p>
        </div>

         {/* Row 2 (Full Width equivalent split visually) */}
         <div className="glass-panel rounded-xl p-6 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                 <h3 className="text-lg font-bold text-slate-800 mb-2">4. Registration Details</h3>
                 <ul className="space-y-2 text-slate-700 text-sm">
                     <li className="flex gap-2"><span className="text-blue-500">✓</span> Company Registration Number: 16515762</li>
                     <li className="flex gap-2"><span className="text-blue-500">✓</span> EU VAT Identification Number: EE102651556</li>
                 </ul>
             </div>
             <div>
                {/* Empty spacer or additional info if needed */}
             </div>
         </div>

         {/* Legal Notice */}
         <div className="glass-panel rounded-xl p-6 md:col-span-2 space-y-4">
             <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">⚖️ Legal Notice</h3>
                <p className="text-sm text-slate-700">Responsible for content according to § 5 TMG & § 18 MStV:</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li className="flex gap-2"><span className="text-blue-500">✓</span> GENIO DIGITAL OÜ</li>
                    <li className="flex gap-2"><span className="text-blue-500">✓</span> Narva mnt 5, 10117 Tallinn, Estonia</li>
                </ul>
             </div>

             <div className="pt-4 border-t border-slate-200/50">
                <h3 className="text-lg font-bold text-slate-800 mb-2">⚖️ Liability Disclaimer:</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                   The content of this website has been created with the utmost care. However, GENIO DIGITAL OÜ cannot guarantee the accuracy, completeness, or timeliness of the information provided.
                </p>
                <a href="mailto:info@geniodigital.com" className="flex items-center gap-2 mt-4 text-slate-800 font-medium hover:text-blue-700 transition-colors">
                    ✉️ info@geniodigital.com
                </a>
             </div>
         </div>

      </div>
    </div>
  );
};

export default Imprint;