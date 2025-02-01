// CUSTOM IMPORTS
import { STYLE_HEADERTEXT } from "../Styles";
import ProcessIMAGE from "../assets/Vector.png";

function OurProcess() {
  return (
    <section className="min-h-screen  py-16">
      <p className={`ms-10 mb-14 ${STYLE_HEADERTEXT}`}>Our Process</p>
      <div className="flex justify-center">
        <img
          src={ProcessIMAGE}
          className="object-cover max-w-[1000px]"
          alt=""
        />
      </div>
    </section>
  );
}

export default OurProcess;
