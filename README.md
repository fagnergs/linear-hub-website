# Linear Hub Website

Website institucional moderno e responsivo para a Linear Hub - Tecnologia e Gestão.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com SSG
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **Sistema i18n customizado** - Internacionalização (PT, EN, ES)
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

## 🛠️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/linear-hub-website.git
cd linear-hub-website

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

## 🌍 Internacionalização

O site está disponível em 3 idiomas:
- Português (pt) - Padrão
- Inglês (en)
- Espanhol (es)

Os arquivos de tradução estão em `public/locales/{locale}/common.json`.

**Sistema customizado:** Utilizamos um sistema de i18n desenvolvido especificamente para compatibilidade com static site generation. Veja [I18N_FIX.md](I18N_FIX.md) para detalhes técnicos.

## 🏗️ Build de Produção

```bash
# Gerar build estático
npm run build

# O build será gerado na pasta /.next
```

## 📦 Deploy no Firebase Hosting

### Passo 1: Configurar Firebase

1. **Instale o Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Faça login no Firebase:**
```bash
firebase login
```

3. **Inicialize o Firebase no projeto:**
```bash
firebase init hosting
```

Configurações recomendadas:
- Public directory: `out`
- Configure as a single-page app: `No`
- Set up automatic builds with GitHub: `Yes` (se quiser CI/CD)

### Passo 2: Criar firebase.json

Crie o arquivo `firebase.json` na raiz do projeto:

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

### Passo 3: Build e Deploy

```bash
# Gerar build de produção
npm run build

# Deploy para Firebase
firebase deploy --only hosting
```

## 🌐 Configurar Domínio Personalizado (linear-hub.com.br)

### No Firebase Console:

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto
3. Vá em **Hosting** → **Add custom domain**
4. Digite: `linear-hub.com.br` e `www.linear-hub.com.br`

### Configurar DNS:

O Firebase fornecerá registros DNS. Adicione no seu provedor de domínio:

#### Para domínio raiz (linear-hub.com.br):
```
Type: A
Name: @
Value: [IP fornecido pelo Firebase]
```

#### Para www:
```
Type: CNAME
Name: www
Value: [hostname fornecido pelo Firebase]
```

**Tempo de propagação:** 24-48 horas

### Verificar SSL:

O Firebase provisiona automaticamente certificados SSL via Let's Encrypt. Aguarde alguns minutos após a verificação do domínio.

## 🔄 CI/CD com GitHub Actions

### Passo 1: Criar Secret no GitHub

1. Vá em **Settings** → **Secrets and variables** → **Actions**
2. Adicione `FIREBASE_TOKEN`:
```bash
# Gerar token
firebase login:ci

# Copie o token gerado e adicione como secret
```

### Passo 2: Criar Workflow

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-firebase-project-id
```

## 📁 Estrutura do Projeto

```
linear-hub-website/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Projects.tsx
│       ├── Clients.tsx
│       └── Contact.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/
│   ├── locales/
│   │   ├── pt/
│   │   ├── en/
│   │   └── es/
│   └── images/
├── styles/
│   └── globals.css
├── next.config.js
├── next-i18next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Paleta de Cores

- **Primary (Azul):** #1890ff - #096dd9
- **Secondary (Ciano):** #13c2c2 - #006d75
- **Accent (Laranja):** #fa8c16 - #d46b08

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## ⚡ Performance

- **SSG (Static Site Generation)** para carregamento instantâneo
- **Lazy loading** de imagens
- **Code splitting** automático
- **Otimização de fontes** com Google Fonts
- **Cache agressivo** de assets estáticos

## 🔒 Segurança

- Headers de segurança configurados
- CSP (Content Security Policy)
- HTTPS obrigatório via Firebase
- Proteção contra XSS

## 📧 Contato

**Linear Hub - Tecnologia e Gestão**
- Website: [linear-hub.com.br](https://www.linear-hub.com.br)
- Email: Fagner.Silva@linear-hub.com.br
- Telefone: +55 21 992 544 456
- Localização: Jaguariúna - SP, Brasil

## 📄 Licença

© 2024 Linear Hub. Todos os direitos reservados.
