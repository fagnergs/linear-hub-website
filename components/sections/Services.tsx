import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Cloud,
  Database,
  Shield,
  Bot,
  Brain,
  GitBranch,
  Zap,
  FileCheck,
  Lightbulb,
  Layout,
  GraduationCap,
  Rocket,
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  cloud: Cloud,
  database: Database,
  shield: Shield,
  bot: Bot,
  brain: Brain,
  'git-branch': GitBranch,
  zap: Zap,
  'file-check': FileCheck,
  lightbulb: Lightbulb,
  layout: Layout,
  'graduation-cap': GraduationCap,
  rocket: Rocket,
};

export default function Services() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = t('services.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            {t('services.title')}
          </span>
          <h2 className="text-responsive-lg font-display font-bold text-gray-900 mb-4">
            {t('services.subtitle')}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Cloud;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative"
              >
                <div className="card h-full hover-lift">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Fale Conosco para Saber Mais</span>
            <Rocket className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
