import { aboutData } from "./about.data";
function About() {
  return (
    <section>
      <h2>About</h2>
      <p>{aboutData.about}</p>
    </section>
  );
}
export default About;
