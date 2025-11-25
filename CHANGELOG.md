# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.0.1] - 2024-11-24

### 🔧 Corrigido
- **Sistema i18n** - Adicionado suporte para `returnObjects: true`
- **TypeError** - Corrigido erro "profileItems.map is not a function"
- **Componentes** - About, Services e Projects agora carregam arrays corretamente

### 📝 Detalhes Técnicos
- Atualizado `lib/i18n.tsx` para retornar objetos/arrays quando `returnObjects: true`
- Type signature de `t()` agora aceita parameter `options?: { returnObjects?: boolean }`
- Mantida compatibilidade com uso anterior (sem breaking changes)
- Todos os 4 componentes que usam arrays testados e funcionando

## [2.0.0] - 2024-11-24

### ✨ Novo Website Completo

#### Adicionado
- 🎨 Design completamente novo e moderno
- 🌍 Suporte a 3 idiomas (PT, EN, ES)
- 📱 Layout 100% responsivo
- ⚡ Animações com Framer Motion
- 🏗️ Arquitetura Next.js 14 + TypeScript
- 🎯 6 seções principais:
  - Hero com estatísticas
  - About com missão e diferenciais
  - Services com 12 serviços detalhados
  - Projects com 5 casos de sucesso
  - Clients com logos
  - Contact com formulário
- 🚀 CI/CD com GitHub Actions
- 📊 SEO otimizado
- 🔒 Headers de segurança
- 🎨 Paleta de cores corporativa
- ✅ Acessibilidade WCAG 2.1
- 📄 Sitemap e robots.txt
- 🔥 Deploy automatizado no Firebase

#### Melhorias
- Performance drasticamente melhorada (SSG)
- Carregamento instantâneo
- Menor bundle size
- Melhor experiência mobile
- Navegação mais intuitiva

#### Tecnologias
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS 3.4
- Framer Motion
- next-i18next
- Lucide React Icons

### [1.0.0] - 2020

#### Versão Inicial
- Website básico em Firebase
- Conteúdo estático
- Português apenas
- Design simples

---

## Formato

Os tipos de mudanças são:
- **Adicionado** para novas funcionalidades
- **Modificado** para mudanças em funcionalidades existentes
- **Descontinuado** para funcionalidades que serão removidas
- **Removido** para funcionalidades removidas
- **Corrigido** para correções de bugs
- **Segurança** para vulnerabilidades

---

## Roadmap Futuro

### [2.1.0] - Próxima Release
- [ ] Blog/Notícias
- [ ] Portal do Cliente
- [ ] Newsletter
- [ ] Vídeos institucionais
- [ ] Google Analytics 4
- [ ] Search Console
- [ ] PWA Support

### [2.2.0] - Futuro
- [ ] Chat online
- [ ] Calculadora de ROI
- [ ] Case studies interativos
- [ ] Modo escuro
- [ ] A/B Testing
