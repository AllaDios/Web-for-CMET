import React from 'react';
import { ContactForm } from './ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contáctenos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para atender sus consultas y brindarle la mejor atención.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-[#17A99F] w-6 h-6 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-600">Av. Principal 123, El Talar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#17A99F] w-6 h-6 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium">Teléfonos</p>
                    <p className="text-gray-600">03543 645771 (Fijo)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="text-[#17A99F] w-6 h-6 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">351 3073219</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-[#17A99F] w-6 h-6 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">consultorioseltalar@hotmail.com.ar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-[#17A99F] w-6 h-6 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium">Horarios de atención</p>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 8:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}