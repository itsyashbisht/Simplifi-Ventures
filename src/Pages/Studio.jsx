// CUSTOM IMPORTS
import JoinUs from "../Components/JoinUs";
import Company from "../Components/Company";
import Approach from "../Components/Approach";
import Learning from "../Components/Learning";
import ContactUs from "../Components/ContactUs";
import StudioHero from "../Components/StudioHero";
import Innovations from "../Components/Innovations";
import Navigation from "../Layouts/Navigation";

function Studio() {
  return (
    <div>
      <Navigation />
      <StudioHero />
      <Innovations />
      <Company />
      <Learning />
      <Approach />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default Studio;
