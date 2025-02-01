import SlantComponent from "../Layouts/SlantComponent";
import ContactUsIMAGE from "../assets/ContactUs.png";

const HeaderText = "Contact";
const BottomText = "Learnmore@simplifiventures.com";
const DescriptiveText =
  "Located in the heart of Silicon Valley, we would love to hear from you. Please send us a message using our Contact Us Form or drop us an email at: ";

function ContactUs() {
  return (
    <SlantComponent
      Image={ContactUsIMAGE}
      HeaderText={HeaderText}
      DescriptiveText={DescriptiveText}
      BottomText={BottomText}
      HeaderTextCenter={true}
      ImageAlignment={"RIGHT"}
    />
  );
}

export default ContactUs;
