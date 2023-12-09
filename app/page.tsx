import styles from "./page.module.css";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import PricingPage from "./components/PricingPage/PricingPage";
import AboutPage from "./components/AboutPage/AboutPage";

export default function Home() {
  return (
    <main>
      <HomePage />
      <FeaturesPage />
      <PricingPage />
      <AboutPage />
    </main>
  );
}
