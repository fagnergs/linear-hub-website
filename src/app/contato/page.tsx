// src/app/contato/page.tsx
import ContactForm from '@/components/forms/ContactForm';
import { Mail, MapPin, Linkedin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Linear Hub. Estamos prontos para discutir seu projeto e encontrar as melhores soluções para seu negócio.',
};

export default function ContatoPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Vamos conversar?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Entre em contato e descubra como podemos transformar seu negócio através da tecnologia.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos prontos para discutir seu projeto e encontrar as melhores soluções 
                para os desafios do seu negócio.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:contato@linear-hub.com.br" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      contato@linear-hub.com.br
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                    <p className="text-gray-600">Jaguariúna, SP - Brasil</p>
                    <p className="text-sm text-gray-500 mt-1">Atendimento em todo Brasil e América Latina</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/fagnergs" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      linkedin.com/in/fagnergs
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-sm text-gray-500 mt-1">Respondemos em até 24 horas úteis</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-4">Por que nos escolher?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Resposta rápida em até 24 horas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Consulta inicial sem compromisso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">Propostas personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">+20 anos de experiência</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Como funciona o processo de consultoria?',
                answer: 'Iniciamos com uma reunião de diagnóstico para entender suas necessidades. Em seguida, elaboramos uma proposta personalizada com escopo, timeline e investimento. Após aprovação, iniciamos a execução com acompanhamento constante.',
              },
              {
                question: 'Qual o prazo médio de um projeto?',
                answer: 'O prazo varia de acordo com a complexidade do projeto. Projetos de consultoria podem variar de 1 mês (diagnóstico) até 12+ meses (implementação completa). Definimos prazos realistas na fase de proposta.',
              },
              {
                question: 'Atendem empresas de qual porte?',
                answer: 'Atendemos desde médias empresas até grandes corporações. Nossa experiência inclui projetos em empresas com 100 a 5.000+ colaboradores, em diversos setores.',
              },
              {
                question: 'Como é definido o investimento?',
                answer: 'O investimento é calculado com base no escopo, complexidade, prazo e recursos necessários. Oferecemos modelos de contratação flexíveis: projeto fechado, hora técnica ou dedicação parcial/integral.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}