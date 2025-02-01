import SlantComponent from "../Layouts/SlantComponent";
import LearningIMAGE from "../assets/Learning.png";

const HeaderText = "Leap Frog Learning";
const DescriptiveText =
  "Rather than reinvent the wheel, we seek technology accelerators that enable our entrepreneurs and financial leaders to transform financial services better, cheaper and faster than they can do on their own.";

function Learning() {
  return (
    <SlantComponent
      Image={LearningIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      ImageAlignment={"LEFT"}
    />
  );
}

export default Learning;
