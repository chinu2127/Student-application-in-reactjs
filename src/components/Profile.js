import React, { useContext } from "react";
import "../css/style.css";
import DataContext from "../context/DataContext";
const Profile = ({ id }) => {
  const { applicants, setModal } = useContext(DataContext);
  const data = applicants.filter((el) => el.id == id);

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row offset-9">
          <button
            class="btn btn-sm btn-close-modal btn-outline-danger  "
            onClick={closeModal}
          >
            close
          </button>
        </div>

        <div className=" d-flex flex-column align-items-center text-center">
          <img
            src={
              data[0]?.gender == "male"
                ? "https://bootdey.com/img/Content/avatar/avatar6.png"
                : "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar3.png"
            }
            alt="Admin"
            className="rounded-circle p-1 bg-primary"
            width="110"
          />
          <div className="mt-3">
            <h4>
              {" "}
              {data[0]?.firstName + " " + data[0]?.lastName.toUpperCase()}
            </h4>
            <p className="text-secondary mb-1">{data[0]?.gender}</p>
            <p className="text-muted font-size-sm">
              Pursued {data[0]?.pursued + "th"}
            </p>
            <p className="text-muted font-size-sm">
              Want to pursue {data[0]?.pursueCourse.map((el) => `${el}th, `)}
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Email</h6>
            <span className="text-secondary">{data[0]?.email}</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Country</h6>
            <span className="text-secondary">{data[0]?.country[0]?.name}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Country Code</h6>
            <span className="text-secondary">{data[0]?.countryCode}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Phone</h6>
            <span className="text-secondary">{data[0]?.phone}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Address</h6>
            <span className="text-secondary">{data[0]?.address}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 className="mb-0">Submitted At</h6>
            <span className="text-secondary">
              {data[0]?.date.toString().slice(0, 15)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
