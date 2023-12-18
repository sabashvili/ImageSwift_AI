'use client'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="/">
        <h1 className={classes['footer-company-name']}>ImageSwift AI</h1>
      </a>
      <p className={classes['copyright']}>
        Copyright © 2023 by ImageSwift AI, Inc. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
