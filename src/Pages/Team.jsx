// CUSTOM IMPORTS
import JoinUs from "../Components/JoinUs";
import Partner from "../Components/Partner";
import TeamHero from "../Components/TeamHero";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";

function Team() {
  return (
    <div>
      <Navigation />
      <TeamHero />
      <Partner />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

// EXPORTS
export default Team;
