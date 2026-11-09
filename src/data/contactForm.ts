export type ContactLocale = 'en' | 'es';

// All form interface copy lives here; no translations embedded in components.
export const contactFormCopy = {
  en: {
    title: 'Send me a message', name: 'Name', email: 'Email', inquiry: 'Inquiry Type',
    service: 'Service', message: 'Message', select: 'Choose an option',
    ugc: 'UGC / Brand Collaboration', digital: 'Creative & Digital Services', general: 'General Inquiry',
    editing: 'Short-Form Video Editing', setup: 'Digital Setup & Guidance',
    submit: 'Send message', sending: 'Sending…', success: 'Thank you! Your message was sent. I’ll be in touch soon.',
    error: 'Your message could not be sent. Please try again or email me directly.',
    setupRequired: 'The contact form is being set up. Please reach out by email for now.',
    captchaRequired: 'Please complete the CAPTCHA verification.',
    required: 'Please complete all required fields.', subjectPrefix: 'byMaeFarias',
    namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Tell me a little about your project…'
  },
  es: {
    title: 'Envíame un mensaje', name: 'Nombre', email: 'Correo electrónico', inquiry: 'Tipo de consulta',
    service: 'Servicio', message: 'Mensaje', select: 'Selecciona una opción',
    ugc: 'UGC / Colaboración con marcas', digital: 'Servicios creativos y digitales', general: 'Consulta general',
    editing: 'Edición de videos cortos', setup: 'Configuración y asesoría digital',
    submit: 'Enviar mensaje', sending: 'Enviando…', success: '¡Gracias! Tu mensaje fue enviado. Te responderé pronto.',
    error: 'No se pudo enviar el mensaje. Inténtalo nuevamente o escríbeme por correo.',
    setupRequired: 'Estamos configurando el formulario. Por ahora, puedes escribirme por correo.',
    captchaRequired: 'Por favor, completa la verificación CAPTCHA.',
    required: 'Completa todos los campos obligatorios.', subjectPrefix: 'byMaeFarias',
    namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@ejemplo.com', messagePlaceholder: 'Cuéntame un poco sobre tu proyecto…'
  }
} as const;
