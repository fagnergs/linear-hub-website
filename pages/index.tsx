import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linear Hub - Transformação Digital com Excelência</title>
        <meta
          name="description"
          content="Soluções estratégicas em tecnologia, inovação e gestão para organizações que buscam resultados extraordinários. Especialistas em SAP, Cloud, Cibersegurança e muito mais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="transformação digital, SAP S/4HANA, cloud computing, cibersegurança, smart grids, consultoria tecnológica" />
        <meta name="author" content="Linear Hub" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linear-hub.com.br/" />
        <meta property="og:title" content="Linear Hub - Transformação Digital com Excelência" />
        <meta property="og:description" content="Soluções estratégicas em tecnologia, inovação e gestão" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.linear-hub.com.br/" />
        <meta property="twitter:title" content="Linear Hub - Transformação Digital com Excelência" />
        <meta property="twitter:description" content="Soluções estratégicas em tecnologia, inovação e gestão" />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
      </Layout>
    </>
  );
}
