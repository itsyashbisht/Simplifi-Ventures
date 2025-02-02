// CUSTOM IMPORTS
import Hero from "../Components/Hero";
import About from "../Components/About";
import JoinUs from "../Components/JoinUs";
import Navigation from "../Layouts/Navigation";
import ContactUs from "../Components/ContactUs";
import Solutions from "../Components/Solutions";
import Technology from "../Components/Technology";
import MobileNavigation from "../Layouts/MobileNavigation";
import MobileFooter from "../Layouts/MobileFooter";

function Home() {
  return (
    <div className="min-w-full relative">
      <MobileNavigation />
      <Navigation />
      <Hero />
      <About />
      <Technology />
      <Solutions />
      <JoinUs />
      <ContactUs />
      <MobileFooter />
    </div>
  );
}

export default Home;
