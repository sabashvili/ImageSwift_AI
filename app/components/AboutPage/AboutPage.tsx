"use client";
import classes from "./AboutPage.module.css";
import TeamMemberCard from "../Cards/TeamMemberCard";
import demetreTetunashviliProfilePhoto from "../../../public/Images/demetre_tetunashvili_profile_photo.jpg";
import shotaSabashviliProfilePhoto from "../../../public/Images/shota_sabashvili_profile-photo.jpg";
import tamunaUrotadzeProfilePhoto from "../../../public/Images/tamuna_urotadze_profile_photo.jpg";

const AboutPage = () => {
  const team: Array<object> = [
    {
      profilePicture: demetreTetunashviliProfilePhoto,
      fullName: "Demetre Tetunashvili",
      position: "Co-Founder",
    },
    {
      profilePicture: tamunaUrotadzeProfilePhoto,
      fullName: "Tamuna Urotadze",
      position: "Chief of Marketing",
    },
    {
      profilePicture: shotaSabashviliProfilePhoto,
      fullName: "Shota Sabashvili",
      position: "Full-Stack Developer",
    },
  ];

  return (
    <section>
      <div className="sectionContainer">
        <h1 className="main-header-section">Get to know our team</h1>
        <h2 className="secondary-header-section">Discover more about us</h2>
        <div className={classes["team-container"]}>
          {team.map((team) => {
            return <TeamMemberCard teamMember={team} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
