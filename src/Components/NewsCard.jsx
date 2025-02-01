function NewsCard({ IMAGE, NewsDate, NewsHeading, NewsText }) {
  return (
    <div className="max-w-80 bg-white">
      <img src={IMAGE} className="w-full mb-4" alt="" />
      <div className="px-4 pb-3">
        <p className="mb-1 text-gray1 text-lg">{NewsHeading}</p>
        <div className="flex justify-between mb-5">
          <p className="text-[10px] font-semibold">by simplifiventures</p>
          <p className="font-semibold text-[10px]">{NewsDate}</p>
        </div>

        <p className="text-sm text-gray2">{NewsText}</p>
        <div className="flex justify-end mt-2">
          <a href="" className="uppercase font-bold text-[12px] text-link ">
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
