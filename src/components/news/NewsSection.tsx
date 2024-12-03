import React from 'react';
import { NewsCard } from './NewsCard';
import { newsArticles } from '../../data/news';

export function NewsSection() {
  return (
    <section id="noticias" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Últimas Noticias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre las últimas novedades y consejos de salud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}