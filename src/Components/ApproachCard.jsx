function ApproachCard({ HeadText, IMAGE, Description }) {
  return (
    <div className="md:w-56 flex flex-col mb-4 md:mb-0 md:gap-y-2 items-center justify-self-center">
      <img src={IMAGE} className="md:px-0 md:py-0 px-4 py-4" alt={HeadText} />
      <p className="text-xl md:text-2xl font-semibold md:font-bold text-center">
        {HeadText}
      </p>
      <p className="text-center text-sm md:text-base ">{Description}</p>
    </div>
  );
}

export default ApproachCard;
