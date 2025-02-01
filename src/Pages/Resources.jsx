import News from "../Components/News";
import JoinUs from "../Components/JoinUs";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";
import ResourceHero from "../Components/ResourceHero";

function Resources() {
  return (
    <div>
      <Navigation />
      <ResourceHero />
      <News />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default Resources;
