import { motion } from "motion/react";
import { MapPin, Navigation, Car, Tent, Map as MapIcon, Globe } from "lucide-react";

export default function TripMap() {
  const points = [
    {
      id: "coffee",
      name: 'מקום יפה לקפה',
      desc: "נקודת מפגש ראשונה (10:30)",
      wazeUrl: "https://waze.com/ul?q=מקום יפה לקפה&navigate=yes"
    },
    {
      id: "jordan",
      name: "פארק הירדן",
      desc: "טיול / אופניים (13:00)",
      wazeUrl: "https://waze.com/ul?q=פארק הירדן&navigate=yes",
      websiteUrl: "https://parkjordan.co.il/"
    },
    {
      id: "shual",
      name: "אינדיאנה ג'ונס - שעל",
      desc: "הלינה שלנו",
      wazeUrl: "https://waze.com/ul?q=אינדיאנה ג'ונס שעל&navigate=yes",
      websiteUrl: "https://www.indiana-jones.co.il/"
    },
    {
      id: "katzrin",
      name: "קצרין",
      desc: "עיר הגולן - תפילת בוקר",
      wazeUrl: "https://waze.com/ul?q=קצרין&navigate=yes"
    },
    {
      id: "kinneret",
      name: "כנרת",
      desc: "טבילה מרעננת בסיום",
      wazeUrl: "https://waze.com/ul?q=כנרת&navigate=yes"
    }
  ];

  return (
    <section id="map" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-earth mb-4"
          >
            מפת הטיול שלנו
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-earth/80 max-w-2xl mx-auto"
          >
            הנקודות המרכזיות במסע שלנו. מומלץ לשמור את נקודות ציון אלו בוויז (Waze) לפני היציאה.
          </motion.p>
        </div>

        {/* Visual Map */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-12 bg-cream rounded-3xl border border-olive/20 flex flex-col shadow-inner overflow-hidden" dir="ltr">
          <div className="absolute top-6 right-6 font-display font-bold text-2xl text-olive border-b border-olive/30 pb-1 z-20 text-right bg-cream/80 px-2 rounded backdrop-blur-sm" dir="rtl">מפת שביל הצפון</div>
          
          <div className="absolute inset-0 z-0 h-full w-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               {/* Mediterranean Sea */}
               <path d="M 0 0 L 20 0 L 20 15 L 10 20 L 18 35 L 14 60 L 10 100 L 0 100 Z" fill="#BFDBFE" opacity="0.6"/>
               <text x="5" y="50" fontSize="4" fill="#1E40AF" opacity="0.4" transform="rotate(-65 5 50)" fontWeight="bold">הים התיכון</text>

               {/* Map Borders (Lebanon/Syria) */}
               <path d="M 20 0 L 50 0 L 60 10 L 75 10 L 95 35 L 90 65 L 80 85 L 75 100" fill="none" stroke="#5A5A40" strokeWidth="0.8" strokeDasharray="2,3" opacity="0.5"/>

               {/* Regional Areas Background Text */}
               <text x="85" y="25" fontSize="6" fill="#5A5A40" opacity="0.15" fontWeight="bold" textAnchor="middle">רמת הגולן</text>
               <text x="45" y="25" fontSize="6" fill="#5A5A40" opacity="0.15" fontWeight="bold" textAnchor="middle">הגליל</text>

               {/* The Kinneret (Sea of Galilee) */}
               <path d="M 50 60 C 65 60, 68 75, 55 85 C 45 92, 40 75, 50 60 Z" fill="#60A5FA" opacity="0.5"/>
               <text x="53" y="75" fontSize="3" fill="#1E3A8A" opacity="0.6" fontWeight="bold" textAnchor="middle">הכנרת</text>
               
               {/* Jordan River */}
               <path d="M 55 0 C 60 20, 48 40, 50 60" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.5"/>

               {/* Route Line (Connects the dots) */}
               <path d="M 35 85 Q 45 75 52 62 L 70 45 L 70 20" fill="none" stroke="#D4A373" strokeWidth="1.5" strokeDasharray="3,3"/>
            </svg>
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* מקום יפה לקפה */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="absolute w-4 h-4 bg-accent rounded-full z-10 border-[3px] border-white shadow-sm" style={{ top: '85%', left: '35%', transform: 'translate(-50%, -50%)' }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute text-sm font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm whitespace-nowrap text-earth z-10" style={{ top: '85%', left: '35%', transform: 'translate(10px, -50%)' }} dir="rtl">מקום יפה לקפה</motion.div>
            
            {/* פארק הירדן */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute w-4 h-4 bg-olive rounded-full z-10 border-[3px] border-white shadow-sm" style={{ top: '62%', left: '52%', transform: 'translate(-50%, -50%)' }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute text-sm font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm whitespace-nowrap text-earth z-10" style={{ top: '62%', left: '52%', transform: 'translate(10px, -50%)' }} dir="rtl">פארק הירדן</motion.div>

            {/* קצרין */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute w-4 h-4 bg-olive rounded-full z-10 border-[3px] border-white shadow-sm" style={{ top: '45%', left: '70%', transform: 'translate(-50%, -50%)' }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute text-sm font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm whitespace-nowrap text-earth z-10" style={{ top: '45%', left: '70%', transform: 'translate(-10px, -50%)' }} dir="rtl">קצרין</motion.div>

            {/* אינדיאנה ג'ונס */}
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute w-5 h-5 bg-olive rounded-full z-10 border-[4px] border-accent shadow-md" style={{ top: '20%', left: '70%', transform: 'translate(-50%, -50%)' }}></motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="absolute text-sm font-bold bg-olive text-cream px-4 py-2 rounded-xl shadow-md whitespace-nowrap z-10" style={{ top: '15%', left: '70%', transform: 'translate(-50%, -100%)' }} dir="rtl">אינדיאנה ג'ונס (שעל) ⛺</motion.div>
          </div>
        </div>

        <div className="bg-sand/30 rounded-[2rem] border border-olive/20 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Path */}
          <svg className="absolute top-0 right-0 w-full h-full text-olive/10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
             <path d="M -100,50 Q 300,300 800,100 T 1500,600" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="12,12" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
             {points.map((point, i) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/60 p-6 rounded-2xl shadow-sm border border-white/80 transition-all text-right flex items-start gap-4"
                >
                  <div className="shrink-0 p-4 rounded-full bg-cream text-olive border border-olive/10">
                    {point.id === "shual" ? <Tent className="w-6 h-6" /> : 
                     point.id === "kinneret" || point.id === "jordan" ? <MapPin className="w-6 h-6" /> : 
                     <Car className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-earth">{point.name}</h4>
                    <p className="text-earth/70 text-sm mb-4">{point.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      <a href={point.wazeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase bg-sand/80 text-olive px-3 py-1.5 rounded-lg hover:bg-olive hover:text-white transition-colors">
                        <Navigation className="w-3.5 h-3.5" /> בוויז
                      </a>
                      {(point as any).websiteUrl && (
                        <a href={(point as any).websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase bg-cream text-olive px-3 py-1.5 rounded-lg hover:bg-olive hover:text-white transition-colors border border-olive/10">
                          <Globe className="w-3.5 h-3.5" /> אתר
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
             ))}
          </div>

          <div className="mt-12 text-center relative z-10">
            <a 
              href="https://waze.com/ul?q=רמת הגולן&navigate=yes" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream rounded-full hover:bg-earth transition-colors font-medium shadow-md"
            >
              <Navigation className="w-5 h-5" />
              פתח מפה ב-Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
