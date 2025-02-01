import SlantComponent from "../Layouts/SlantComponent";
import JoinUsIMAGE from "../assets/JoinUs.png";

const HeaderText = "Join Us";
const DescriptiveText =
  "We have monthly rountable discussions with industry experts exploring fintech innovation in the industry and looking for potential growth areas.";

function JoinUs() {
  return (
    <SlantComponent
      Image={JoinUsIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      HeaderTextCenter={true}
      ImageAlignment={"LEFT"}
    />
  );
}

export default JoinUs;
