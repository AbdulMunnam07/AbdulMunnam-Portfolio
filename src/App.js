import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import ThingsBuilt from "./components/ThingsBuilt";
import OtherProjects from "./components/OtherProjects";
import GetInTouch from "./components/GetInTouch";
import Logos from "./components/Logos";
import Loader from "./components/loader/Loader";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [aboutBtnClickedActive, setAboutBtnClickedActive] = useState(false);
  const [experienceBtnClickedActive, setExperienceBtnClickedActive] =
    useState(false);
  const [workBtnClickedActive, setWorkBtnClickedActive] = useState(false);
  const [contactBtnClickedActive, setContactBtnClickedActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2200);
  }, []);

  return showLoader ? (
    <Loader />
  ) : (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Navbar
                setAboutBtnClickedActive={setAboutBtnClickedActive}
                setExperienceBtnClickedActive={setExperienceBtnClickedActive}
                setWorkBtnClickedActive={setWorkBtnClickedActive}
                setContactBtnClickedActive={setContactBtnClickedActive}
              />
              <Header />
              <About aboutBtnClickedActive={aboutBtnClickedActive} />
              <Work experienceBtnClickedActive={experienceBtnClickedActive} />
              <ThingsBuilt workBtnClickedActive={workBtnClickedActive} />
              <OtherProjects />
              <GetInTouch contactBtnClickedActive={contactBtnClickedActive} />
              <Logos />
            </Fragment>
          }
        />
      </Routes> 
    </Router>
  );
}

export default App;
