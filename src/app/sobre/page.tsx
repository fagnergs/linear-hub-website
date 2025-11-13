// src/app/sobre/page.tsx
import { CheckCircle, Award, Globe, Users, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre',
  description: 'Conheça a Linear Hub. Mais de 20 anos de experiência em tecnologia e gestão, com atuação internacional e resultados comprovados.',
};

export default function SobrePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Experiência que transforma negócios
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Mais de 20 anos de experiência em tecnologia e gestão, com atuação internacional 
                e resultados mensuráveis em empresas líderes de mercado.
              </p>
              <div className="flex items-center gap-4">
                <Award className="h-12 w-12 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">CIO & Technology Executive</p>
                  <p className="text-gray-300 text-sm">+20 anos de experiência</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">28+</div>
                    <div className="text-sm text-gray-600">Empresas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">70%</div>
                    <div className="text-sm text-gray-600">Redução Custos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">60+</div>
                    <div className="text-sm text-gray-600">Profissionais Liderados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">4+</div>
                    <div className="text-sm text-gray-600">Países</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossa História</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                A <strong>Linear Hub</strong> foi fundada com o objetivo de oferecer consultoria especializada 
                em tecnologia e gestão, trazendo mais de duas décadas de experiência prática em projetos 
                de transformação digital, implementação de sistemas empresariais e gestão de TI.
              </p>
              <p className="mb-6">
                Com atuação em empresas de diversos portes e setores, incluindo <strong>energia, utilities, 
                agribusiness e tecnologia</strong>, desenvolvemos expertise em entregar soluções que geram 
                resultados mensuráveis e sustentáveis.
              </p>
              <p>
                Nossa experiência internacional, com projetos no <strong>Brasil, Colômbia e outros países 
                da América Latina</strong>, nos permitiu desenvolver uma visão global e adaptável às 
                diferentes realidades de negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de consultoria em tecnologia e gestão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Experiência Internacional',
                description: 'Atuação em Brasil, Colômbia e América Latina, com conhecimento profundo de diferentes mercados e culturas empresariais.',
              },
              {
                icon: Award,
                title: 'Resultados Comprovados',
                description: 'Histórico de 70% de redução em custos CAPEX/OPEX e implementações bem-sucedidas em 28+ empresas.',
              },
              {
                icon: Users,
                title: 'Liderança Executiva',
                description: 'Experiência como CIO e gestor de equipes de 20-60 profissionais em projetos complexos e multidisciplinares.',
              },
              {
                icon: Target,
                title: 'Foco em ROI',
                description: 'Todas as soluções são desenhadas com foco claro em retorno sobre investimento e resultados mensuráveis.',
              },
              {
                icon: TrendingUp,
                title: 'Expertise Multissetorial',
                description: 'Conhecimento profundo em setores regulados: energia, utilities, agribusiness, e tecnologia.',
              },
              {
                icon: CheckCircle,
                title: 'Abordagem 360º',
                description: 'Da estratégia à execução: consultoria, implementação, gestão de mudança e suporte contínuo.',
              },
            ].map((diferencial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <diferencial.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{diferencial.title}</h3>
                <p className="text-gray-600">{diferencial.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Trajetória Profissional</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                period: 'Atual',
                role: 'CIO',
                company: 'Grupo BBF (Brasil Bio Fuels)',
                location: 'Jaguariúna, SP',
                highlights: [
                  'Liderança estratégica de TI',
                  'Transformação digital do grupo',
                  'Gestão de infraestrutura e sistemas',
                ]
              },
              {
                period: '2020+',
                role: 'Technology Executive',
                company: 'Neoenergia / Iberdrola',
                location: 'Brasil',
                highlights: [
                  'Gestão de projetos de smart grid',
                  'Implementação de soluções SAP',
                  'Cybersecurity em infraestruturas críticas',
                ]
              },
              {
                period: 'Internacional',
                role: 'IT Leadership',
                company: 'Compañía Energética de Occidente',
                location: 'Colômbia',
                highlights: [
                  'Gestão de TI em operações internacionais',
                  'Projetos de utilities e energia',
                  'Experiência multicultural',
                ]
              },
            ].map((experience, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-blue-600">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-blue-600" />
                <div className="mb-1 text-sm font-semibold text-blue-600">{experience.period}</div>
                <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                <p className="text-gray-600 mb-3">{experience.company} • {experience.location}</p>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Certificações & Expertise</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Formação acadêmica e certificações em tecnologia e gestão
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formação Acadêmica</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Mestrado em Engenharia de Computação</p>
                    <p className="text-sm text-gray-600">ISCTE, Lisboa (em andamento)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Engenharia de Telecomunicações</p>
                    <p className="text-sm text-gray-600">Graduação</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologias & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['SAP S/4HANA', 'Azure', 'AWS', 'GCP', 'ISO 27001', 'NIST', 'LGPD', 'PMI', 'ITIL', 'COBIT', 'SCRUM', 'Agile'].map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa a alcançar seus objetivos.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105"
          >
            Fale conosco
          </Link>
        </div>
      </section>
    </div>
  );
}