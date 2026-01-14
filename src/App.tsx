import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProductsGrid } from './components/ProductsGrid'
import { BrandSection } from './components/BrandSection'
import { LifestyleSection } from './components/LifestyleSection'
import { TechDetails } from './components/TechDetails'
import { ScentsVariants } from './components/ScentsVariants'
import { Newsletter, Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-padree-black text-white selection:bg-padree-gold selection:text-black font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsGrid />
        <BrandSection />
        <LifestyleSection />
        <TechDetails />
        <ScentsVariants />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
