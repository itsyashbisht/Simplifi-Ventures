// CUSTOM IMPORTS
import { STYLE_HEADERTEXT } from "../Styles";
import ProcessIMAGE from "../assets/Vector.png";

function OurProcess() {
  return (
    <section className="md:min-h-screen py-10 md:py-16">
      <p className={`mb-5 md:ms-10 md:mb-14 text-center ${STYLE_HEADERTEXT}`}>
        Our Process
      </p>
      <div className="flex justify-center">
        <img
          src={ProcessIMAGE}
          className="object-cover px-2.5 min-w-[310px]  md:max-w-[1000px]"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurProcess;
