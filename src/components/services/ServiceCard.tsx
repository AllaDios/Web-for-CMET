import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { AppointmentModal } from '../appointments/AppointmentModal';
import { doctors } from '../../data/doctors';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, icon, image } = service;
  
  // For demo purposes, we'll use the first doctor
  const doctor = doctors[0];
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-[#17A99F]">{icon}</span>
            <h3 className="text-xl font-semibold ml-2">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-[#17A99F] hover:text-[#06B1E9] font-medium"
          >
            Agendar cita
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={doctor}
      />
    </>
  );
}