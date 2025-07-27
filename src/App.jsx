import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Navigation, 
  HomePage, 
  CharactersPage, 
  UnderDevelopment, 
  Footer 
} from "./components";
import backgroundImage from "./assets/background.jpg";
import logo from "./assets/logo.png";

// Основной компонент приложения
export default function App() {
  const [showHero, setShowHero] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  // Функция для обновления заголовка страницы
  useEffect(() => {
    const pageTitles = {
      'home': 'Mushroom Kingdom Portal - Home',
      'characters': 'Mushroom Kingdom Portal - Characters', 
      'history': 'Mushroom Kingdom Portal - Mario History'
    };
    document.title = pageTitles[currentPage] || 'Mushroom Kingdom Portal';
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'characters':
        return <CharactersPage />;
      case 'history':
        return <UnderDevelopment pageName="Mario History" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={currentPage === 'home' ? 'min-h-screen' : 'min-h-screen bg-cover bg-center bg-no-repeat bg-fixed'} 
         style={currentPage !== 'home' ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      
      {/* Overlay только для страниц с фоном */}
      <div className={currentPage !== 'home' ? 'min-h-screen bg-white/40 backdrop-blur-[2px]' : 'min-h-screen'}>
        
        <AnimatePresence>
          {showHero && (
            <motion.div
              key="hero"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-600 to-yellow-500"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, -5, 0],
                  scale: [1, 1.1, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-center"
              >
                <img 
                  src={logo} 
                  alt="Super Mario Logo" 
                  className="w-48 h-auto mx-auto mb-8 drop-shadow-2xl"
                />
                <h1 className="font-title text-6xl text-white mb-4 drop-shadow-lg tracking-wider">
                  SUPER MARIO
                </h1>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-yellow-300 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <main>
          {renderPage()}
        </main>

        {/* Footer */}
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}
