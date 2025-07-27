import { motion } from "framer-motion";

export function Footer({ setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Main footer text */}
          <p className="font-body text-lg mb-8 text-gray-300">
            This fan site is inspired by the legendary world of Nintendo's Mario.
          </p>
          <p className="font-body text-sm mb-8 text-gray-400">
            All images are used under fair use. Website by Osteinn
          </p>

          {/* Back to top button */}
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-nintendo px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ⬆️ Back to Top
          </motion.button>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              title="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://nintendo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              title="Nintendo Official"
            >
              <span className="text-2xl">🎮</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="font-body text-gray-400 text-sm">
              © 2025 Mario Characters Fan Page. All characters belong to Nintendo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
