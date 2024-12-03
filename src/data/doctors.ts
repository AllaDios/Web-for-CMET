import type { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Juan Pérez',
    specialty: 'Medicina General',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80',
    schedule: {
      lunes: ['09:00', '10:00', '11:00', '15:00', '16:00'],
      martes: ['09:00', '10:00', '11:00', '15:00', '16:00'],
      miercoles: ['09:00', '10:00', '11:00', '15:00', '16:00'],
      jueves: ['09:00', '10:00', '11:00', '15:00', '16:00'],
      viernes: ['09:00', '10:00', '11:00', '15:00', '16:00']
    }
  },
  {
    id: '2',
    name: 'Dra. María González',
    specialty: 'Pediatría',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    schedule: {
      lunes: ['14:00', '15:00', '16:00', '17:00'],
      miercoles: ['14:00', '15:00', '16:00', '17:00'],
      viernes: ['14:00', '15:00', '16:00', '17:00']
    }
  }
];