import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularProduct from "./components/PopularProduct";
import TrendingProduct from "./components/TrendingProduct";
import Guide from "./components/Guide";
import Testimonials from "./components/Testimonials";
import OurClient from "./components/OurClient";
import Footer from "./components/Footer";
import MiddleCard from "./components/MiddleCard";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProduct />
      <TrendingProduct />
      <Guide />
      <Testimonials />
      <OurClient />
      <MiddleCard/>
      <Footer />
    </>
  );
}
