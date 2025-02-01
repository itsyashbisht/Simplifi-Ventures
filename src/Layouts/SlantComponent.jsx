import { STYLE_DISCRIPTIVETEXT, STYLE_HEADERTEXT } from "../Styles";

function SlantComponent({
  HeaderText,
  DescriptiveText,
  Image,
  BottomText,
  HeaderTextCenter,
  ImageAlignment,
}) {
  return (
    <section className="grid grid-rows-1 grid-cols-1 min-h-screen w-full md:grid-cols-2">
      {/* IMAGE SECTION */}
      <div
        className={`relative w-full min-h-screen ${
          ImageAlignment === "LEFT" ? "col-start-1" : "col-start-2"
        }`}
      >
        <img
          src={Image}
          alt=""
          className={`absolute w-full h-full inset-0 object-cover ${
            ImageAlignment === "LEFT" ? "right-slant" : "left-slant"
          }`}
        />
      </div>

      {/* TEXT CONTENT */}
      <div
        className={`flex flex-col justify-center  px-2 sm:px-8 md:px-16 lg:px-20 ${
          ImageAlignment === "LEFT"
            ? "col-start-2 row-start-1"
            : "col-start-1 row-start-1"
        }`}
      >
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
    </section>
  );
}

export default SlantComponent;
