import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ChevronRight, Info } from 'lucide-react';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">Article non trouvé</h1>
        <p className="mt-4">Désolé, l'article que vous cherchez n'existe pas.</p>
        <Link to="/" className="mt-8 inline-block bg-brand-green text-white font-bold py-2 px-4 rounded-lg">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg">
        <div className="mb-8">
            <nav className="flex items-center text-sm text-brand-gray" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-brand-green">Accueil</Link>
                <ChevronRight size={16} className="mx-2" />
                <Link to={`/categorie/${article.category.replace(' ', '-')}`} className="hover:text-brand-green">{article.category}</Link>
                <ChevronRight size={16} className="mx-2" />
                <span className="font-medium text-brand-dark">{article.title}</span>
            </nav>
        </div>

        <article className="prose lg:prose-xl max-w-none">
            <h1>{article.title}</h1>
            <p className="lead">{article.content.introduction}</p>
            
            {article.content.sections.map((section, index) => (
                <div key={index}>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                </div>
            ))}

            <div className="mt-12 p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            {article.medicalDisclaimer}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t pt-4">
                <h3 className="text-base font-semibold">Sources :</h3>
                <ul className="text-sm text-brand-gray list-disc pl-5 mt-2">
                    {article.sources.map((source, index) => (
                        <li key={index}>{source}</li>
                    ))}
                </ul>
            </div>
        </article>
    </div>
  );
}