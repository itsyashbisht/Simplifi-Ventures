// CUSTOM IMPORTS
import NewsIMAGE1 from "../assets/News1.webp";
import NewsIMAGE2 from "../assets/News2.webp";
import NewsIMAGE3 from "../assets/News3.webp";
import NewsCard from "./NewsCard";

const NEWS_ARR = [
  {
    IMAGE: NewsIMAGE1,
    NEWSTEXT:
      "We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Nov 2020",
  },
  {
    IMAGE: NewsIMAGE2,
    NEWSTEXT:
      "We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...",
    NEWSHEADING: "News Incubator Launched in Vietnam",
    NEWSDATE: "11th Jan 2020",
  },
  {
    IMAGE: NewsIMAGE3,
    NEWSTEXT:
      "We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Jan 2020",
  },
  {
    IMAGE: NewsIMAGE1,
    NEWSTEXT:
      "We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together",
    NEWSHEADING: "News Incubator Launched in Vietnam",
    NEWSDATE: "11th Jan 2020",
  },
  {
    IMAGE: NewsIMAGE3,
    NEWSTEXT:
      "We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Jan 2020",
  },
];

function News() {
  return (
    <section className="md:min-h-screen ps-5 md:ps-32 py-6 md:py-10 bg-[#F3F3F3]">
      <p
        className={`mb-5 md:mb-12 font-semibold text-2xl text-center md:text-left md:text-2xl lg:text-4xl lg:mb-6 text-gray1`}
      >
        News
      </p>
      <div className="grid  grid-rows-1 overflow-x-scroll gap-x-3 md:gap-x-8 grid-flow-col">
        {NEWS_ARR.map((NEWS, INDEX) => (
          <NewsCard
            NewsHeadingWordLimit={3}
            NewsTextWordLimit={30}
            NewsHeading={NEWS.NEWSHEADING}
            NewsDate={NEWS.NEWSDATE}
            NewsText={NEWS.NEWSTEXT}
            IMAGE={NEWS.IMAGE}
            key={INDEX}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
