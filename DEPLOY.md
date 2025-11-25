# 🚀 Guia Completo de Deploy - Linear Hub Website

Este guia detalha passo a passo como fazer o deploy do novo website da Linear Hub no Firebase Hosting com domínio personalizado.

## 📋 Índice

1. [Preparação do Ambiente](#1-preparação-do-ambiente)
2. [Configuração do Firebase](#2-configuração-do-firebase)
3. [Build do Projeto](#3-build-do-projeto)
4. [Deploy no Firebase](#4-deploy-no-firebase)
5. [Configuração do Domínio](#5-configuração-do-domínio)
6. [Redirecionamento DNS](#6-redirecionamento-dns)
7. [Verificação e SSL](#7-verificação-e-ssl)
8. [CI/CD com GitHub Actions](#8-cicd-com-github-actions)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Preparação do Ambiente

### 1.1 Verificar Node.js

```bash
node --version  # Deve ser 18 ou superior
npm --version
```

### 1.2 Instalar Firebase CLI

```bash
npm install -g firebase-tools

# Verificar instalação
firebase --version
```

### 1.3 Fazer Login no Firebase

```bash
firebase login

# Uma janela do navegador abrirá para autenticação
# Faça login com a conta Google associada ao Firebase
```

---

## 2. Configuração do Firebase

### 2.1 Inicializar Firebase no Projeto

```bash
cd /caminho/para/linear-hub-website

firebase init
```

### 2.2 Seleções no Wizard:

1. **Serviços:** Selecione apenas `Hosting`
2. **Projeto:** Selecione seu projeto existente ou crie um novo
3. **Public directory:** Digite `out`
4. **Single-page app:** Digite `n` (No)
5. **Automatic builds with GitHub:** Digite `y` (Yes) se quiser CI/CD

### 2.3 Arquivo firebase.json

O comando init criará `firebase.json`. Substitua com esta configuração otimizada:

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "cleanUrls": true,
    "trailingSlash": false,
    "redirects": [
      {
        "source": "/home",
        "destination": "/",
        "type": 301
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(woff|woff2|ttf)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Referrer-Policy",
            "value": "strict-origin-when-cross-origin"
          }
        ]
      }
    ]
  }
}
```

### 2.4 Arquivo .firebaserc

Será criado automaticamente, mas verifique:

```json
{
  "projects": {
    "default": "seu-projeto-id"
  }
}
```

---

## 3. Build do Projeto

### 3.1 Instalar Dependências

```bash
npm install
```

### 3.2 Executar Build

```bash
npm run build

# Aguarde a conclusão (~1-2 minutos)
# Verificar pasta /out foi criada
ls out
```

### 3.3 Testar Localmente

```bash
# Servir build localmente
firebase serve

# Acesse http://localhost:5000
# Teste todas as páginas e idiomas
```

---

## 4. Deploy no Firebase

### 4.1 Deploy Inicial

```bash
firebase deploy --only hosting

# Aguarde o upload (pode levar alguns minutos)
```

### 4.2 Verificar Deploy

Ao final, o Firebase mostrará:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/seu-projeto/overview
Hosting URL: https://seu-projeto.web.app
```

Acesse a URL para verificar!

### 4.3 Preview Deploy (Opcional)

Para testar antes de ir para produção:

```bash
firebase hosting:channel:deploy preview

# Gerará URL temporária para testes
```

---

## 5. Configuração do Domínio

### 5.1 Acessar Firebase Console

1. Vá para https://console.firebase.google.com/
2. Selecione seu projeto
3. No menu lateral, clique em **Hosting**

### 5.2 Adicionar Domínio Personalizado

1. Clique em **Add custom domain**
2. Digite: `linear-hub.com.br`
3. Clique em **Continue**

### 5.3 Adicionar www também

Repita o processo para:
- `www.linear-hub.com.br`

---

## 6. Redirecionamento DNS

### 6.1 Registros Fornecidos pelo Firebase

Após adicionar o domínio, o Firebase mostrará os registros DNS necessários.

**Exemplo típico:**

#### Para domínio raiz (linear-hub.com.br):

```
Type: A
Name: @
Value: 151.101.1.195
```

```
Type: A
Name: @
Value: 151.101.65.195
```

#### Para www (www.linear-hub.com.br):

```
Type: CNAME
Name: www
Value: seu-projeto.web.app
```

### 6.2 Configurar no Provedor de Domínio

#### Se estiver usando **Registro.br**:

1. Acesse https://registro.br/
2. Faça login
3. Vá em **Domínios** → **Gerenciar**
4. Clique em **Editar zona DNS**
5. Adicione os registros A e CNAME conforme fornecido

#### Se estiver usando **GoDaddy**:

1. Acesse GoDaddy.com
2. Vá em **My Products** → **DNS**
3. Adicione os registros

#### Se estiver usando **Cloudflare**:

1. Acesse Cloudflare Dashboard
2. Selecione o domínio
3. Vá em **DNS**
4. Adicione os registros
5. **IMPORTANTE:** Desative o proxy (nuvem cinza) para os registros A

### 6.3 Aguardar Propagação

⏱️ **Tempo de propagação:** 24-48 horas (geralmente 2-4 horas)

Verificar propagação:
```bash
# Verificar DNS
dig linear-hub.com.br
dig www.linear-hub.com.br

# Ou use: https://www.whatsmydns.net/
```

---

## 7. Verificação e SSL

### 7.1 Verificar Domínio

No Firebase Console:
1. Vá em **Hosting** → **Custom domains**
2. Aguarde o status mudar de "Needs setup" → "Connected"

### 7.2 Aguardar Provisionamento SSL

O Firebase provisiona automaticamente certificados SSL via Let's Encrypt.

**Tempo:** 10 minutos a 24 horas

Status:
- ⏳ **Provisioning** → Aguarde
- ✅ **Active** → SSL ativo e funcionando

### 7.3 Verificar HTTPS

```bash
curl -I https://linear-hub.com.br
curl -I https://www.linear-hub.com.br

# Deve retornar 200 OK com certificado válido
```

### 7.4 Forçar HTTPS

Adicione ao `firebase.json`:

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Firebase força HTTPS automaticamente após SSL ativo.

---

## 8. CI/CD com GitHub Actions

### 8.1 Criar Repositório GitHub

```bash
# Inicializar Git
git init
git add .
git commit -m "Initial commit: New Linear Hub website"

# Criar repositório no GitHub
# Depois:
git remote add origin https://github.com/seu-usuario/linear-hub-website.git
git push -u origin main
```

### 8.2 Gerar Token Firebase

```bash
firebase login:ci

# Copie o token gerado
```

### 8.3 Adicionar Secret no GitHub

1. Vá no repositório → **Settings**
2. **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Nome: `FIREBASE_TOKEN`
5. Value: Cole o token gerado

### 8.4 Criar Service Account

No Firebase Console:
1. **Project Settings** → **Service accounts**
2. **Generate new private key**
3. Salve o JSON

No GitHub:
1. Crie secret `FIREBASE_SERVICE_ACCOUNT`
2. Cole o conteúdo do JSON

### 8.5 Criar Workflow

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Firebase Hosting
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: seu-projeto-id
```

### 8.6 Testar CI/CD

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main

# Vá no GitHub → Actions para ver o deploy automático
```

---

## 9. Troubleshooting

### 9.1 Erro: "Firebase CLI not found"

```bash
npm install -g firebase-tools
```

### 9.2 Erro: "Project not found"

```bash
firebase use --add
# Selecione o projeto correto
```

### 9.3 Erro: "Permission denied"

```bash
firebase login --reauth
```

### 9.4 DNS não propaga

- Aguarde mais tempo (até 48h)
- Verifique se os registros estão corretos
- Use `dig` ou `nslookup` para debug
- Limpe cache DNS local:
  ```bash
  # macOS
  sudo dscacheutil -flushcache
  
  # Windows
  ipconfig /flushdns
  ```

### 9.5 SSL não provisiona

- Certifique-se que DNS está propagado
- Aguarde até 24 horas
- Verifique se não há proxy (Cloudflare)
- Entre em contato com suporte Firebase

### 9.6 Build falha

```bash
# Limpar cache
rm -rf .next out node_modules
npm install
npm run build
```

### 9.7 404 em rotas

Verifique `firebase.json` tem:
```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

---

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Build local funciona (`npm run build`)
- [ ] Firebase deploy executado com sucesso
- [ ] Site acessível via URL do Firebase
- [ ] Domínio custom adicionado no Firebase
- [ ] Registros DNS configurados
- [ ] DNS propagado (verificar com dig/whatsmydns)
- [ ] SSL provisionado e ativo
- [ ] Site acessível via https://linear-hub.com.br
- [ ] Site acessível via https://www.linear-hub.com.br
- [ ] Redirecionamento HTTP → HTTPS funcionando
- [ ] Todos os idiomas (PT/EN/ES) funcionam
- [ ] Formulário de contato funciona
- [ ] Site responsivo em todos dispositivos
- [ ] Performance score alta (Google PageSpeed)
- [ ] CI/CD configurado (se aplicável)

---

## 📞 Suporte

Se encontrar problemas:

1. Consulte [Firebase Documentation](https://firebase.google.com/docs/hosting)
2. Verifique [Firebase Status](https://status.firebase.google.com/)
3. Entre em contato com suporte Firebase
4. Consulte este guia novamente

---

## 🎉 Parabéns!

Seu novo website da Linear Hub está no ar! 🚀

**Próximos passos:**
- Monitorar analytics
- Configurar Google Search Console
- Adicionar sitemap
- Otimizar SEO
- Configurar monitoramento de uptime

---

**Última atualização:** Novembro 2024  
**Versão:** 1.0
