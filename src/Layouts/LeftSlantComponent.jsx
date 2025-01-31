import { STYLE_DISCRIPTIVETEXT, STYLE_HEADERTEXT } from "../Styles";

function LeftSlantComponent({ Image, DescriptiveText, HeaderText }) {
  return (
    <section className="grid grid-cols-1 min-h-screen w-full md:grid-cols-2">
      {/* IMAGE SECTION */}
      <div className="relative w-full min-h-screen">
        <img
          src={Image}
          alt=""
          className="absolute w-full h-full inset-0 object-cover left-slant"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col justify-center items-center px-2 sm:px-8 md:px-16 lg:px-20 ">
        <p className={STYLE_HEADERTEXT}>{HeaderText}</p>
        <p className={STYLE_DISCRIPTIVETEXT}>{DescriptiveText}</p>
      </div>
    </section>
  );
}

// EXPORTS
export default LeftSlantComponent;
