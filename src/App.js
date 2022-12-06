import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Admission from "./components/Admission";
import Applicants from "./components/Applicants";
import DataContext from "./context/DataContext";
import { useState } from "react";
function App() {
  const [applicants, setApplicants] = useState([]);
  const [profile, setProfile] = useState(null);
  const [modal, setModal] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  return (
    <BrowserRouter>
      <DataContext.Provider
        value={{
          applicants,
          setApplicants,
          profile,
          setProfile,
          modal,
          setModal,
          searchList,
          setSearchList,
          courseList,
          setCourseList,
        }}
      >
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="admission" element={<Admission />} />
            <Route path="applicants" element={<Applicants />} />
          </Route>
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
