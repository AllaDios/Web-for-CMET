import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Doctor } from '../../types';

interface AppointmentFormProps {
  doctor: Doctor;
  selectedDate: Date;
  selectedTime: string;
  onSubmit: () => void;
}

export function AppointmentForm({ doctor, selectedDate, selectedTime, onSubmit }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send this to your backend
      const appointment = {
        doctorId: doctor.id,
        date: selectedDate,
        time: selectedTime,
        ...formData
      };
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Cita agendada con éxito');
      onSubmit();
    } catch (error) {
      toast.error('Error al agendar la cita');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17A99F] focus:ring-[#17A99F]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17A99F] focus:ring-[#17A99F]"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17A99F] focus:ring-[#17A99F]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Motivo de la consulta
        </label>
        <textarea
          id="reason"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#17A99F] focus:ring-[#17A99F]"
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="font-medium text-gray-900 mb-2">Detalles de la cita:</h4>
        <p className="text-sm text-gray-600">Doctor: {doctor.name}</p>
        <p className="text-sm text-gray-600">
          Fecha: {selectedDate.toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <p className="text-sm text-gray-600">Hora: {selectedTime}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-[#17A99F] text-white px-4 py-2 rounded-md hover:bg-[#06B1E9] transition-colors"
      >
        Confirmar cita
      </button>
    </form>
  );
}