import React, { useContext, useRef } from "react";
import DataContext from "../context/DataContext";
const ApplicantLists = (props) => {
  // const ref = useRef(null);
  const { applicants, setApplicants, setProfile, setModal, modal } =
    useContext(DataContext);
  const deleteListItem = (e) => {
    console.log(e);
    console.log(applicants);
    const securityKey = "asdFg";
    const key = prompt("Please Provide the security key!");
    if (key == securityKey) {
      const newList = applicants.filter((el) => el.id != e);
      setApplicants(newList);
      setModal(false);
    } else {
      alert("Security key didn't match");
    }
  };
  const openProfile = (e) => {
    setModal(true);
    setProfile(e);
  };
  const { id, firstName, lastName } = props;
  return (
    <div className="row applicant-list">
      <div className="col-sm-8">{firstName + " " + lastName}</div>
      <div className="col-sm-4">
        <div className="row">
          <div className="col-sm-6">
            <button
              id={id}
              className="btn btn-outline-dark btn-sm"
              onClick={(e) => openProfile(e.target.id)}
            >
              Expand
            </button>
          </div>
          <div className="col-sm-6">
            <button
              id={id}
              className="btn btn-outline-dark btn-sm"
              onClick={(e) => deleteListItem(e.target.id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantLists;
