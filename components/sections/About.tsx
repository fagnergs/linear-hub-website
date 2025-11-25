import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Target, Users, Lightbulb, Shield, TrendingUp, Zap, Factory, DollarSign, Wheat, Smartphone, FlaskConical } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differentials = t('about.differentials.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const differentialIcons = [Lightbulb, TrendingUp, Shield, CheckCircle, Target, Users, Lightbulb, TrendingUp];

  const profileItems = t('about.profile.items', { returnObjects: true }) as string[];

  const sectors = t('about.sectors.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const sectorIcons = [Zap, Factory, DollarSign, Wheat, Smartphone, FlaskConical];

  return (
    <section id="about" className="section-padding bg-white">
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
            {t('about.title')}
          </span>
          <h2 className="text-responsive-lg font-display font-bold text-gray-900 mb-4">
            {t('about.subtitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900">
                {t('about.mission.title')}
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </motion.div>

        {/* Company Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            {t('about.profile.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {profileItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            {t('about.sectors.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sectorIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="card hover-lift bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-display font-semibold text-lg text-gray-900">
                      {sector.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {sector.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            {t('about.differentials.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => {
              const Icon = differentialIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card hover-lift"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h4 className="font-display font-semibold text-lg text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
