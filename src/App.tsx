import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const pageTitle = currentPage === '/' ? 'Home' : currentPage.slice(1).charAt(0).toUpperCase() + currentPage.slice(2);
    document.title = `${pageTitle} - Global Assistance For Women And Children`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home onNavigate={handleNavigate} />;
      case '/about':
        return <About />;
      case '/news':
        return <News />;
      case '/events':
        return <Events />;
      case '/projects':
        return <Projects onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
