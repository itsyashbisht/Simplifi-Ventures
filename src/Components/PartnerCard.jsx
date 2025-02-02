export default function PartnerCard({ PartnerIMAGE, PartnerNAME, POSITION }) {
  return (
    <div className="flex flex-col mt-2 md:mt-0 items-center justify-center">
      <img
        className="h-10 w-10 md:h-28 md:w-28 mb-1.5 object-cover"
        src={PartnerIMAGE}
        alt={PartnerNAME}
      />
      <p className=" text-Blue text-center font-semibold md:font-bold text-sm sm:text-base md:text-lg">
        {PartnerNAME}
      </p>
      <p className="md:text-sm text-[10px]  text-gray2">{POSITION}</p>
    </div>
  );
}
