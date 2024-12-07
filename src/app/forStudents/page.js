import Introduction from "../components/forStudentsComponents/introduction";
import OurFacilities from "../components/forStudentsComponents/ourFacilities";
import Invitation from "../components/forStudentsComponents/invitation";

export const metadata = {
  title: "For Students",
  description: "For Students page",
};

const ForStudents = () =>{
  return (
    <div>
      <Introduction />
      <OurFacilities />
      <Invitation />
    </div>
  );
}
export default ForStudents;