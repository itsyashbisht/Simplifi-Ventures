// FUNCTION TO SHOW WORDS UPTO CERTAIN LIMIT
const truncateWORDS = (Text, wordsLimit) => {
  let words = Text.split(" ");
  if (words.length > wordsLimit) {
    return words.slice(0, wordsLimit).join(" ") + "...";
  }
  return Text;
};

function NewsCard({
  IMAGE,
  NewsDate,
  NewsHeading,
  NewsText,
  NewsTextWordLimit,
  NewsHeadingWordLimit,
}) {
  return (
    <div className="md:w-80 w-[270px] h-[500px] bg-white">
      <img src={IMAGE} className="w-full mb-4" alt={NewsHeading} />
      <div className="px-4 pb-3">
        <p className="mb-1 text-gray1 text-lg">
          {truncateWORDS(NewsHeading, NewsHeadingWordLimit)}
        </p>
        <div className="flex justify-between mb-5">
          <p className="text-[10px] font-semibold">by simplifiventures</p>
          <p className="font-semibold text-[10px]">{NewsDate}</p>
        </div>
        <p className="text-sm text-gray2">
          {truncateWORDS(NewsText, NewsTextWordLimit)}
        </p>

        <div className="flex justify-end mt-2">
          <a href="#" className="uppercase font-bold text-[12px] text-link">
            Read more &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
