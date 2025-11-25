# Configuração do Formulário de Contato

O formulário de contato do site agora está totalmente funcional e envia emails reais usando o serviço **Resend**.

## 🚀 Como Configurar

### 1. Criar Conta no Resend

1. Acesse [https://resend.com](https://resend.com)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Obter API Key

1. Faça login no Resend
2. Vá para a seção "API Keys"
3. Clique em "Create API Key"
4. Dê um nome (ex: "Linear Hub Website")
5. Copie a chave gerada (começa com `re_`)

### 3. Configurar o Projeto

1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edite o arquivo `.env.local` e adicione sua API key:
   ```bash
   RESEND_API_KEY=re_sua_api_key_aqui
   ```

3. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### 4. Verificar Domínio (Opcional, mas Recomendado)

Para enviar emails de um domínio personalizado (ex: `noreply@linear-hub.com.br`):

1. No painel do Resend, vá em "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio: `linear-hub.com.br`
4. Siga as instruções para adicionar os registros DNS (SPF, DKIM, DMARC)
5. Aguarde a verificação (pode levar algumas horas)

**Nota:** Sem verificação de domínio, os emails serão enviados de `noreply@resend.dev` mas ainda funcionarão normalmente.

## 📧 Como Funciona

1. Usuário preenche o formulário no site
2. Dados são enviados para `/api/contact` (API Route do Next.js)
3. A API valida os dados e envia email via Resend API
4. Email é entregue para `contato@linear-hub.com.br`
5. Usuário recebe feedback de sucesso/erro

## ✨ Funcionalidades Implementadas

- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Feedback visual (loading, sucesso, erro)
- ✅ Email HTML formatado com design profissional
- ✅ Reply-to configurado com email do remetente
- ✅ Modo de desenvolvimento (funciona sem API key, apenas loga no console)
- ✅ Proteção contra spam (rate limiting pode ser adicionado)

## 🔒 Segurança

- A API key é armazenada em `.env.local` (NÃO commitada no Git)
- Em produção, configure a variável de ambiente no painel da Vercel/Netlify
- Validação de dados no servidor (não apenas no cliente)
- Proteção contra XSS no template de email

## 📊 Limites do Plano Gratuito

**Resend Free Tier:**
- 3.000 emails/mês
- 100 emails/dia
- Perfeito para sites corporativos

Se precisar de mais, o plano pago começa em $20/mês para 50.000 emails.

## 🐛 Troubleshooting

### Email não está sendo enviado

1. Verifique se a API key está configurada corretamente em `.env.local`
2. Verifique os logs do console para erros
3. Teste com `console.log(process.env.RESEND_API_KEY)` na API route

### Email vai para spam

1. Verifique seu domínio no Resend
2. Configure SPF, DKIM e DMARC corretamente
3. Evite palavras que disparam filtros de spam

### Erro 429 (Rate Limit)

Você atingiu o limite de 100 emails/dia. Aguarde 24h ou faça upgrade do plano.

## 🚀 Deploy em Produção

### Vercel

1. Acesse o painel da Vercel
2. Vá em Settings → Environment Variables
3. Adicione: `RESEND_API_KEY` com o valor da sua chave
4. Faça redeploy

### Netlify

1. Acesse o painel da Netlify
2. Vá em Site Settings → Environment Variables
3. Adicione: `RESEND_API_KEY` com o valor da sua chave
4. Faça redeploy

## 📝 Customização

### Alterar email de destino

Edite `/pages/api/contact.ts`:
```typescript
to: ['seu-email@dominio.com'],
```

### Alterar template do email

Edite o HTML em `/pages/api/contact.ts` na seção `html:`.

### Adicionar campos ao formulário

1. Adicione o campo em `Contact.tsx`
2. Adicione o campo no tipo `ContactFormData` em `/pages/api/contact.ts`
3. Adicione o campo no template HTML do email

## 🆘 Suporte

- Documentação Resend: https://resend.com/docs
- Status do Serviço: https://resend.com/status
- Discord da Resend: https://resend.com/discord
