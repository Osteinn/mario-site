import { motion } from "framer-motion";

export function UnderDevelopment({ pageName }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl max-w-lg mx-4"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            repeatDelay: 2
          }}
          className="text-6xl mb-6"
        >
          🚧
        </motion.div>
        <h1 className="font-title text-4xl text-gray-800 mb-4">
          {pageName}
        </h1>
        <h2 className="font-nintendo text-2xl text-red-600 mb-6">
          Under Development
        </h2>
        <p className="font-body text-gray-600 text-lg leading-relaxed">
          This page is currently being worked on. Come back soon to explore more of the Mario universe!
        </p>
        <motion.div
          className="mt-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-4xl">⭐</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
