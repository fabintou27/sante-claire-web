import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28C16 28 3.5 21 3.5 12.5C3.5 8.46243 6.71243 5.25 10.75 5.25C13.25 5.25 15.5 6.75 16 8.5C16.5 6.75 18.75 5.25 21.25 5.25C25.2876 5.25 28.5 8.46243 28.5 12.5C28.5 21 16 28 16 28Z" stroke="#A8D8C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10V20" stroke="#BEE3F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 15H21" stroke="#BEE3F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-bold text-2xl text-brand-dark">SantéInfo+</span>
  </Link>
);

const navLinks = [
  { name: 'Santé', path: '/categorie/Sante' },
  { name: 'Symptômes', path: '/categorie/Symptomes' },
  { name: 'Nutrition', path: '/categorie/Nutrition' },
  { name: 'Santé mentale', path: '/categorie/Sante-mentale' },
  { name: 'Prévention', path: '/categorie/Prevention' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive ? 'text-brand-green' : 'text-brand-dark'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Rechercher..." className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-brand-green" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={20} />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${isActive ? 'text-brand-green' : 'text-brand-dark'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="relative mt-4">
              <input type="text" placeholder="Rechercher..." className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-brand-green" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={20} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}