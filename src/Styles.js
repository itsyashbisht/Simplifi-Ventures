const STYLE_HEADERTEXT =
  "font-semibold text-xl  md:text-2xl lg:text-4xl md:mb-3 lg:mb-6 text-gray1 max-w-[500px] ";

const STYLE_DISCRIPTIVETEXT =
  "justify-self-center  text-center md:text-left  md:text-lg lg:text-2xl max-w-[500px] text-gray2";

// ISACTIVE PROP OF REACT-ROUTER-DOM TO STYLE ACTIVE STATE IN NAVIGATION
const STYLE_NAVLINKS = ({ isActive }) =>
  isActive
    ? "text-[#3c73ad] text-sm font-semibold"
    : "text-sm text-Blue2 hover:text-[#3c73ad] hover:underline font-semibold";

const STYLE_MOBILENAV_LINKS = ({ isActive }) =>
  isActive
    ? "text-[#3c73ad] text-4xl font-semibold"
    : "text-gray1 text-4xl hover:text-[#3c73ad] hover:underline font-semibold";

export {
  STYLE_DISCRIPTIVETEXT,
  STYLE_HEADERTEXT,
  STYLE_NAVLINKS,
  STYLE_MOBILENAV_LINKS,
};
