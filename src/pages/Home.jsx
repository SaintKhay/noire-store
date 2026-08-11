import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <NavBar />
      <Hero />
      <ProductSection />
      <Footer />
    </div>
  );
}
