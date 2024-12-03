import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ServiceCard } from './components/services/ServiceCard';
import { NewsSection } from './components/news/NewsSection';
import { ContactSection } from './components/contact/ContactSection';
import { services } from './data/services';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      
      <section id="servicios" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios médicos especializados para cuidar de su salud y la de su familia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <NewsSection />
      <ContactSection />
    </div>
  );
}

export default App;