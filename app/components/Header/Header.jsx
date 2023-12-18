"use client";
import classes from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [shownMobileMenu, setShownMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navBarRef = useRef();

  useEffect(() => {
    const closeNavBar = (e) => {
      if (!navBarRef.current.contains(e.target)) {
        setShownMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", closeNavBar);
  });

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navBarRef}
      className={`${classes.header} ${shownMobileMenu ? classes["nav-open"] : ""} ${scrolled ? classes["scrolled-nav-bar"] : ""}`}
    >
      <a href="/">
        <h1 className={classes["main-nav-header"]}>ImageSwift AI</h1>
      </a>
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li className={classes["main-nav-list-item"]}>
            <Link
              activeClass={classes.active}
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              delay={-200}
              onClick={() => setShownMobileMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <Link
              activeClass={classes.active}
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              delay={-200}
              onClick={() => setShownMobileMenu(false)}
            >
              Features
            </Link>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <Link
              activeClass={classes.active}
              to="pricing"
              spy={true}
              smooth={true}
              offset={-85}
              duration={500}
              delay={-200}
              onClick={() => setShownMobileMenu(false)}
            >
              Pricing
            </Link>
          </li>
          <li className={classes["main-nav-list-item"]}>
            <Link
              activeClass={classes.active}
              to="about"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              delay={-200}
              onClick={() => setShownMobileMenu(false)}
            >
              About
            </Link>
          </li>

          <li className={`${classes["main-nav-list-item"]} ${classes["main-nav-list-item-button"]}`}>
            <a href="/">Try Your First Creation!</a>
          </li>
        </ul>
        {shownMobileMenu ? (
          <button className={`${classes["btn-mobile-nav"]} ${classes["btn-close-position"]}`}>
            <CloseIcon
              onClick={() => {
                setShownMobileMenu(!shownMobileMenu);
              }}
              className={classes["menu-icon"]}
            />{" "}
          </button>
        ) : (
          ""
        )}
      </nav>
      <button className={classes["btn-mobile-nav"]}>
        <MenuRoundedIcon
          onClick={() => {
            setShownMobileMenu(!shownMobileMenu);
          }}
          className={classes["menu-icon"]}
        />
      </button>
    </header>
  );
}

export default Header;
