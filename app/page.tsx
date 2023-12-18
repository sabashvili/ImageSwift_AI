import styles from './page.module.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import FeaturesPage from './components/FeaturesPage/FeaturesPage'
import PricingPage from './components/PricingPage/PricingPage'
import AboutPage from './components/AboutPage/AboutPage'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
        <FeaturesPage />
        <PricingPage />
        <AboutPage />
      </main>
      <Footer />
    </>
  )
}
