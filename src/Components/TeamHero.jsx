import RightSlantComponent from "../Layouts/RightSlantComponent";
import TeamIMAGE from "../assets/Team.png";

const HeaderText = "We build meaningful companies";
const DescriptiveText =
  "Meet the Simplifi team.We are operators, engineers, product managers and researchers";

function TeamHero() {
  return (
    <RightSlantComponent
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      Image={TeamIMAGE}
    />
  );
}

export default TeamHero;
