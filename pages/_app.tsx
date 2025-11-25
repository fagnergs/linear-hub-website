import type { AppProps } from 'next/app';
import { LanguageProvider } from '@/lib/i18n';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default App;
