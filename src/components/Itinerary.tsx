import { motion } from "motion/react";
import { Coffee, MapPin, Tent, Utensils, Moon, Sunrise, Navigation, Flame, HandHeart, Waves, Calendar } from "lucide-react";

const days = [
  {
    id: "sunday",
    title: "יום ראשון, 2/08",
    subtitle: "מתחילים את המסע",
    color: "bg-sand",
    iconColor: "text-olive",
    events: [
      {
        time: "12:00",
        title: "קפה ולהתעורר",
        description: 'נפגשים ב"מקום יפה לקפה". בבקשה תבואו אחרי ארוחת בוקר כי אין כיף בלהיות רעבים כשנפגשים!',
        icon: <Coffee className="w-5 h-5" />,
        mapLink: "https://maps.app.goo.gl/Yq7YmRzj4eP2K2Sj7" // generic placeholder, let's just make it visually clickable
      },
      {
        time: "13:00",
        title: "פארק הירדן",
        description: "אפשר ללכת מסלול בפארק או לעשות מסלול אופניים של כ-8 קילומטרים. ניפגש כולנו לאחר מכן.",
        icon: <Tent className="w-5 h-5" />,
         mapLink: "https://maps.app.goo.gl/1S6b4NqYJ6L1Z4EaA"
      },
      {
        time: "15:00",
        title: "צ'ק אין",
        description: "התארגנות ראשונית בחדרים.",
        icon: <Moon className="w-5 h-5" />
      },
      {
        time: "17:00",
        title: "הגעה לאינדיאנה ג'ונס",
        description: "מתבססים במתחם אינדיאנה ג'ונס בשעל. מקום מושלם למנוחה ולחוויות.",
        icon: <MapPin className="w-5 h-5" />,
        mapLink: "https://maps.app.goo.gl/15K21x5A8E19p3u27"
      },
      {
        time: "18:00",
        title: "ארוחת ערב",
        description: "הכנות בצוותא - מנגל או בישול בשרי אחר על האש. מינגלינג ואוכל טוב.",
        icon: <Utensils className="w-5 h-5" />
      }
    ]
  },
  {
    id: "monday",
    title: "יום שני, 3/08",
    subtitle: "טבע ופויקה",
    color: "bg-sand",
    iconColor: "text-olive",
    events: [
      {
        time: "07:00",
        title: "תפילת שחרית",
        description: "למעוניינים, יש מניין בקצרין.",
        icon: <HandHeart className="w-5 h-5" />,
        mapLink: "https://maps.app.goo.gl/L5G9rTq2WzWxgmSj7"
      },
      {
        time: "08:00",
        title: "ארוחת בוקר בצוותא",
        description: "הכנות וארגון משותף. בתפריט: שקשוקה מצוינת! למעוניינים – יש עגלת קפה באזור. מוכנים ליציאה ב-9:30.",
        icon: <Sunrise className="w-5 h-5" />
      },
      {
        time: "09:30 - 15:30",
        title: "מסלול אצבע הגליל והגולן",
        description: "יוצאים למסלול הליכה יפהפה. אוכלים צהריים (סנדוויצ'ים) במסלול. אולי נקפוץ לאיזו עגלת קפה בדרך.",
        icon: <Navigation className="w-5 h-5" />
      },
      {
        time: "אחה״צ",
        title: "זמן מנוחה",
        description: "חוזרים לנוח במתחם. אפשר לקפוץ לעגלת קפה או לשתות בירה קרה לקראת השקיעה.",
        icon: <Coffee className="w-5 h-5" />
      },
      {
        time: "19:30",
        title: "מדורה, פויקה ומטפונס",
        description: "מתכנסים מסביב לאש. מכינים לארוחת ערב פויקה עשיר ומטפונס טעים. ערב של גיבוש וסיפורים.",
        icon: <Flame className="w-5 h-5" />
      }
    ]
  },
  {
    id: "tuesday",
    title: "יום שלישי, 4/08",
    subtitle: "קפה, כינרת והביתה",
    color: "bg-sand",
    iconColor: "text-olive",
    events: [
      {
        time: "08:30",
        title: "בוקר של קפה",
        description: "פותחים את הבוקר בעגלת קפה קרובה להתרעננות.",
        icon: <Coffee className="w-5 h-5" />
      },
      {
        time: "09:00",
        title: "ארוחת בוקר בנחת",
        description: "ארוחת בוקר רגועה ואחרונה יחד במתחם.",
        icon: <Utensils className="w-5 h-5" />
      },
      {
        time: "11:00",
        title: "צ'ק אאוט",
        description: "אורזים את הציוד, נפרדים מהמקום ונכנסים לרכבים.",
        icon: <Tent className="w-5 h-5" />
      },
      {
        time: "12:00",
        title: "מעיין או כינרת",
        description: "מקנחים את הטיול בטבילה מרעננת בכנרת או באחד ממעיינות האזור, ומשם הביתה.",
        icon: <Waves className="w-5 h-5" />
      }
    ]
  }
];

export default function Itinerary() {
  return (
    <section id="itinerary" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-earth mb-4"
          >
            לוח זמנים
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-earth/80"
          >
            פירוט הימים והפעילויות. גמיש ובאווירה טובה!
          </motion.p>
        </div>

        <div className="space-y-16">
          {days.map((day, dayIndex) => (
            <motion.div 
              key={day.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="relative"
            >
              {/* Day Header */}
              <div className="sticky top-4 z-10 bg-cream/90 backdrop-blur-md py-4 mb-8 border-b border-accent">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${day.color} ${day.iconColor}`}>
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-earth font-display">{day.title}</h3>
                    <p className="text-olive/70 font-medium">{day.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-4 md:pl-0 border-r-2 border-olive/20 mr-[28px] md:mr-8 space-y-8">
                {day.events.map((event, index) => (
                  <div key={index} className="relative pr-8 md:pr-12">
                     {/* Timeline Node */}
                     <div className={`absolute -right-[35px] md:-right-[39px] w-6 h-6 rounded-full border-4 border-cream bg-white shadow-sm flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${day.iconColor.replace('text', 'bg')}`}></div>
                     </div>

                     <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-white/80 hover:shadow-md transition-shadow group border-r-4 border-r-accent">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className={`shrink-0 p-3 rounded-xl bg-sand/30 ${day.iconColor}`}>
                            {event.icon}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <h4 className="text-xl font-bold text-earth">{event.title}</h4>
                              <span className="inline-flex items-center text-sm font-semibold text-olive/80 bg-sand/30 px-3 py-1 rounded-full w-fit">
                                הפעילות ב-{event.time}
                              </span>
                            </div>
                            <p className="text-earth/80 border-t-0 leading-relaxed mb-4">
                              {event.description}
                            </p>

                            {event.mapLink && (
                              <a 
                                href={event.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 text-sm font-medium ${day.iconColor} hover:underline`}
                              >
                                <MapPin className="w-4 h-4" />
                                נווט למקום
                              </a>
                            )}
                          </div>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pre-Trip Option */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-20 bg-[#FFF4E5] rounded-3xl p-8 border border-[#FFD8A8] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-tr-full -z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <Tent className="w-10 h-10 text-olive mb-4" />
            <h3 className="text-2xl font-bold text-earth mb-3 font-display italic">למיטיבי לכת: קמפינג מקדים ממוצ"ש</h3>
            <p className="text-earth/80 max-w-lg mx-auto italic">
              לאלו שרוצים להתחיל מוקדם, יש אופציה לנסוע כבר במוצאי שבת, להקים אוהל ולעשות קמפינג על גדות הירדן. 
              אווירה קסומה והתעוררות מול המים!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
