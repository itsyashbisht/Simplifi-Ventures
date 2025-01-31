export default function PartnerCard({ PartnerIMAGE, PartnerNAME, POSITION }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="h-28 w-28 mb-1.5 object-cover"
        src={PartnerIMAGE}
        alt={PartnerNAME}
      />
      <p className=" text-Blue font-bold text-lg">{PartnerNAME}</p>
      <p className="text-sm text-gray2">{POSITION}</p>
    </div>
  );
}
