import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Calendar } from './Calendar';
import { TimeSlots } from './TimeSlots';
import { AppointmentForm } from './AppointmentForm';
import type { Doctor } from '../../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

export function AppointmentModal({ isOpen, onClose, doctor }: AppointmentModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'date' | 'time' | 'form'>('date');

  if (!isOpen) return null;

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('form');
  };

  const handleClose = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep('date');
    onClose();
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
    const day = selectedDate.toLocaleDateString('es-ES', { weekday: 'long' }).toLowerCase();
    return doctor.schedule[day] || [];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Agendar cita con {doctor.name}</h3>
          <button onClick={handleClose} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        {step === 'date' && (
          <div className="mb-6">
            <Calendar
              onDateSelect={handleDateSelect}
              availableDates={Object.keys(doctor.schedule)}
            />
          </div>
        )}

        {step === 'time' && selectedDate && (
          <>
            <button 
              onClick={() => setStep('date')}
              className="text-[#17A99F] mb-4 hover:underline"
            >
              ← Volver a seleccionar fecha
            </button>
            <h4 className="font-medium mb-2">Horarios disponibles:</h4>
            <TimeSlots
              availableSlots={getAvailableTimeSlots()}
              selectedTime={selectedTime}
              onTimeSelect={handleTimeSelect}
            />
          </>
        )}

        {step === 'form' && selectedDate && selectedTime && (
          <>
            <button 
              onClick={() => setStep('time')}
              className="text-[#17A99F] mb-4 hover:underline"
            >
              ← Volver a seleccionar horario
            </button>
            <AppointmentForm
              doctor={doctor}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSubmit={handleClose}
            />
          </>
        )}
      </div>
    </div>
  );
}