// CUSTOM IMPORTS
import PartnerCard from "./PartnerCard";
import Parnter1Image from "../assets/Picture1.png";
import Parnter2Image from "../assets/Picture2.png";
import Parnter3Image from "../assets/Picture3.png";
import Parnter4Image from "../assets/Picture4.png";
import Parnter5Image from "../assets/Picture5.png";
import Parnter6Image from "../assets/Picture6.png";

const PARTNERS = [
  {
    NAME: "Abrar Hussian",
    IMAGE: Parnter2Image,
    POSITION: "Partner",
  },
  {
    NAME: "Sridhar Obilisetty",
    IMAGE: Parnter3Image,
    POSITION: "Partner",
  },
  {
    NAME: "David Hahn",
    IMAGE: Parnter4Image,
    POSITION: "Advisor",
  },
  {
    NAME: "Kuldip Thusu",
    IMAGE: Parnter5Image,
    POSITION: "Advisor",
  },
  {
    NAME: "Keith Kan",
    IMAGE: Parnter6Image,
    POSITION: "Associate",
  },
];

function Partner() {
  return (
    <section className="md:min-h-screen w-full">
      <div className="grid md:grid-rows-2 md:px-48 md:h-screen pb-5 sm:py-20 md:py-32 md:gap-y-20 sm:gap-y-8 gap-y-3">
        <div className="grid grid-rows-1 justify-self-center lg:grid-rows-1 md:grid-rows-1 md:grid-cols-[1fr_4fr] md:row-start-1 row-start-2 items-center">
          <div className="hidden md:block lg:block">
            <PartnerCard
              PartnerIMAGE={Parnter1Image}
              POSITION={"Partner"}
              PartnerNAME={"Ori Sasson"}
            />
          </div>
          <p className="text-base px-3 py-2 md:px-0 text-center md:text-left sm:text-xl md:col-start-2 row-start-2 md:row-start-1 md:text-2xl text-gray1 font-semibold">
            We love ideas. We spend our time thinking about problems and how we
            can solve them, so we’d love to hear from you. If you’re interested
            in fintech innovation and want to talk about it with us, get in
            touch!
          </p>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2">
          {PARTNERS.map((PARTNER) => (
            <PartnerCard
              PartnerIMAGE={PARTNER.IMAGE}
              PartnerNAME={PARTNER.NAME}
              POSITION={PARTNER.POSITION}
              key={PARTNER.NAME}
            />
          ))}
          <div className="md:hidden lg:hidden">
            <PartnerCard
              PartnerIMAGE={Parnter1Image}
              POSITION={"Partner"}
              PartnerNAME={"Ori Sasson"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
