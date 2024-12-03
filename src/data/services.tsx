import React from 'react';
import { 
  Stethoscope, 
  Scissors, 
  ActivitySquare,
  Baby,
  Users,
  Heart
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Consulta General',
    description: 'Atención médica integral para diagnóstico y tratamiento de diversas condiciones.',
    icon: <Stethoscope className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Odontología',
    description: 'Cuidado dental completo para mantener su sonrisa saludable y brillante.',
    icon: <Scissors className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Fisioterapia',
    description: 'Rehabilitación física especializada para recuperar su movilidad y bienestar.',
    icon: <ActivitySquare className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'Pediatría',
    description: 'Atención médica especializada para el cuidado de la salud de sus niños.',
    icon: <Baby className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1535191162489-aaec838b5221?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    title: 'Ginecología',
    description: 'Servicios especializados en salud femenina y atención integral.',
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    title: 'Cardiología',
    description: 'Diagnóstico y tratamiento especializado de enfermedades cardíacas.',
    icon: <Heart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80'
  }
];