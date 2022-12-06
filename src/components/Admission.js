import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import countryData from "../data/CountryCodes.json";
import "../css/style.css";
import PursueCourseList from "./PursueCourseList";
import DataContext from "../context/DataContext";
const Admission = () => {
  const { applicants, setApplicants, setCourseList, courseList } =
    useContext(DataContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [pursued, setPursued] = useState();
  const [wantToPursue, setWantToPursue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pursueCourse, setPursueCourse] = useState([]);
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const formSubmitHandler = (e) => {
    const isEmpty = () => {
      if (
        !firstName ||
        !lastName ||
        !gender ||
        !pursued ||
        !countryCode ||
        !phone ||
        !email ||
        !address ||
        !date ||
        !pursueCourse
      )
        return false;
      else return true;
    };
    const isValid = () => {
      if (email.slice(-8) == "@xyz.com") return true;
      else return false;
    };
    const notZero = () => {
      if (pursueCourse.length === 0) return false;
      else return true;
    };
    e.preventDefault();

    if (isEmpty() && isValid() && notZero()) {
      const data = {
        id: Date.now(),
        firstName: firstName.trim().toUpperCase(),
        lastName: lastName.trim().toUpperCase(),
        gender: gender,
        pursued: pursued,
        pursueCourse: pursueCourse,
        countryCode: countryCode,
        phone: phone,
        country: country,
        email: email,
        address: address,
        date: date,
      };
      setApplicants([...applicants, data]);
      clearForm();
      setTimeout(() => {
        alert("Form submitted successfully");
      }, 500);
    } else {
      if (
        !firstName ||
        !lastName ||
        !gender ||
        !pursued ||
        !countryCode ||
        !phone ||
        !email ||
        !address ||
        !date ||
        !pursueCourse
      ) {
        alert("Provide all input field");
      }
      if (pursueCourse.length < 1) {
        alert("Course is not added");
      }
      if (phone.length < 10) {
        alert("Phone number must include 10 digits !");
      }
      const x = Number(phone);
      if (isNaN(x)) {
        alert("Must input numbers");
        return false;
      }
      if (email.slice(-8) !== "@xyz.com") {
        alert("Enter a valid email");
      }
    }
  };
  const addCourse = (e) => {
    e.preventDefault();
    if (courseList.includes(wantToPursue)) {
      alert("Already Exists");
    } else {
      const data = [...pursueCourse, wantToPursue].sort((a, b) => a - b);
      setPursueCourse([...new Set(data)]);
      setCourseList([...new Set(data)]);
      setWantToPursue("");
    }
  };
  const clearForm = () => {
    // e.preventDefault();
    setFirstName("");
    setLastName("");
    setGender("");
    setPursued("");
    setWantToPursue("");
    setCountryCode("");
    setCountry("");
    setDate("");
    setEmail("");
    setAddress("");
    setPhone("");
    setPursueCourse("");
    setCourseList([]);
  };
  return (
    <div className="admission-form container-fluid col-md-8 specefy-center">
      <div className="form-header">
        <h3>Application Form</h3>
      </div>
      <form>
        {/* Name section */}
        <div className="row name-section">
          <div className="col-md-6">
            <div className="input-group">
              <label className="input-group-text">First name</label>
              <input
                value={firstName.toUpperCase()}
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <label className="input-group-text">Last name</label>
              <input
                value={lastName.toUpperCase()}
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* gender */}
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <label className="input-group-text">Gender</label>
              <select
                value={gender}
                className="form-select"
                onChange={(e) => setGender(e.currentTarget.value)}
              >
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="input-group mb-3">
              <label className="input-group-text">Last pursued Class </label>
              <select
                value={pursued}
                className="form-select"
                onChange={(e) => setPursued(e.currentTarget.value)}
              >
                <option>Choose...</option>
                {classes.map((el) => {
                  return <option value={el}>{el}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <label className="input-group-text">Want to pursue </label>
              <select
                value={wantToPursue}
                className="form-select"
                onChange={(e) => setWantToPursue(e.currentTarget.value)}
              >
                <option>Choose...</option>
                {classes.map((el) => {
                  return <option value={el}>{el}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-md-2 add-btn">
            <button className="btn btn-primary" onClick={addCourse}>
              Add
            </button>
          </div>
          <div className="col-md-6">
            <div className="row">
              {courseList?.map((el) => (
                <PursueCourseList data={el} />
              ))}
            </div>
          </div>
        </div>
        {/* Country code */}
        <div className="row">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <label className="input-group-text">Country Code </label>
              <select
                value={countryCode}
                className="form-select"
                onChange={(e) => {
                  setCountryCode(e.currentTarget.value);
                  setCountry(
                    countryData.filter(
                      (element) => e.currentTarget.value === element.dial_code
                    )
                  );
                }}
              >
                <option>Choose...</option>
                {countryData.map((el) => {
                  return <option value={el.dial_code}>{el.dial_code}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <label className="input-group-text">Phone</label>
              <input
                type="phone"
                value={phone}
                className="form-control"
                placeholder="Enter Phone number"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group mb-3">
              <label className="input-group-text">Country </label>
              <input
                value={country[0]?.name}
                type="text"
                className="form-control"
                placeholder="Country Name"
              ></input>
            </div>
          </div>
        </div>
        {/* Email  */}
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <label className="input-group-text">Email</label>
              <input
                value={email}
                type="email"
                className="form-control"
                placeholder="Email should be the domain @xyz.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group ">
              <label className="input-group-text">Address</label>
              <input
                value={address}
                type="text"
                className="form-control"
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Date */}
        <div className="row date">
          <div className="col-md-4">
            <div className="input-group ">
              <label className="input-group-text">Date</label>
              <DateTimePicker
                className="form-control"
                onChange={(newValue) => setDate(newValue)}
                value={date}
              />
            </div>
          </div>
        </div>
        {/* .....submit button...... */}

        <div className="row ">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-primary submit-button"
              onClick={formSubmitHandler}
            >
              SUBMIT
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-outline-primary submit-button"
              onClick={clearForm}
            >
              CLEAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admission;
