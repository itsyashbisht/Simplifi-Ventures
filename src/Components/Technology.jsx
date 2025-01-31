import RightSlantComponent from "../Layouts/RightSlantComponent";
import TechnologyIMAGE from "../assets/Technology.png";

const HeaderText = "Technology is in our blood";
const DescriptiveText =
  "We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.";

function Technology() {
  return (
    <RightSlantComponent
      Image={TechnologyIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
    />
  );
}

export default Technology;
