// CUSTOM IMPORTS
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
    <section className="grid md:grid-rows-1 grid-rows-[300px_245px] grid-cols-1 md:min-h-screen w-full md:grid-cols-2">
      {/* IMAGE SECTION */}
      <div
        className={`relative w-full md:min-h-screen sm:row-start-1 ${
          ImageAlignment === "LEFT" ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div
          className={` bg-no-repeat md:bg-cover bg-cover bg-center  absolute w-full h-full inset-0  ${
            ImageAlignment === "LEFT" ? "right-slant" : "left-slant"
          }`}
          style={{ backgroundImage: `URL(${Image})` }}
        ></div>
      </div>

      {/* TEXT CONTENT */}
      <div
        className={`flex flex-col justify-center sm:items-center sm:row-start-2 px-4 sm:px-8 md:px-8 lg:px-20 ${
          ImageAlignment === "LEFT"
            ? "md:col-start-2 md:row-start-1"
            : "md:col-start-1 md:row-start-1"
        }`}
      >
        <p
          className={`${STYLE_HEADERTEXT} text-center sm:text-center ${
            HeaderTextCenter
              ? "md:text-center lg:text-center"
              : "md:text-left lg:text-left"
          }`}
        >
          {HeaderText}
        </p>
        <p className={STYLE_DISCRIPTIVETEXT}>{DescriptiveText}</p>
        {BottomText && (
          <p className="text-center md:text-left max-w-[500px] md:text-lg lg:text-2xl text-gray2 mt-4">
            {BottomText}
          </p>
        )}
      </div>
    </section>
  );
}

export default SlantComponent;
