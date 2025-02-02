// CUSTOM IMPORTS
import SlantComponent from "../Layouts/SlantComponent";
import HeroIMAGE from "../assets/Studio.png";

const HeaderText =
  "At Simplifi Ventures we believe in delivering value for our entrepreneurs and financial partners";

function StudioHero() {
  return (
    <SlantComponent
      HeaderText={HeaderText}
      Image={HeroIMAGE}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default StudioHero;
