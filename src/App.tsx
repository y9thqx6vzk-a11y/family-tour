import Hero from "./components/Hero";
import Itinerary from "./components/Itinerary";
import TripMap from "./components/TripMap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-right" dir="rtl">
      <Hero />
      <TripMap />
      <Itinerary />
      <Footer />
    </div>
  );
}
