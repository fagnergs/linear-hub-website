import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Locale = 'pt' | 'en' | 'es';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Importar as traduções
import ptTranslations from '@/public/locales/pt/common.json';
import enTranslations from '@/public/locales/en/common.json';
import esTranslations from '@/public/locales/es/common.json';

const translations = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('pt');

  useEffect(() => {
    // Carregar idioma salvo do localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['pt', 'en', 'es'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    const keys = key.split('.');
    let value: any = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna a chave se não encontrar tradução
      }
    }

    // Se returnObjects é true e o valor é um objeto/array, retornar como está
    if (options?.returnObjects && (typeof value === 'object' || Array.isArray(value))) {
      return value;
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Hook compatível com next-i18next
export function useTranslation() {
  const { t } = useLanguage();
  return { t };
}
