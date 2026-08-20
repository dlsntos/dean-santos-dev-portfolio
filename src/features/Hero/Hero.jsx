import { heroData } from "./hero.data.js";
function Hero() {
  return (
    <section>
      <div></div>
      <div>
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
