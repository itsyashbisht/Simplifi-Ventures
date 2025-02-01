import HeroIMAGE from "../assets/Hero.png";
import SlantComponent from "../Layouts/SlantComponent";

const HeaderText = "Incubating innovative solutions for financial services";
const DescriptiveText =
  "We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry.";

function Hero() {
  return (
    <SlantComponent
      Image={HeroIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default Hero;
