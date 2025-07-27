import { motion } from "framer-motion";
import mario from "../assets/characters/mario.png";
import mario2 from "../assets/mario2.png";
import luigi2 from "../assets/Luigi2.png";
import toad from "../assets/characters/toad.png";
import backgroundRed from "../assets/backgroundRed.jpg";
import brick from "../assets/brick.png";

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Красный героический фон - точно как на Nintendo */}
      <section 
        className="min-h-screen relative"
        style={{ 
          background: `linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%), url(${backgroundRed})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        {/* Декоративные блоки снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-orange-800 via-yellow-700 to-orange-800 flex items-end">
          <div className="flex w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-16 h-16 bg-gradient-to-t from-yellow-600 to-yellow-500 border-2 border-yellow-700"
                style={{
                  backgroundImage: `url(${brick})`,
                  backgroundSize: 'cover'
                }}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              />
            ))}
          </div>
        </div>

        {/* Основной контент - восстанавливаю оригинальное расположение для ноутбука */}
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Левая часть - текст */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8 text-center lg:text-left"
            >
              <motion.h1 
                className="font-title text-6xl font-bold text-white drop-shadow-2xl leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Welcome to the Mushroom Kingdom!
              </motion.h1>
              
              <motion.p 
                className="font-body text-xl text-white/95 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Dive into the colorful world of Mario and friends — from heroic plumbers to fire-breathing villains.
              </motion.p>

              <motion.button
                className="bg-white hover:bg-gray-100 text-red-600 font-nintendo px-8 py-4 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://mario.nintendo.com/about/', '_blank')}
              >
                Meet Mario! ▶
              </motion.button>
            </motion.div>

            {/* Правая часть - персонажи (восстанавливаю оригинальное расположение) */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] flex items-end justify-center"
            >
              {/* Главный Марио в центре */}
              <motion.img
                src={mario2}
                alt="Mario"
                className="absolute z-30 bottom-0 left-[15%] -translate-x-1/2 w-[320px] object-contain drop-shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0]
                }}
              />

              {/* Луиджи правее от Марио */}
              <motion.img
                src={luigi2}
                alt="Luigi"
                className="absolute bottom-[180px] left-[75%] w-[120px] z-30 object-contain drop-shadow-xl"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Кирпичи под Луиджи */}
              <motion.div
                className="absolute bottom-[120px] left-[65%] w-[180px] h-[60px] z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="flex">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-yellow-600 to-yellow-500 border-2 border-yellow-700"
                      style={{
                        backgroundImage: `url(${brick})`,
                        backgroundSize: 'cover',
                        width: '60px',
                        height: '60px'
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Тоад еще правее */}
              <motion.img
                src={toad}
                alt="Toad"
                className="absolute bottom-[180px] left-[92%] w-[100px] z-30 object-contain drop-shadow-xl"
                initial={{ x: 80, y: 80, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Кирпичи под Тоадом */}
              <motion.div
                className="absolute bottom-[120px] left-[86%] w-[180px] h-[60px] z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-yellow-600 to-yellow-500 border-2 border-yellow-700"
                      style={{
                        backgroundImage: `url(${brick})`,
                        backgroundSize: 'cover',
                        width: '60px',
                        height: '60px'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Красная линия поверх ног */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[160px] bg-red-700 z-10 transform -skew-y-6 origin-top-left"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        />
      </section>

      {/* Красный переходный слой */}
      <div className="h-20 bg-gradient-to-b from-red-600 via-red-500 to-red-400"></div>

      {/* Белая секция - Who is Mario */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-title text-6xl text-red-600 mb-6">
                Who is Mario?
              </h2>
              
              <p className="font-body text-xl text-gray-700 leading-relaxed mb-6">
                Mario is a brave plumber from the Mushroom Kingdom. 
                With his brother Luigi, he battles Bowser and saves Princess Peach 
                from danger time and time again!
              </p>
              
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Since his debut in 1985, Mario has become the face of Nintendo and 
                one of the most recognizable characters in gaming history. His adventures 
                have taken him across countless worlds, from the classic Super Mario Bros. 
                to modern 3D odysseys.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-8 shadow-2xl">
                <motion.img
                  src={mario}
                  alt="Mario"
                  className="w-full h-64 object-contain drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Декоративные звёздочки */}
              <motion.div
                className="absolute -top-4 -right-4 text-yellow-400 text-3xl"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                ⭐
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 text-yellow-400 text-2xl"
                animate={{ 
                  rotate: -360,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity }
                }}
              >
                ⭐
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
