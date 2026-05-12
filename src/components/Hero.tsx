import { motion } from "motion/react";
import { Calendar, MapPin, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541194577687-8c63fc9e7af2?q=80&w=2574&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-olive/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand/30 backdrop-blur-md border border-white/30 text-sm font-medium mb-6"
        >
          <span className="font-bold text-accent">2-4 אוגוסט</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          <span>צפון רמת הגולן</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4"
        >
          הטיול המשפחתי שלנו
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-light max-w-2xl text-cream mb-10"
        >
          יוצאים למסע משותף! טבע, על האש, מדורה, והמון חוויות בחווה של אינדיאנה ג'ונס במושב שעל.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#itinerary" className="px-8 py-4 bg-accent hover:bg-accent/90 text-earth font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            הלו"ז המלא
          </a>
          <a href="#map" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-xl transition-all">
            מפת המסלול
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--color-cream)"></path>
        </svg>
      </div>
    </div>
  );
}
