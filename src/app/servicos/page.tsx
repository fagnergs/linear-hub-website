// src/app/servicos/page.tsx
import { fetchServices } from '@/lib/googleSheets';
import { Cloud, Shield, Cog, TrendingUp, Database, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Serviços',
  description: 'Soluções completas em tecnologia e gestão. SAP, Cloud, Cybersecurity, Transformação Digital e muito mais.',
};

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
    details: 'Expertise completa em SAP S/4HANA, desde análise de requisitos até go-live e suporte pós-implantação. Experiência em migração de versões anteriores, customizações, integrações e otimização de processos. Atuação em diversos módulos: FI/CO, MM, SD, PP, QM, PM.',
    benefits: [
      'Redução de até 70% em custos operacionais',
      'Implementação em tempo recorde',
      'Expertise em 28+ empresas',
      'Suporte completo pós go-live',
      'Treinamento de equipes'
    ]
  },
  {
    id: '2',
    title: 'Transformação Digital',
    description: 'Estratégia e execução de projetos de transformação digital com foco em ROI e eficiência operacional.',
    icon: 'trending',
    category: 'Estratégia',
    details: 'Desenvolvimento de estratégias de transformação digital alinhadas aos objetivos de negócio. Roadmap tecnológico, gestão da mudança, automação de processos e integração de sistemas. Foco em resultados mensuráveis e ROI.',
    benefits: [
      'Estratégia alinhada ao negócio',
      'ROI comprovado',
      'Gestão completa da mudança',
      'Automação de processos',
      'Integração de sistemas legados'
    ]
  },
  {
    id: '3',
    title: 'Cloud Architecture',
    description: 'Arquitetura e migração para nuvem (Azure, AWS, GCP). Otimização de custos e performance.',
    icon: 'cloud',
    category: 'Infraestrutura',
    details: 'Arquitetura cloud-native, migração de workloads, otimização de custos e performance. Experiência em Azure, AWS e GCP. Design de soluções escaláveis, resilientes e seguras. Implementação de DevOps e CI/CD.',
    benefits: [
      'Multi-cloud expertise (Azure, AWS, GCP)',
      'Redução de custos de infraestrutura',
      'Alta disponibilidade e escalabilidade',
      'DevOps e automação',
      'Segurança cloud-native'
    ]
  },
  {
    id: '4',
    title: 'Cybersecurity & Compliance',
    description: 'Frameworks NIST, ISO 27001, LGPD. Segurança em infraestruturas críticas e OT.',
    icon: 'shield',
    category: 'Segurança',
    details: 'Implementação de frameworks de segurança (NIST, ISO 27001, ISO 27002). Adequação à LGPD. Especialização em segurança de infraestruturas críticas, OT (Operational Technology) e smart grids. Gestão de riscos, auditorias e resposta a incidentes.',
    benefits: [
      'Compliance regulatório completo',
      'Expertise em infraestruturas críticas',
      'Segurança OT e IoT',
      'Gestão de riscos e auditorias',
      'Resposta a incidentes 24/7'
    ]
  },
  {
    id: '5',
    title: 'Gestão de TI e PMO',
    description: 'Governança de TI, gestão de portfólio e PMO. Experiência com equipes de 20-60 pessoas.',
    icon: 'users',
    category: 'Gestão',
    details: 'Estruturação e gestão de PMO (Project Management Office), governança de TI, gestão de portfólio de projetos. Experiência em liderar equipes de 20-60 profissionais em projetos complexos e multidisciplinares. Metodologias ágeis e tradicionais.',
    benefits: [
      'PMO completo estruturado',
      'Governança de TI efetiva',
      'Gestão de equipes grandes',
      'Metodologias ágeis e híbridas',
      'Gestão de portfólio otimizada'
    ]
  },
  {
    id: '6',
    title: 'Smart Grid & IoT',
    description: 'Implementação de smart grids, telemedição e soluções IoT para utilities e indústria.',
    icon: 'cog',
    category: 'Inovação',
    details: 'Implementação de smart grids, sistemas de telemedição, IoT industrial. Experiência no setor de utilities (energia elétrica) e indústria 4.0. Integração de sistemas SCADA, medidores inteligentes e plataformas de analytics.',
    benefits: [
      'Experiência em utilities',
      'Smart grids e telemedição',
      'IoT industrial',
      'Integração SCADA',
      'Analytics em tempo real'
    ]
  },
];

export default async function ServicosPage() {
  let services = await fetchServices();
  
  if (!services || services.length === 0) {
    services = fallbackServices as any;
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Soluções completas em tecnologia e gestão para impulsionar seu negócio. 
            Da estratégia à execução, com resultados mensuráveis.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Cog;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
                      {service.category}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    {(service as any).details && (
                      <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        {(service as any).details}
                      </p>
                    )}

                    {(service as any).benefits && (
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900 mb-4">Benefícios:</h3>
                        {(service as any).benefits.map((benefit: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-12 shadow-xl">
                      <div className="text-center">
                        <div className="inline-flex rounded-2xl bg-white p-6 shadow-lg mb-6">
                          <IconComponent className="h-16 w-16 text-blue-600" />
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow">
                            <p className="text-sm font-semibold text-gray-900">Experiência Comprovada</p>
                            <p className="text-2xl font-bold text-blue-600">+20 anos</p>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow">
                            <p className="text-sm font-semibold text-gray-900">Empresas Atendidas</p>
                            <p className="text-2xl font-bold text-cyan-600">28+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos discutir como podemos ajudar sua empresa a alcançar os resultados desejados.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-all hover:shadow-xl hover:scale-105"
          >
            Fale com um especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}