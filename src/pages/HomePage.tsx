import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard'; // We will create this component next
import { Search } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Votre guide santé, simple et fiable</h1>
        <p className="text-lg text-brand-gray max-w-3xl mx-auto">Trouvez des réponses claires et des conseils pratiques sur la santé, la nutrition et le bien-être.</p>
        <div className="mt-8 max-w-xl mx-auto relative">
          <input type="text" placeholder="Rechercher un symptôme, une maladie..." className="w-full bg-white rounded-full py-4 px-6 pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-brand-green shadow-md" />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" size={24} />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-brand-dark mb-8">Articles récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}