import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    objetivo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envío de formulario (ej. API call)
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="md:w-1/2">
          <div className="font-mono text-emerald-500 text-sm mb-4">
            // initiate_contact_protocol
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Secure your perimeter.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            Our offensive and defensive security specialists are ready to analyze your current security posture and design a custom remediation strategy.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm">
              <span className="text-zinc-500">{'>'}</span> hello@vector-lab.com
            </div>
            <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm">
              <span className="text-zinc-500">{'>'}</span> PGP encryption available
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-zinc-900/30 p-8 border border-zinc-800 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              
              {/* Nombre */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-2">
                <label htmlFor="empresa" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
              </div>

              {/* Objetivo de Seguridad */}
              <div className="space-y-2">
                <label htmlFor="objetivo" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Security Objective
                </label>
                <div className="relative">
                  <select
                    id="objetivo"
                    name="objetivo"
                    required
                    value={formData.objetivo}
                    onChange={handleChange}
                    className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  >
                    <option value="" disabled className="text-zinc-500">Select an objective...</option>
                    <option value="soc2">SOC2 Compliance</option>
                    <option value="pentest">Pentest (Penetration Testing)</option>
                    <option value="cloud_review">Cloud Architecture Review</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-4 px-6 hover:bg-emerald-400 transition-colors flex justify-between items-center group mt-4"
              >
                <span>Request Evaluation</span>
                <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                  {'>'} execute
                </span>
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
