"use client";
import classes from "./PricingCard.module.css";
import checkpoint from "../../../public/Icons/checkpoint_icon.svg";
import Image from "next/image";

const PricingCard = (props: any) => {
  return (
    <div
      className={`${classes["pricing-card-container"]} ${props.typePlan.plan === "standard plan" ? classes["standard-plan"] : ""} ${
        props.typePlan.plan === "pro plan" ? classes["pro-plan"] : ""
      }`}
    >
      <h1 className={classes["pricing-card-plan"]}>{props.typePlan.plan}</h1>
      <h1 className={classes["pricing-card-payment"]}>
        <span>${props.typePlan.price} </span> / month
      </h1>
      <ul className={classes["list-of-conditions"]}>
        {props.typePlan.listOfConditions.map((conditions: string) => {
          return (
            <li key={Math.random()}>
              <Image className={classes["checkpoint-icon"]} src={checkpoint} alt="checkpoint icon" />
              {conditions}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
