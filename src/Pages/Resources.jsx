// CUSTOM IMPORTS
import News from "../Components/News";
import JoinUs from "../Components/JoinUs";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";
import ResourceHero from "../Components/ResourceHero";
import MobileNavigation from "../Layouts/MobileNavigation";
import MobileFooter from "../Layouts/MobileFooter";

function Resources() {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <ResourceHero />
      <News />
      <JoinUs />
      <ContactUs />
      <MobileFooter />
    </div>
  );
}

export default Resources;
