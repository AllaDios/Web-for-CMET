import type { NewsArticle } from '../types';

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Nuevos servicios de telemedicina disponibles',
    excerpt: 'Implementamos consultas virtuales para brindar atención médica desde la comodidad de su hogar.',
    content: 'Pensando en la comodidad y seguridad de nuestros pacientes, hemos implementado un nuevo sistema de telemedicina...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    author: 'Dr. Juan Pérez'
  },
  {
    id: '2',
    title: 'Campaña de vacunación gratuita',
    excerpt: 'Iniciamos una campaña de vacunación preventiva para toda la comunidad.',
    content: 'Como parte de nuestro compromiso con la salud pública, estamos llevando a cabo una campaña de vacunación...',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80',
    author: 'Dra. María González'
  },
  {
    id: '3',
    title: 'Tips para una vida saludable',
    excerpt: 'Consejos prácticos para mantener un estilo de vida saludable.',
    content: 'Mantener un estilo de vida saludable es fundamental para prevenir enfermedades y mejorar nuestra calidad de vida...',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    author: 'Dr. Carlos Rodríguez'
  }
];