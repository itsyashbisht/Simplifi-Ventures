import { STYLE_DISCRIPTIVETEXT, STYLE_HEADERTEXT } from "../Styles";

function RightSlantComponent({
  Image,
  DescriptiveText,
  HeaderText,
  BottomText,
  HeaderTextCenter,
}) {
  return (
    <section className="grid grid-cols-1 min-h-screen md:grid-cols-2">
      {/* TEXT CONTENT */}
      <div className="flex flex-col justify-center px-2 sm:px-8 md:px-12 lg:px-20">
        <p
          className={`${STYLE_HEADERTEXT} ${HeaderTextCenter && "text-center"}`}
        >
          {HeaderText}
        </p>
        <p className={STYLE_DISCRIPTIVETEXT}>{DescriptiveText}</p>
        {BottomText && (
          <p className="text-2xl max-w-[500px] text-gray2 mt-4">{BottomText}</p>
        )}
      </div>

      {/* IMAGE SECTION */}
      <div className="relative w-full h-full">
        <img
          src={Image}
          alt=""
          className="absolute w-full h-full inset-0 object-cover right-slant"
        />
      </div>
    </section>
  );
}

export default RightSlantComponent;
