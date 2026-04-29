import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'GRC',
    description: 'Frameworks de Gobernanza, Riesgo y Cumplimiento adaptados a las regulaciones modernas y estándares internacionales.'
  },
  {
    id: '02',
    title: 'Cloud Engineering con Terraform',
    description: 'Despliegue de Infraestructura como Código (IaC) con arquitecturas seguras por diseño en AWS, Azure y GCP.'
  },
  {
    id: '03',
    title: 'Offensive Security',
    description: 'Pruebas de penetración avanzadas, simulaciones de adversarios (Red Teaming) y análisis de vulnerabilidades.'
  },
  {
    id: '04',
    title: 'SecOps',
    description: 'Monitoreo continuo, respuesta a incidentes y operaciones de threat hunting para neutralizar amenazas.'
  },
  {
    id: '05',
    title: 'Strategic Advisory',
    description: 'Servicios de CISO virtual (vCISO), consultoría estratégica de ciberseguridad y alineación con el negocio.'
  },
  {
    id: '06',
    title: 'Enterprise IT',
    description: 'Arquitectura corporativa segura, implementación de Zero Trust y gestión de identidades y accesos.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Nuestros Pilares de Servicio
          </h2>
          <p className="font-mono text-zinc-500 text-sm">
            // capacidades centrales de la plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 transition-all duration-300 flex flex-col"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="font-mono text-emerald-500 text-sm mb-6">
                [{service.id}]
              </div>
              
              <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
