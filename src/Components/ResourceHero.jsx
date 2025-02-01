import SlantComponent from "../Layouts/SlantComponent";
import ResourcesIMAGE from "../assets/Resources.png";

const HeaderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet feugiat eros,  accumsan e";

function ResourceHero() {
  return (
    <SlantComponent
      HeaderText={HeaderText}
      Image={ResourcesIMAGE}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default ResourceHero;
