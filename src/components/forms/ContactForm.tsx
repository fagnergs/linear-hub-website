// src/components/forms/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simular envio (você pode integrar com EmailJS, Firebase Functions, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', formData);
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Envie sua mensagem
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email corporativo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="seu.email@empresa.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Nome da empresa"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Conte-nos sobre seu projeto ou necessidade..."
          />
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">
              Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por email.
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        >
          {status === 'loading' ? (
            <>
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Enviar mensagem</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Campos obrigatórios. Seus dados estão protegidos pela LGPD.
        </p>
      </form>
    </div>
  );
}