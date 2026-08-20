import { heroData } from "./hero.data.js";
import styles from "./Hero.module.css";
import profileImage from "../../assets/profile.jpg";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroProfile}>
        <div>
          <img className={styles.profileImage} src={profileImage} alt="" />
        </div>
      </div>
      <div className={styles.heroContent}>
        <h1>{heroData.name}</h1>
        <h2>{heroData.title}</h2>
        <p>{heroData.description.descriptionOne}</p>
        <p>{heroData.description.descriptionTwo}</p>
        <p>{heroData.description.descriptionThree}</p>
      </div>
    </section>
  );
}
export default Hero;
