import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ProblemSection from './components/ProblemSection/ProblemSection'
import SolutionSection from './components/SolutionSection/SolutionSection'
import ProductOverview from './components/ProductOverview/ProductOverview'
import MLSteps from './components/MLSteps/MLSteps'
import Capabilities from './components/Capabilities/Capabilities'
import TargetUsers from './components/TargetUsers/TargetUsers'
import Pricing from './components/Pricing/Pricing'
import MarketOpportunity from './components/MarketOpportunity/MarketOpportunity'
import CompetitiveAdvantage from './components/CompetitiveAdvantage/CompetitiveAdvantage'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'

function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductOverview />
      <MLSteps />
      <Capabilities />
      <TargetUsers />
      {/* <Pricing /> */}
      <MarketOpportunity />
      <CompetitiveAdvantage />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
}
