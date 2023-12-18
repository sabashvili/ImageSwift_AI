'use client'
import classes from './PricingCard.module.css'
import checkpoint from '../../../public/Icons/checkpoint_icon.svg'
import Image from 'next/image'

const PricingCard = ({ typePlan }: any) => {
  const pricingCardClass = `${classes['pricing-card-container']} ${
    typePlan.plan === 'standard plan' ? classes['standard-plan'] : ''
  } ${typePlan.plan === 'pro plan' ? classes['pro-plan'] : ''}`

  return (
    <div className={pricingCardClass}>
      <h1 className={classes['pricing-card-plan']}>{typePlan.plan}</h1>
      <h1 className={classes['pricing-card-payment']}>
        <span>${typePlan.price} </span> / month
      </h1>
      <ul className={classes['list-of-conditions']}>
        {typePlan.listOfConditions.map((conditions: string) => {
          return (
            <li key={Math.random()}>
              <Image
                className={classes['checkpoint-icon']}
                src={checkpoint}
                alt="checkpoint icon"
              />
              {conditions}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PricingCard
