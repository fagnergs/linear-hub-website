// src/app/page.tsx
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Linear Hub - Consultoria em Tecnologia e Gestão de Negócios',
  description: 'Transformação digital que gera resultados. Consultoria especializada em SAP, Cloud, Cybersecurity e Gestão de TI.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase tracking-wide">
                Sobre a Linear Hub
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Experiência que faz a diferença
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Com mais de 20 anos de experiência em tecnologia e gestão, a Linear Hub 
                oferece consultoria especializada para empresas que buscam excelência operacional 
                e inovação.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Experiência internacional (Brasil, Colômbia, América Latina)',
                  'Atuação em setores regulados: Energia, Utilities, Agribusiness',
                  'Resultados comprovados: 70% de redução CAPEX/OPEX',
                  'Gestão de equipes de 20-60 pessoas',
                  'Implementações SAP em 28+ empresas',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Saiba mais sobre nós
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-blue-600">20+</div>
                      <div className="text-sm text-gray-600 mt-2">Anos de experiência</div>
                    </div>
                    <div className="bg-cyan-50 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-cyan-600">28+</div>
                      <div className="text-sm text-gray-600 mt-2">Empresas atendidas</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-purple-600">70%</div>
                      <div className="text-sm text-gray-600 mt-2">Redução de custos</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600 mt-2">Satisfação</div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      Certificações e Expertise:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['SAP', 'AWS', 'Azure', 'GCP', 'ISO 27001', 'NIST', 'LGPD', 'PMI'].map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa a alcançar 
            resultados extraordinários através da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105"
            >
              Fale com um especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Ver nossos serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}