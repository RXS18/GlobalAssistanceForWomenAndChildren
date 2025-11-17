import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Events', path: '/events' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('/')}>
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GAW&C</span>
            </div>
            <div className="ml-3 hidden md:block">
              <h1 className="text-sm font-semibold text-gray-900">Global Assistance For</h1>
              <p className="text-xs text-gray-600">Women And Children</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                } pb-1`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => onNavigate('/contact')}
            className="hidden md:block bg-emerald-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Donate
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === item.path
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full bg-emerald-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 text-center"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
