import ResourcesHeader from "../components/learningResourcesComponents/resourcesHeader";
import AccessRules from "../components/learningResourcesComponents/accessRules";
import UseOfFacilitiesRules from "../components/learningResourcesComponents/useOfFacilitiesRules";

export const metadata = {
  title: "Learning Resources",
  description: "Learning Resources page",
};

const LearningResources = () => {
  return (
    <div>
      <ResourcesHeader />
      <AccessRules />
      <UseOfFacilitiesRules />
    </div>
  );
};
export default LearningResources;