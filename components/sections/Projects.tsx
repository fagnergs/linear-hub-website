import { useTranslation } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Calendar, Award } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    results: string[];
    technologies: string[];
    year: string;
  }>;

  return (
    <section id="projects" className="section-padding bg-white">
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
            {t('projects.title')}
          </span>
          <h2 className="text-responsive-lg font-display font-bold text-gray-900 mb-4">
            {t('projects.subtitle')}
          </h2>
        </motion.div>

        {/* Projects Timeline */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              <div className="card hover-lift">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Title and Year */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display font-bold text-2xl text-gray-900 flex-grow">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 bg-primary-100 px-3 py-1 rounded-full ml-4">
                        <Calendar className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-semibold text-primary-700">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 text-primary-600 mr-2" />
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      Resultados Alcançados
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Number Badge */}
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
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
            <span>Transforme Seu Negócio</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
