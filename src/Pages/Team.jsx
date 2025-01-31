// CUSTOM IMPORTS
import JoinUs from "../Components/JoinUs";
import Partner from "../Components/Partner";
import TeamHero from "../Components/TeamHero";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";

function Team() {
  return (
    <div className="min-h-screen">
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
