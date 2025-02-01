function ApproachCard({ HeadText, IMAGE, Description }) {
  return (
    <div className="w-56 flex flex-col gap-y-2 items-center justify-self-center">
      <img src={IMAGE} alt={HeadText} />
      <p className="text-2xl font-bold text-center">{HeadText}</p>
      <p className="text-center">{Description}</p>
    </div>
  );
}

export default ApproachCard;
