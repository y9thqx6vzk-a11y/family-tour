import { motion } from "motion/react";
import { MapPin, Navigation, Car, Tent, Map as MapIcon } from "lucide-react";

export default function TripMap() {
  const points = [
    {
      id: "hashmonaim",
      name: "חשמונאים",
      desc: "נקודת היציאה שלנו",
      googleMaps: "https://maps.app.goo.gl/gQ9nC3K5N2W3x1HRA" 
    },
    {
      id: "coffee",
      name: 'מקום יפה לקפה',
      desc: "נקודת מפגש ראשונה (12:00)",
      googleMaps: "https://maps.app.goo.gl/Yq7YmRzj4eP2K2Sj7"
    },
    {
      id: "jordan",
      name: "פארק הירדן",
      desc: "טיול / אופניים (13:00)",
      googleMaps: "https://maps.app.goo.gl/1S6b4NqYJ6L1Z4EaA"
    },
    {
      id: "shual",
      name: "אינדיאנה ג'ונס - שעל",
      desc: "הלינה שלנו",
      googleMaps: "https://maps.app.goo.gl/15K21x5A8E19p3u27"
    },
    {
      id: "katzrin",
      name: "קצרין",
      desc: "עיר הגולן - תפילת בוקר",
      googleMaps: "https://maps.app.goo.gl/L5G9rTq2WzWxgmSj7"
    },
    {
      id: "kinneret",
      name: "כנרת",
      desc: "טבילה מרעננת בסיום",
      googleMaps: "https://maps.app.goo.gl/N9sN9TqU3oK9xZt79"
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
            הנקודות המרכזיות במסע שלנו. מומלץ לשמור את נקודות ציון אלו ב-Google Maps לפני היציאה.
          </motion.p>
        </div>

        <div className="bg-sand/30 rounded-[2rem] border border-olive/20 p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Path */}
          <svg className="absolute top-0 right-0 w-full h-full text-olive/10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
             <path d="M -100,50 Q 300,300 800,100 T 1500,600" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="12,12" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
             {points.map((point, i) => (
                <motion.a
                  href={point.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/60 p-6 rounded-2xl shadow-sm border border-white/80 hover:shadow-lg hover:border-accent transition-all text-right flex items-start gap-4"
                >
                  <div className="shrink-0 p-4 rounded-full bg-cream text-olive group-hover:bg-olive group-hover:text-cream transition-colors border border-olive/10 group-hover:border-olive">
                    {i === 0 ? <Car className="w-6 h-6" /> : 
                     i === 3 ? <Tent className="w-6 h-6" /> : 
                     <MapPin className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-earth group-hover:text-olive transition-colors">{point.name}</h4>
                    <p className="text-earth/70 text-sm mb-3">{point.desc}</p>
                    <span className="text-xs font-semibold uppercase bg-sand/50 text-olive px-2 py-1 rounded">
                      נווט ב-Maps
                    </span>
                  </div>
                </motion.a>
             ))}
          </div>

          <div className="mt-12 text-center relative z-10">
            <a 
              href="https://maps.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-cream rounded-full hover:bg-earth transition-colors font-medium shadow-md"
            >
              <MapIcon className="w-5 h-5" />
              פתח מפה מלאה
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
