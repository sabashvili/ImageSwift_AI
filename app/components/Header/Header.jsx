import Image from "next/image";
import Link from "next/link";
import mainLogo from "../../../public/Images/main-logo.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <a href="/">
        <Image
          className={classes["main-nav-logo"]}
          src={mainLogo}
          alt="company name and logo"
        />
      </a>
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li className={classes["main-nav-list-item"]}>
            <a href="/">Home</a>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <a href="/">Features</a>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <a href="/">Pricing</a>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <a href="/">Team</a>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <a href="/">Contact</a>
          </li>

          <li
            className={`${classes["main-nav-list-item"]} ${classes["main-nav-list-item-button"]}`}
          >
            <a href="/">Try Your First Creation!</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
