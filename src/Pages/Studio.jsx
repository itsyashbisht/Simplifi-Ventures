// CUSTOM IMPORTS
import Approach from "../Components/Approach";
import Company from "../Components/Company";
import ContactUs from "../Components/ContactUs";
import Innovations from "../Components/Innovations";
import JoinUs from "../Components/JoinUs";
import Learning from "../Components/Learning";
import StudioHero from "../Components/StudioHero";
import MobileFooter from "../Layouts/MobileFooter";

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
