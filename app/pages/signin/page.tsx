import Image from "next/image";
import classes from "./page.module.css";
import signLogo from "../../../public/Icons/sign-in-logo.svg";
import profileInputIcon from "../../../public/Icons/profile-input-icon.svg";
import passwordInputIcon from "../../../public/Icons/password-input-logo.svg";
import arrowIcon from "../../../public/Icons/Arrow.svg";

export default () => {
  return (
    <section className={classes["sign-in-page"]}>
      <div className={classes["sign-page-img-box"]}>
        <div className={classes["sign-img-container"]}>
          <Image className={classes["sign-logo"]} src={signLogo} alt="sign in logo" />
          <h1 className={classes["main-nav-header"]}>ImageSwift AI</h1>
        </div>
      </div>
      <div className={classes["sign-page-text-box"]}>
        <div className={classes["form-container"]}>
          <div>
            <h1 className={classes["sign-title"]}>Login</h1>
            <h2 className={classes["sign-subtitle"]}>Please fill your information below</h2>
          </div>

          <form className={classes["sign-form"]}>
            <div className={classes["input-container"]}>
              <label htmlFor="mail-input">
                <Image className={classes["profile-logo"]} src={profileInputIcon} alt="sign in logo" />
              </label>
              <input type="email" id="mail-input" placeholder="Email" />
            </div>

            <div className={classes["input-container"]}>
              <label htmlFor="password-input">
                <Image className={classes["profile-logo"]} src={passwordInputIcon} alt="sign in logo" />
              </label>
              <input type="password" id="password-input" placeholder="Password" />
            </div>

            <button type="submit">
              Login
              <Image src={arrowIcon} alt="arrow icon" />
            </button>
          </form>
          <div className={classes["register-question-container"]}>
            <p>Don’t haven an account?</p>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </div>
    </section>
  );
};
