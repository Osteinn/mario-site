import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Characters', id: 'characters' },
    { name: 'Mario History', id: 'history' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-700 shadow-xl sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => {setCurrentPage('home'); scrollToTop();}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={logo} 
              alt="Super Mario Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto drop-shadow-lg"
            />
            <span className="font-title text-lg sm:text-xl lg:text-2xl text-white font-bold tracking-wider">
              SUPER MARIO
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-nintendo font-medium transition-all duration-300 text-sm lg:text-base ${
                  currentPage === item.id
                    ? 'bg-yellow-400 text-red-700 shadow-lg'
                    : 'text-white hover:bg-white/20 hover:text-yellow-300'
                }`}
                onClick={() => {setCurrentPage(item.id); scrollToTop();}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
