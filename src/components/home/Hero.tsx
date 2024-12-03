import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#17A99F] to-[#06B1E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu salud es nuestra prioridad
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Brindamos atención médica de calidad con profesionales especializados y tecnología de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-white text-[#17A99F] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFFBD6] transition-colors">
                <Calendar className="mr-2" size={20} />
                Agendar Turno
              </button>
              <button className="flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Ver Servicios
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
              alt="Medical team"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}