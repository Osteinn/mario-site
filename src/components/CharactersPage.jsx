import { motion } from "framer-motion";
import mario from "../assets/characters/mario.png";
import luigi from "../assets/characters/luigi.png";
import peach from "../assets/characters/peach.png";
import bowser from "../assets/characters/bowser.png";
import yoshi from "../assets/characters/yoshi.png";
import toad from "../assets/characters/toad.png";
import donkey from "../assets/characters/donkeykong.png";
import wario from "../assets/characters/wario.png";
import koopa from "../assets/characters/koopa.png";
import boo from "../assets/characters/boo.png";

// Цвета для каждого персонажа
const getCharacterColor = (name) => {
  const colors = {
    "Mario": "from-red-700 to-red-800",
    "Luigi": "from-green-700 to-green-800", 
    "Princess Peach": "from-pink-600 to-pink-700",
    "Bowser": "from-orange-700 to-orange-800",
    "Yoshi": "from-lime-600 to-lime-700",
    "Toad": "from-blue-600 to-blue-700",
    "Donkey Kong": "from-amber-700 to-amber-800",
    "Wario": "from-yellow-600 to-yellow-700",
    "Koopa Troopa": "from-emerald-700 to-emerald-800",
    "Boo": "from-gray-600 to-gray-700"
  };
  return colors[name] || "from-gray-600 to-gray-700";
};

function CharacterCard({ name, ability, image }) {
  return (
    <motion.div 
      className="group relative cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden"
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`aspect-square bg-gradient-to-br ${getCharacterColor(name)} p-6 flex items-center justify-center relative`}>
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain drop-shadow-2xl z-10"
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay с описанием при hover */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-6 text-center z-20">
          <h3 className="font-nintendo text-2xl font-bold mb-3 text-yellow-300">
            {name}
          </h3>
          <p className="font-body text-sm text-white/90 leading-relaxed">
            {ability}
          </p>
        </div>

        {/* Звёздочки для декора */}
        <div className="absolute top-2 right-2 opacity-70 group-hover:opacity-100 transition-opacity">
          <motion.span 
            className="text-yellow-300 text-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            ⭐
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

function CharacterGrid({ characters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {characters.map((char, index) => (
        <motion.div
          key={char.name}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <CharacterCard
            name={char.name}
            ability={char.ability}
            image={char.image}
          />
        </motion.div>
      ))}
    </div>
  );
}

const characters = [
  { name: "Mario", ability: "Super jump and fireball attacks", image: mario },
  { name: "Luigi", ability: "Jumps higher than Mario, slides when running", image: luigi },
  { name: "Princess Peach", ability: "Floats in the air and has healing powers", image: peach },
  { name: "Bowser", ability: "Fire breath and super strength", image: bowser },
  { name: "Yoshi", ability: "Eats enemies and can flutter jump", image: yoshi },
  { name: "Toad", ability: "Fast running and high endurance", image: toad },
  { name: "Donkey Kong", ability: "Powerful punches and barrel throwing", image: donkey },
  { name: "Wario", ability: "Shoulder charge and wall breaking", image: wario },
  { name: "Koopa Troopa", ability: "Hides in shell and rolls on ground", image: koopa },
  { name: "Boo", ability: "Becomes invisible and sneaks behind", image: boo },
];

export function CharactersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="font-title text-7xl text-black mb-6 drop-shadow-lg tracking-wider">
          CHARACTERS
        </h1>
        <p className="font-body text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          From ravishing royalty to menacing monsters, the Mushroom Kingdom has had its share of memorable characters over the years...
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <CharacterGrid characters={characters} />
      </motion.div>
    </div>
  );
}
