"use client";
import classes from "./FeaturesPage.module.css";
import Image from "next/image";
import generatedImage_1 from "../../../public/Images/GeneratedImagesExamples/generated-image-1.jpg";
import generatedImage_2 from "../../../public/Images/GeneratedImagesExamples/generated-image-2.jpg";
import generatedImage_3 from "../../../public/Images/GeneratedImagesExamples/generated-image-3.jpg";
import generatedImage_4 from "../../../public/Images/GeneratedImagesExamples/generated-image-4.jpg";
import generatedImage_5 from "../../../public/Images/GeneratedImagesExamples/generated-image-5.jpg";
import generatedImage_6 from "../../../public/Images/GeneratedImagesExamples/generated-image-6.jpg";
import generatedImage_7 from "../../../public/Images/GeneratedImagesExamples/generated-image-7.jpg";
import generatedImage_8 from "../../../public/Images/GeneratedImagesExamples/generated-image-8.jpg";
import generatedImage_9 from "../../../public/Images/GeneratedImagesExamples/generated-image-9.jpg";
import generatedImage_10 from "../../../public/Images/GeneratedImagesExamples/generated-image-10.jpg";
import qualities_icon_1 from "../../../public/Icons/qualities_icon_1.svg";
import qualities_icon_2 from "../../../public/Icons/qualities_icon_2.svg";
import qualities_icon_3 from "../../../public/Icons/qualities_icon_3.svg";
import qualities_icon_4 from "../../../public/Icons/qualities_icon_4.svg";
import captivatingImage from "../../../public/Images/GeneratedImagesExamples/Rectangle 1.jpg";
import demetreProfilePhoto from "../../../public/Images/demetre_tetunashvili_profile_photo.jpg";

function FeaturesPage() {
  const generatedImages: any = [
    generatedImage_1,
    generatedImage_2,
    generatedImage_3,
    generatedImage_4,
    generatedImage_5,
    generatedImage_6,
    generatedImage_7,
    generatedImage_8,
    generatedImage_9,
    generatedImage_10,
  ];

  return (
    <section>
      <div className={classes["generated-images"]}>
        <div className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-first-line"]}`}>
          <div>
            {generatedImages.map((pic: string, index: any) => {
              if (index < 5) {
                return <Image key={Math.random()} className={classes["generated-image"]} src={pic} alt="generated images" />;
              }
            })}
          </div>
          <div>
            {generatedImages.map((pic: string, index: any) => {
              if (index < 5) {
                return <Image key={Math.random()} className={classes["generated-image"]} src={pic} alt="generated images" />;
              }
            })}
          </div>
        </div>
        <div className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-second-line"]}`}>
          <div>
            {generatedImages.map((pic: string, index: any) => {
              if (index > 4) {
                return <Image key={Math.random()} className={classes["generated-image"]} src={pic} alt="generated images" />;
              }
            })}
          </div>
          <div>
            {generatedImages.map((pic: string, index: any) => {
              if (index > 4) {
                return <Image key={Math.random()} className={classes["generated-image"]} src={pic} alt="generated images" />;
              }
            })}
          </div>
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="main-header-section">Discover Our Pinnacle Qualities</h1>
        <h2 className="secondary-header-section">Essential Aspects That Define Us</h2>
        <div className={classes["qualities-container"]}>
          <div className={classes["quality"]}>
            <Image className={classes["quality-icon"]} src={qualities_icon_1} alt="qualities icon" />

            <h1>Creativity</h1>
            <p>This is where creativity reaches its zenith.</p>
          </div>
          <div className={classes["quality"]}>
            <Image className={classes["quality-icon"]} src={qualities_icon_2} alt="qualities icon" />
            <h1>Precision</h1>
            <p>We have presented the most accurate algorithm.</p>
          </div>
          <div className={classes["quality"]}>
            <Image className={classes["quality-icon"]} src={qualities_icon_3} alt="qualities icon" />
            <h1>Speed</h1>
            <p>Creating each image takes less than a minute.</p>
          </div>
          <div className={classes["quality"]}>
            <Image className={classes["quality-icon"]} src={qualities_icon_4} alt="qualities icon" />
            <h1>Artistry</h1>
            <p>This is our most fundamental principle of work.</p>
          </div>
        </div>
        <div className={classes["captivatin-img-container"]}>
          <Image className={classes["captivatin-img"]} src={captivatingImage} alt="eye in the hand"></Image>
          <h3 className={classes["captivatin-img-text"]}>
            The Most Captivating Image EVER Crafted, from <span>ImageSwift AI </span>
            Perspective.
          </h3>
        </div>
        <div className={classes.statistics}>
          <div className={classes.statistic}>
            <span>+651</span>
            <p>Creators</p>
          </div>
          <div className={classes.statistic}>
            <span>+935</span>
            <p>Creations</p>
          </div>
          <div className={classes.statistic}>
            <span>+875</span>
            <p>Reviews</p>
          </div>
          <div className={classes.statistic}>
            <span>+999</span>
            <p>Stars</p>
          </div>
        </div>
        <div className={classes["comment-by-ceo"]}>
          <h1>"We envisioned the magic of turning dreams into reality, of transforming the most fantastical visions into tangible works of art."</h1>
          <div className={classes["ceo-information"]}>
            <Image className={classes["ceo-profile-photo"]} src={demetreProfilePhoto} alt="demetre tetunashvili profile photo" />
            <div>
              <h3>Demetre Tetunashvili</h3>
              <h4>CEO of ImageSwift AI</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;
