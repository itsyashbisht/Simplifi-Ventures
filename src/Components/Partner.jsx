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
    <section className="min-h-screen w-full">
      <div className="grid grid-rows-2 px-48 h-screen py-48 gap-y-20">
        <div className="grid grid-cols-[1fr_4fr] items-center">
          <PartnerCard
            PartnerIMAGE={Parnter1Image}
            POSITION={"Partner"}
            PartnerNAME={"Ori Sasson"}
          />
          <p className="text-2xl text-gray1 font-semibold">
            We love ideas. We spend our time thinking about problems and how we
            can solve them, so we’d love to hear from you. If you’re interested
            in fintech innovation and want to talk about it with us, get in
            touch!
          </p>
        </div>
        <div className="grid grid-cols-5">
          {PARTNERS.map((PARTNER) => (
            <PartnerCard
              PartnerIMAGE={PARTNER.IMAGE}
              PartnerNAME={PARTNER.NAME}
              POSITION={PARTNER.POSITION}
              key={PARTNER.NAME}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partner;
