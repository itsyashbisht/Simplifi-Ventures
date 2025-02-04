// CUSTOM IMPORTS
import { STYLE_HEADERTEXT } from "../Styles";

import OurProcess from "./OurProcess";
import ApproachCard from "./ApproachCard";
import AdvisorIMAGE from "../assets/Advisor.webp";
import CapitalIMAGE from "../assets/Capital.webp";
import AcceleratorIMAGE from "../assets/Accelerator.webp";

const CARD_DETAILS = [
  {
    HEADTEXT: "Accelerator",
    IMAGE: AcceleratorIMAGE,
    DESCRIPTION:
      "We accelerate the development of fintech companies by partnering with fintech leaders. We strive to help entrepreneurs design and build technologies that are relevant and develop a solid strategy for building.",
  },
  {
    HEADTEXT: "Advisor",
    IMAGE: AdvisorIMAGE,
    DESCRIPTION:
      "We conduct market research and host symposia where entrepreneurs and key financial leaders share ideas. We match advisors to budding firms to provide operational guidance.",
  },
  {
    HEADTEXT: "Capital",
    IMAGE: CapitalIMAGE,
    DESCRIPTION:
      "We invest in seed and early rounds based on relationships we have cultivated with entrepreneurs and young companies.",
  },
];

function Approach() {
  return (
    <section className="md:min-h-screen md:px-32 mt-4 md:pt-16">
      <p
        className={`mb-5 md:ms-10 text-center md:text-left md:mb-12 ${STYLE_HEADERTEXT}`}
      >
        Our Approach
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 grid-rows-1 mx-10">
        {CARD_DETAILS.map((CARD) => (
          <ApproachCard
            HeadText={CARD.HEADTEXT}
            Description={CARD.DESCRIPTION}
            IMAGE={CARD.IMAGE}
            key={CARD.HEADTEXT}
          />
        ))}
      </div>
      <OurProcess />
    </section>
  );
}

export default Approach;
