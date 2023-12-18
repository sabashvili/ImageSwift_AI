'use client'
import classes from './AboutPage.module.css'
import Image from 'next/image'
import TeamMemberCard from '../Cards/TeamMemberCard'
import demetreTetunashviliProfilePhoto from '../../../public/Images/demetre_tetunashvili_profile_photo.jpg'
import shotaSabashviliProfilePhoto from '../../../public/Images/shota_sabashvili_profile-photo.jpg'
import tamunaUrotadzeProfilePhoto from '../../../public/Images/tamuna_urotadze_profile_photo.jpg'
import facebookLogo from '../../../public/Icons/facebook-logo.svg'
import instagramLogo from '../../../public/Icons/instagram-logo.svg'
import twitterLogo from '../../../public/Icons/twitter-logo.svg'
import telegramLogo from '../../../public/Icons/telegram-logo.svg'
import whatsappLogo from '../../../public/Icons/whatsapp-logo.svg'

const AboutPage = () => {
  const team: Array<object> = [
    {
      profilePicture: demetreTetunashviliProfilePhoto,
      fullName: 'Demetre Tetunashvili',
      position: 'Co-Founder',
    },
    {
      profilePicture: tamunaUrotadzeProfilePhoto,
      fullName: 'Tamuna Urotadze',
      position: 'Chief of Marketing',
    },
    {
      profilePicture: shotaSabashviliProfilePhoto,
      fullName: 'Shota Sabashvili',
      position: 'Full-Stack Developer',
    },
  ]

  const socialNetworks: Array<any> = [
    { logo: facebookLogo, href: 'https://www.facebook.com/' },
    { logo: instagramLogo, href: 'https://www.instagram.com/' },
    { logo: twitterLogo, href: 'https://twitter.com/' },
    { logo: telegramLogo, href: 'https://web.telegram.org/k/' },
    { logo: whatsappLogo, href: 'https://www.whatsapp.com/' },
  ]

  return (
    <section id="about">
      <div className="sectionContainer">
        <h1 className="main-header-section">Get to know our team</h1>
        <h2 className="secondary-header-section">Discover more about us</h2>
        <div className={classes['team-container']}>
          {team.map((team) => {
            return <TeamMemberCard key={Math.random()} teamMember={team} />
          })}
        </div>
      </div>
      <div className="sectionContainer">
        <h1 className="main-header-section">Follow us on social media</h1>
        <h2 className="secondary-header-section">
          fresh story for every channel
        </h2>
        <ul className={classes['social-networks']}>
          {socialNetworks.map((networks, index) => {
            return (
              <li key={index} className={classes['social-icon-flex-container']}>
                <a
                  className={classes['social-icon-container']}
                  href={`${networks.href}`}
                  target="_blank"
                >
                  <Image
                    className={classes['social-icon']}
                    src={networks.logo}
                    alt="profile picture"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default AboutPage
