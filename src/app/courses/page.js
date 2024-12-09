import { fetchCourses } from "@/app/lib/db";
import CoursesHeader from "../components/courses/coursesHeader";
import CoursesTable from "../components/courses/coursesTable";

export const metadata = {
  title: "Courses",
  description: "Courses page",
};

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <>
      <CoursesHeader />
      <CoursesTable courses={courses} />
    </>
  );
};

export default Courses;
