'use client'
import classes from './TeamMemberCard.module.css'
import Image from 'next/image'

const TeamMemberCard = ({ teamMember }: any) => {
  return (
    <div className={classes['team-member-container']}>
      <Image
        className={classes['team-member-profile-picture']}
        src={teamMember.profilePicture}
        alt="profile picture"
      />
      <h1 className={classes['team-member-fullname']}>{teamMember.fullName}</h1>
      <h2 className={classes['team-member-position']}>{teamMember.position}</h2>
    </div>
  )
}

export default TeamMemberCard
