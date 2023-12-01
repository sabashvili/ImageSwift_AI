import classes from "./HomePage.module.css";
import "../../globals.css";

function HomePage() {
  return (
    <section className={classes.homePage}>
      <div className={`sectionContainer ${classes["home-page-content"]} `}>
        <h1 className={`header-primary`}>A Journey Through Imagination</h1>
        <h2
          className={`header-secondary ${classes["home-page-header-secondary"]}`}
        >
          We illustrate only what you desire from your imagination!
        </h2>
        <div className={classes["home-page-input-container"]}>
          <input
            className={classes["home-page-input"]}
            placeholder="Explain what you want or use the following tags"
            type="text"
          />
          <button>Create</button>
          <ul>
            Popular Tags:
            <li>Human</li>
            <li>Car</li>
            <li>Animal</li>
            <li>Girl</li>
            <li>Creativity</li>
            <li>Nature</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
