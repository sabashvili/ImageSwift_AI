"use client";
import classes from "./FeaturesPage.module.css";
import Image from "next/image";
import generateImage_1 from "../../../public/Images/GeneratedImagesExamples/generated-image-1.jpg";
import generateImage_2 from "../../../public/Images/GeneratedImagesExamples/generated-image-2.jpg";
import generateImage_3 from "../../../public/Images/GeneratedImagesExamples/generated-image-3.jpg";
import generateImage_4 from "../../../public/Images/GeneratedImagesExamples/generated-image-4.jpg";
import generateImage_5 from "../../../public/Images/GeneratedImagesExamples/generated-image-5.jpg";
import generateImage_6 from "../../../public/Images/GeneratedImagesExamples/generated-image-6.jpg";
import generateImage_7 from "../../../public/Images/GeneratedImagesExamples/generated-image-7.jpg";
import generateImage_8 from "../../../public/Images/GeneratedImagesExamples/generated-image-8.jpg";
import generateImage_9 from "../../../public/Images/GeneratedImagesExamples/generated-image-9.jpg";
import generateImage_10 from "../../../public/Images/GeneratedImagesExamples/generated-image-10.jpg";
import qualities_icon_1 from "../../../public/Icons/qualities_icon_1.svg";
import qualities_icon_2 from "../../../public/Icons/qualities_icon_2.svg";
import qualities_icon_3 from "../../../public/Icons/qualities_icon_3.svg";
import qualities_icon_4 from "../../../public/Icons/qualities_icon_4.svg";

function FeaturesPage() {
  return (
    <section>
      <div className={classes["generated-images"]}>
        <div
          className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-first-line"]}`}
        >
          <div>
            <Image
              className={classes["generated-image"]}
              src={generateImage_1}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_2}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_3}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_4}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_5}
              alt=""
            />
          </div>
          <div>
            <Image
              className={classes["generated-image"]}
              src={generateImage_1}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_2}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_3}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_4}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_5}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-second-line"]}`}
        >
          <div>
            <Image
              className={classes["generated-image"]}
              src={generateImage_6}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_7}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_8}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_9}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_10}
              alt=""
            />
          </div>
          <div>
            <Image
              className={classes["generated-image"]}
              src={generateImage_6}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_7}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_8}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_9}
              alt=""
            />
            <Image
              className={classes["generated-image"]}
              src={generateImage_10}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="main-header-section">Discover Our Pinnacle Qualities</h1>
        <h2 className="secondary-header-section">
          Essential Aspects That Define Us
        </h2>
        <div className={classes["qualities-container"]}>
          <div className={classes["qualitie"]}>
            <Image
              className={classes["qualitie-icon"]}
              src={qualities_icon_1}
              alt="qualities icon"
            />

            <h1>Creativity</h1>
            <p>This is where creativity reaches its zenith.</p>
          </div>
          <div className={classes["qualitie"]}>
            <Image
              className={classes["qualitie-icon"]}
              src={qualities_icon_2}
              alt="qualities icon"
            />
            <h1>Precision</h1>
            <p>We have presented the most accurate algorithm.</p>
          </div>
          <div className={classes["qualitie"]}>
            <Image
              className={classes["qualitie-icon"]}
              src={qualities_icon_3}
              alt="qualities icon"
            />
            <h1>Speed</h1>
            <p>Creating each image takes less than a minute.</p>
          </div>
          <div className={classes["qualitie"]}>
            <Image
              className={classes["qualitie-icon"]}
              src={qualities_icon_4}
              alt="qualities icon"
            />
            <h1>Artistry</h1>
            <p>This is our most fundamental principle of work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;
