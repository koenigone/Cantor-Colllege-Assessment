import Introduction from "../components/forStudentsComponents/introduction";
import OurFacilities from "../components/forStudentsComponents/ourFacilities";

export const metadata = {
  title: "For Students",
  description: "For Students page",
};

const ForStudents = () =>{
  return (
    <div>
      <Introduction />
      <OurFacilities />
    </div>
  );
}
export default ForStudents;