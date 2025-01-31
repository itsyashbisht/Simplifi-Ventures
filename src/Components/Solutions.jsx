import SolutionsIMAGE from "../assets/Solutions.png";

function Solutions() {
  return (
    <section className="min-h-screen w-full flex justify-center">
      <div className="mt-12 w-[930px]">
        <p className="text-4xl font-semibold text-center text-gray1 mb-3">
          We spun out of Primera Capital in 2020
        </p>
        <p className="text-2xl text-center text-gray2">
          We run as an independent financial services venture studio. Today we
          have global partnerships with financial institutions to incubate new
          fintech innovations.
        </p>
        <div className="my-8">
          <img
            className="object-cover h-full w-full"
            src={SolutionsIMAGE}
            alt="Leading Digital Transformation Solutions"
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
