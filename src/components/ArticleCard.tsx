import { Link } from 'react-router-dom';
import { Article } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const categoryColors: { [key: string]: string } = {
  'Santé': 'bg-blue-100 text-blue-800',
  'Symptômes': 'bg-red-100 text-red-800',
  'Nutrition': 'bg-green-100 text-green-800',
  'Santé mentale': 'bg-purple-100 text-purple-800',
  'Prévention': 'bg-yellow-100 text-yellow-800',
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/article/${article.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start">
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-800'}`}>
              {article.category}
            </span>
            <ArrowUpRight className="text-gray-400 group-hover:text-brand-green transition-colors duration-300" size={20} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-brand-dark group-hover:text-brand-green transition-colors duration-300">{article.title}</h3>
        <p className="mt-2 text-brand-gray">{article.summary}</p>
      </div>
    </Link>
  );
}