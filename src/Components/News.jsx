import { STYLE_HEADERTEXT } from "../Styles";
import NewsIMAGE1 from "../assets/News1.png";
import NewsIMAGE2 from "../assets/News2.png";
import NewsIMAGE3 from "../assets/News3.png";
import NewsCard from "./NewsCard";

const NEWS_ARR = [
  {
    IMAGE: NewsIMAGE1,
    NEWSTEXT:
      "We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Nov 2020",
  },
  {
    IMAGE: NewsIMAGE2,
    NEWSTEXT:
      "We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...",
    NEWSHEADING: "News Incubator Launched in Viet...",
    NEWSDATE: "11th Jan 2020",
  },
  {
    IMAGE: NewsIMAGE3,
    NEWSTEXT:
      "We have launched our 2020 Fintech Field Survey to understand the key challenges facing financial institutions today as they think about their digital transformation strategy. Our focus this year is on community...",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Jan 2020",
  },
  {
    IMAGE: NewsIMAGE1,
    NEWSTEXT:
      "We have partnered with VP Bank in Vietnam to establish its VPBank StartUp incubator site that promotes fintech innovations. This incubator hosts hackathons and symposia for technology innovators and financial institutions to come together...",
    NEWSHEADING: "Field Survey",
    NEWSDATE: "11th Jan 2020",
  },
];

function News() {
  return (
    <section className="min-h-screen px-24 py-10 bg-[#F3F3F3]">
      <p className={STYLE_HEADERTEXT}>News</p>
      <div className="grid grid-rows-1 gap-x-6 grid-cols-4">
        {NEWS_ARR.map((NEWS, INDEX) => (
          <NewsCard
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
