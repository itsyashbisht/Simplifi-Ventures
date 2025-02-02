// CUSTOM IMPORTS
import SlantComponent from "../Layouts/SlantComponent";
import TechnologyIMAGE from "../assets/Technology.png";

const HeaderText = "Technology is in our blood";
const DescriptiveText =
  "We push our entrepreneurs to develop technologies that drive measurable value for our financial leaders. Our team of engineers work side by side with our portfolio companies to solve key problems so that they can focus on operating.";

function Technology() {
  return (
    <SlantComponent
      Image={TechnologyIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      HeaderTextCenter={false}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default Technology;
