// CUSTOM IMPORTS
import JoinUs from "../Components/JoinUs";
import Company from "../Components/Company";
import Approach from "../Components/Approach";
import Learning from "../Components/Learning";
import ContactUs from "../Components/ContactUs";
import StudioHero from "../Components/StudioHero";
import MobileFooter from "../Layouts/MobileFooter";
import Innovations from "../Components/Innovations";
import MobileNavigation from "../Layouts/MobileNavigation";
import Navigation from "../Layouts/Navigation";

function Studio() {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <StudioHero />
      <Innovations />
      <Company />
      <Learning />
      <Approach />
      <JoinUs />
      <ContactUs />
      <MobileFooter />
    </div>
  );
}

export default Studio;
