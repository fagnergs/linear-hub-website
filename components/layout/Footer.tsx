import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/fagner-silva',
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/linearhub',
      label: 'Facebook',
    },
  ];

  const quickLinks = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'clients', href: '#clients' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">Linear Hub</span>
                <span className="text-xs text-gray-400">Technology & Management</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t('footer.sections.company')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t('footer.sections.services')}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Cloud & Digital Transformation</li>
              <li>SAP S/4HANA</li>
              <li>Cybersecurity</li>
              <li>AI & Blockchain</li>
              <li>Smart Grids</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t('footer.sections.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary-500 mt-0.5" />
                <span>{t('contact.info.location')}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <a href="tel:+5521992544456" className="hover:text-white transition-colors">
                  {t('contact.info.phone')}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-500" />
                <a
                  href="mailto:Fagner.Silva@linear-hub.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  {t('contact.info.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Linear Hub - {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
