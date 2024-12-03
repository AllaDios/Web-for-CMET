import React from 'react';
import { Menu, Phone, Calendar, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-[#17A99F] font-bold text-xl">
              Consultorios Médicos El Talar
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#inicio">Inicio</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#noticias">Noticias</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-[#17A99F] hover:text-[#06B1E9]">
              <Calendar size={20} />
              <span>Agendar</span>
            </button>
            <button className="hidden md:flex items-center space-x-2 text-[#17A99F] hover:text-[#06B1E9]">
              <User size={20} />
              <span>Ingresar</span>
            </button>
            <button className="md:hidden p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-[#17A99F] px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}