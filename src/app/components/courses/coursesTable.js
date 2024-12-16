"use client";
import "./courses.css";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

/* STRUCTURE
- useState to open course children
- toggle child menu - make sure to close the previously opened menu
- initialize table
- table head content
- table body content
  - React.Fragment to contain each courses key without using eny of the DOM elements
  - all courses from the database
    - course children
*/
const CoursesTable = ({ courses }) => {
  const [courseChildOpen, setCourseChildOpen] = useState(false);

  const toggleCourseChildMenu = (childKey) => {
    // keep only one child open at the time - opened? close the previous
    setCourseChildOpen((previousKey) =>
      previousKey === childKey ? false : childKey
    );
  };

  return (
    <table className="courses-table" id="courses">
      <thead className="courses-table-header">
        <tr>
          <th>Title</th>
          <th>Year of entry</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody className="courses-table-body">
        {courses.map((course, index) => (
          <React.Fragment key={index}>
            <tr
              className="courses-table-row"
              onClick={() => toggleCourseChildMenu(course.CourseTitle)}
            >
              <td>{course.CourseTitle}</td>
              <td>{course.YearOfEntry}</td>
              <td className="row-dropdown">
                <span>
                  <IoIosArrowDown />
                </span>
              </td>
            </tr>

            {courseChildOpen === course.CourseTitle && (
              <tr className="courses-table-child-row">
                <td colSpan="5">
                  <div>
                    <strong>Summary:</strong> {course.CourseSummary}
                  </div>
                  <br />
                  <div>
                    <strong>Course type:</strong> {course.CourseType}
                  </div>
                  <br />
                  <div>
                    <strong>Study length:</strong> {course.StudyLength}
                  </div>
                  <br />
                  <div>
                    <strong>Award name:</strong> {course.CourseAwardName}
                  </div>
                  <br />
                  <div>
                    <strong>Ucas Code:</strong> {course.UcasCode}
                  </div>
                  <br />
                  <div>
                    <strong>Ucas points:</strong> {course.UcasPoints}
                  </div>
                  <br />
                  <div>
                    <strong>Mode of attendance:</strong>{" "}
                    {course.ModeOfAttendance}
                  </div>
                  <br />
                  <div>
                    <strong>Has foundation year:</strong>{" "}
                    {course.HasFoundationYear ? "yes" : "no"}
                  </div>
                  <br />
                  <div>
                    <strong>Still recruiting:</strong>{" "}
                    {course.NoLongerRecruiting ? "yes" : "no"}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CoursesTable;
