// CUSTOM IMPORTS
import News from "../Components/News";
import JoinUs from "../Components/JoinUs";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";
import ResourceHero from "../Components/ResourceHero";
import MobileNavigation from "../Layouts/MobileNavigation";

function Resources() {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <ResourceHero />
      <News />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default Resources;
