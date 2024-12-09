import AboutUs from "./components/homeComponents/about-us";
import Facilities from "./components/homeComponents/facilities";
import OurCourses from "./components/homeComponents/courses";
import HomeFooter from "./components/homeComponents/footer";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <Facilities />
      <OurCourses />
      <HomeFooter />
    </div>
  );
};

export default Home;
