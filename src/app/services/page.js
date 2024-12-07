import ServicesIntroduction from "../components/servicesComponents/servicesIntro";
import OurServices from "../components/servicesComponents/ourServices";
import WhyUs from "../components/servicesComponents/WhyUs";
import GetInTouch from "../components/servicesComponents/getInTouch";

export const metadata = {
  title: "Services",
  description: "Services page",
};

const Services = () =>{
  return (
      <div>
          <ServicesIntroduction />
          <OurServices />
          <WhyUs />
          <GetInTouch />
      </div>
  );
}
export default Services;