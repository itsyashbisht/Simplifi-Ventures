import LeftSlantComponent from "../Layouts/LeftSlantComponent";
import AboutIMAGE from "../assets/About.png";

const HeaderText =
  "Simplifi Ventures builds and invests in companies that help drive the next phase of new product creation and customer experience.";

const DescriptiveText =
  "To date, we have worked with over 80 fintech start ups and financial institutions to build neo-banks around the world.";

function About() {
  return (
    <LeftSlantComponent
      HeaderText={HeaderText}
      Image={AboutIMAGE}
      DescriptiveText={DescriptiveText}
    />
  );
}

export default About;
