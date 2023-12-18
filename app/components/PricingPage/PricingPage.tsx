'use client'
import classes from './PricingPage.module.css'
import PricingCard from '../Cards/PricingCard'

function PricingPage() {
  const basicPlan: any = {
    plan: 'basic plan',
    price: '12',
    listOfConditions: [
      '15h Fast generations',
      'Access to member gallery',
      'General commercial terms',
    ],
  }

  const standardPlan: any = {
    plan: 'standard plan',
    price: '30',
    listOfConditions: [
      '15h Fast generations',
      'Unlimited Relaxed generations',
      'General commercial terms',
      'Access to member gallery',
      '3 concurrent fast jobs',
    ],
  }

  const proPlan: any = {
    plan: 'pro plan',
    price: '60',
    listOfConditions: [
      '15h Fast generations',
      'Access to member gallery',
      '3 concurrent fast jobs',
    ],
  }

  return (
    <section id="pricing">
      <div className="sectionContainer">
        <h1 className="main-header-section">Subscription plans and pricing</h1>
        <h2 className="secondary-header-section">
          Choose the plan that works for you
        </h2>
        <div className={classes['billing-term']}>
          <p className={classes['billing-term-yearly']}>Yearly billing</p>
          <p className={classes['billing-term-monthly']}>monthly billing</p>
        </div>
        <div className={classes['pricing-plan-variations-container']}>
          <PricingCard typePlan={basicPlan} />
          <PricingCard typePlan={standardPlan} />
          <PricingCard typePlan={proPlan} />
        </div>
      </div>
    </section>
  )
}

export default PricingPage
