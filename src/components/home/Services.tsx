// src/components/home/Services.tsx
import { fetchServices } from '@/lib/googleSheets';
import { Cloud, Shield, Cog, TrendingUp, Database, Users } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  'cloud': Cloud,
  'shield': Shield,
  'cog': Cog,
  'trending': TrendingUp,
  'database': Database,
  'users': Users,
};

const fallbackServices = [
  {
    id: '1',
    title: 'Consultoria SAP S/4HANA',
    description: 'Implementação e otimização de SAP S/4HANA. Experiência em 28+ empresas com resultados mensuráveis.',
    icon: 'database',
    category: 'Consultoria',
  },
  {
    id: '2',
    title: 'Transformação Digital',
    description: 'Estratégia e execução de projetos de transformação digital com foco em ROI e eficiência operacional.',
    icon: 'trending',
    category: 'Estratégia',
  },
  {
    id: '3',
    title: 'Cloud Architecture',
    description: 'Arquitetura e migração para nuvem (Azure, AWS, GCP). Otimização de custos e performance.',
    icon: 'cloud',
    category: 'Infraestrutura',
  },
  {
    id: '4',
    title: 'Cybersecurity & Compliance',
    description: 'Frameworks NIST, ISO 27001, LGPD. Segurança em infraestruturas críticas e OT.',
    icon: 'shield',
    category: 'Segurança',
  },
  {
    id: '5',
    title: 'Gestão de TI e PMO',
    description: 'Governança de TI, gestão de portfólio e PMO. Experiência com equipes de 20-60 pessoas.',
    icon: 'users',
    category: 'Gestão',
  },
  {
    id: '6',
    title: 'Smart Grid & IoT',
    description: 'Implementação de smart grids, telemedição e soluções IoT para utilities e indústria.',
    icon: 'cog',
    category: 'Inovação',
  },
];

export default async function Services() {
  let services = await fetchServices();
  
  if (!services || services.length === 0) {
    services = fallbackServices as any;
  }

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
            Nossas Soluções
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Serviços que transformam negócios
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Soluções completas em tecnologia e gestão, do planejamento estratégico 
            à execução operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.icon] || Cog;
            
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
              >
                <div className="mb-6 inline-flex rounded-lg bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>

                {service.category && (
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {service.category}
                  </span>
                )}

                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-gray-800 transition-all"
          >
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  );
}