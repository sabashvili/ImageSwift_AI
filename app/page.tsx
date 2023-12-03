import styles from "./page.module.css";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";

export default function Home() {
  return (
    <>
      <HomePage />
      <FeaturesPage />
    </>
  );
}
