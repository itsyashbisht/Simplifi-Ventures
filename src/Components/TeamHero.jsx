// CUTSOM IMPORTS
import SlantComponent from "../Layouts/SlantComponent";
import TeamIMAGE from "../assets/Team.webp";

const HeaderText = "We build meaningful companies";
const DescriptiveText =
  "Meet the Simplifi team.We are operators, engineers, product managers and researchers";

function TeamHero() {
  return (
    <SlantComponent
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      Image={TeamIMAGE}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default TeamHero;
