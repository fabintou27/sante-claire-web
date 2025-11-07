import { Link } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28C16 28 3.5 21 3.5 12.5C3.5 8.46243 6.71243 5.25 10.75 5.25C13.25 5.25 15.5 6.75 16 8.5C16.5 6.75 18.75 5.25 21.25 5.25C25.2876 5.25 28.5 8.46243 28.5 12.5C28.5 21 16 28 16 28Z" stroke="#A8D8C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 10V20" stroke="#BEE3F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 15H21" stroke="#BEE3F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-xl text-brand-dark">SantéInfo+</span>
    </div>
);

export default function Footer() {
  return (
    <footer className="bg-brand-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-brand-gray max-w-xs">
              Votre guide santé fiable pour des informations claires et accessibles.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-brand-green">Accueil</Link></li>
              <li><Link to="/categorie/Sante" className="hover:text-brand-green">Santé</Link></li>
              <li><Link to="/categorie/Nutrition" className="hover:text-brand-green">Nutrition</Link></li>
              <li><Link to="/categorie/Sante-mentale" className="hover:text-brand-green">Santé mentale</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/mentions-legales" className="hover:text-brand-green">Mentions Légales</Link></li>
              <li><Link to="/politique-de-confidentialite" className="hover:text-brand-green">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-brand-gray">
          <p>&copy; {new Date().getFullYear()} SantéInfo+. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}