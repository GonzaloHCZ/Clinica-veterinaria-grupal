import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
