"use client";
import "./courses.css";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

const CoursesTable = ({ courses }) => {
  const [openTable, setOpenTable] = useState(null);

  const toggleTable = (key) => {
    setOpenTable((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <table className="courses-table-container" id="courses">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year of entry</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <React.Fragment key={index}>
            <tr
              className="courses-table-row"
              onClick={() => toggleTable(course.CourseTitle)}
            >
              <td>{course.CourseTitle}</td>
              <td>{course.YearOfEntry}</td>
              <td className="row-dropdown">
                <span>
                  <IoIosArrowDown />
                </span>
              </td>
            </tr>

            {openTable === course.CourseTitle && (
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
