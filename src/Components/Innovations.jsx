// CUSTOM IMPORTS
import SlantComponent from "../Layouts/SlantComponent";
import AboutIMAGE from "../assets/About.webp";

const HeaderText = "Grounded Innovations";
const DescriptiveText =
  "We want to build innovations that are grounded in the realities that financial institutions face by providing market research from practitioners (not just pundits)";

function Innovations() {
  return (
    <SlantComponent
      Image={AboutIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      ImageAlignment={"LEFT"}
    />
  );
}

export default Innovations;
