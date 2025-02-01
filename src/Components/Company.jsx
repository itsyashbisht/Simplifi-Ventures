import SlantComponent from "../Layouts/SlantComponent";
import CompanyIMAGE from "../assets/Love.png";

const HeaderText = "Tough Love";
const DescriptiveText =
  "We know that starting a company is not easy. We help entrepreneurs manage a start up by advising them on the operational challenges of building a new company.";

function Company() {
  return (
    <SlantComponent
      Image={CompanyIMAGE}
      ImageAlignment={"RIGHT"}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
    />
  );
}

export default Company;
