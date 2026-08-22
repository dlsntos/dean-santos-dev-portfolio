import { aboutData } from "./about.data";
import styles from "./About.module.css";
function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2>About</h2>
      <p>{aboutData.about}</p>
    </section>
  );
}
export default About;
