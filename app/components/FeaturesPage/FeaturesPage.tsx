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

function FeaturesPage() {
  return (
    <section>
      <div className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-first-line"]}`}>
        <div>
          <Image className={classes["generated-image"]} src={generateImage_1} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_2} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_3} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_4} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_5} alt="" />
        </div>
        <div>
          <Image className={classes["generated-image"]} src={generateImage_1} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_2} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_3} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_4} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_5} alt="" />
        </div>
      </div>
      <div className={`${classes["scrolling-images-container"]} ${classes.ImageBox} ${classes["scrolling-time-for-second-line"]}`}>
        <div>
          <Image className={classes["generated-image"]} src={generateImage_6} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_7} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_8} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_9} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_10} alt="" />
        </div>
        <div>
          <Image className={classes["generated-image"]} src={generateImage_6} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_7} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_8} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_9} alt="" />
          <Image className={classes["generated-image"]} src={generateImage_10} alt="" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;
