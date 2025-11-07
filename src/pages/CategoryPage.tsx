import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { ChevronRight } from 'lucide-react';

const categoryMapping: { [key: string]: string } = {
    Sante: 'Santé',
    Symptomes: 'Symptômes',
    Nutrition: 'Nutrition',
    'Sante-mentale': 'Santé mentale',
    Prevention: 'Prévention',
};

export default function CategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();
  const categoryName = categorySlug ? categoryMapping[categorySlug] : undefined;
  const filteredArticles = categoryName ? articles.filter(a => a.category === categoryName) : [];

  if (!categoryName) {
    return (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Catégorie non trouvée</h1>
          <p className="mt-4">Désolé, la catégorie que vous cherchez n'existe pas.</p>
          <Link to="/" className="mt-8 inline-block bg-brand-green text-white font-bold py-2 px-4 rounded-lg">Retour à l'accueil</Link>
        </div>
      );
  }

  return (
    <div>
        <div className="mb-8">
            <nav className="flex items-center text-sm text-brand-gray" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-brand-green">Accueil</Link>
                <ChevronRight size={16} className="mx-2" />
                <span className="font-medium text-brand-dark">{categoryName}</span>
            </nav>
        </div>

      <h1 className="text-4xl font-bold text-brand-dark mb-8">Catégorie : {categoryName}</h1>
      
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p>Aucun article trouvé dans cette catégorie pour le moment.</p>
      )}
    </div>
  );
}