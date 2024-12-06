import { fetchCourses } from "@/app/lib/db";

export const metadata = {
  title: "Courses",
  description: "Courses page",
};
const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>UCAS Code</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.CourseTitle}</td>
              <td>{course.CourseType}</td>
              <td>{course.UcasCode}</td>
              <td>{course.CourseSummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
