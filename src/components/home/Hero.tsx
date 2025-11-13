// src/components/home/Hero.tsx
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Sparkles className="h-4 w-4" />
              <span>+20 anos de experiência</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Transformação Digital{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                que gera resultados
              </span>
            </h1>

            <p className="text-lg leading-8 text-gray-600 mb-8">
              Consultoria especializada em tecnologia e gestão para empresas que buscam 
              excelência operacional, segurança e inovação. Da estratégia à execução.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-all hover:shadow-xl hover:scale-105"
              >
                Fale com um especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Conheça nossos serviços
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-gray-600">Redução de custos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">28+</div>
                <div className="text-sm text-gray-600">Empresas atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl">
              <div className="rounded-xl bg-white p-8">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🚀</div>
                      <p className="text-sm font-medium text-gray-600">
                        Tecnologia & Inovação
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                      ☁️
                    </div>
                    <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                      🔐
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-60 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-60 blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}