import React, { useContext, useState } from "react";
import "../css/style.css";
import DataContext from "../context/DataContext";
import ApplicantLists from "./ApplicantLists";
import Profile from "./Profile";
import SearchedValue from "./SearchedValue";
const Applicants = () => {
  const { applicants, modal, profile, searchList, setSearchList } =
    useContext(DataContext);
  const [searchValue, setSearchValue] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);
    const list = applicants.filter(
      (el) => el.firstName == searchValue.toUpperCase()
    );
    setSearchList(list);
    console.log(searchList);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 search-applicants">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 text-danger"
              type="search"
              placeholder="Search Applicants firstName"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-dark" onClick={handleSearch}>
              Search
            </button>
          </form>
          <div className="row search-container">
            {searchList
              ? searchList.map((el) => <SearchedValue el={el} />)
              : ""}
          </div>
          <div className="applicant-container">
            {applicants.map((obj) => (
              <ApplicantLists
                id={obj.id}
                firstName={obj.firstName}
                lastName={obj.lastName}
              />
            ))}
          </div>
        </div>
        <div class=" profile col-md-4 offset-2">
          {modal ? <Profile id={profile} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
