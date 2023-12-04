import styles from "./page.module.css";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import PricingPage from "./components/PricingPage/PricingPage";

export default function Home() {
  return (
    <>
      <HomePage />
      <FeaturesPage />
      <PricingPage />
    </>
  );
}
