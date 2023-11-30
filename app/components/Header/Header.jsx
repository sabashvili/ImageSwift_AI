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
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
