import { useTranslation } from '@/lib/i18n';
import { ArrowRight, TrendingUp, Users, Code, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { icon: TrendingUp, value: '20+', label: t('hero.stats.experience') },
    { icon: Code, value: '100+', label: t('hero.stats.projects') },
    { icon: Users, value: '50+', label: t('hero.stats.clients') },
    { icon: Award, value: '25+', label: t('hero.stats.technologies') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              🚀 Innovation • Technology • Excellence
            </span>
            <h1 className="text-responsive-xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="#contact"
              className="btn-primary group flex items-center space-x-2"
            >
              <span>{t('hero.cta_primary')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="btn-outline flex items-center space-x-2"
            >
              <span>{t('hero.cta_secondary')}</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
