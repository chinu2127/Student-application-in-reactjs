import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import "../css/style.css";

const SearchedValue = ({ el }) => {
  const { setModal, setProfile } = useContext(DataContext);

  const openProfile = (e) => {
    setModal(true);
    setProfile(e);
  };

  return (
    <div className="row ">
      <div className="col-sm-8 offset-2 search-value">
        <div className="row">
          <div className="col-sm-8">
            <h6>{el.firstName + " " + el.lastName}</h6>
          </div>
          <div className="col-sm-2">
            <button
              id={el.id}
              className="btn btn-outline-dark btn-sm"
              onClick={(e) => openProfile(e.target.id)}
            >
              Expand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedValue;
