import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../css/style.css";

const PursueCourseList = ({ data }) => {
  const { courseList, setCourseList } = useContext(DataContext);
  const deleteCourse = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const data = courseList.filter((el) => el !== e.target.id);
    setCourseList([...new Set(data)]);
    console.log(courseList);
  };
  return (
    <div className="col-sm-1 delete-course">
      <button
        id={data}
        className="btn btn-success"
        onClick={(e) => deleteCourse(e)}
      >
        {data}
      </button>
    </div>
  );
};

export default PursueCourseList;
