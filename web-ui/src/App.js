import "./App.scss";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import GlobalFonts from './fonts/fonts';
import { motion, AnimatePresence } from "framer-motion";

import { ThemeProvider } from 'styled-components';

import Main from "./components/Main";
import Works from "./components/Works";
import WorkExpanded from "./components/Works/WorkExpanded";
import Images from "./components/ImageZoom";
import AboutPanel from "./components/AboutPanel";
import NavBar from "./components/Navbar";
import { Provider } from "react-redux";
import SideProjects from "./components/SideProjects";
import Blog from "./components/Blog";
import CloseOverlay from "./components/CloseOverlay";
import Wipe from "./components/Wipe";
import Background from "./components/Background";
import Photography from "./components/Photography";
import Versions from "./components/Versions";
import Switcher from "./components/Switcher";
import Marks from "./components/Marks";
import MobileAboutPanel from "./components/MobileAboutPanel";
import Navigation from "./components/Navigation";

//Our App Components
function App() {
  

  // const [projectValue, setProjectValue] = useState(0);


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("mobile nav toggled", isOpen);
    setIsOpen(!isOpen);
  };

  const [aboutToggle, setAboutToggle] = useState(false);
  
  const toggleAbout = (currPage) => {
    if (currPage == 'info') {
      // console.log("about toggled");
      setAboutToggle(!aboutToggle);
    } else {
      setAboutToggle(false);
    }
  }
  
  // const [mobileAbout, setMobileAbout] = useState(false);
  
  // const toggleMobileAbout = () => {
  //     setMobileAbout(!mobileAbout);
  // }

  const lightTheme = {
    bg: "rgba(255, 255, 255, 1)",
    bgBlur: "rgba(255, 255, 255, 1)",
    bgSide: "rgba(255, 255, 255, 1)",
    bgNav: "rgba(255, 255, 255, 1)",
    bgPreview: "rgba(255, 255, 255, 0.7)",
    primary: "#000000",
    secondary: "#7D7D7D",
    cs: "#0047FD",
    border: "#D1D4D7"
  };

  const darkTheme = {
    bg: "rgba(14, 10, 14, 1)",
    bgBlur: "rgba(35, 35, 35, .65)",
    bgSide: "rgba(51, 49, 52, 0.8)",
    bgNav: "rgba(30, 30, 31, 0.65)",
    bgPreview: "rgba(8, 8, 8, 0.85)",
    primary: "rgba(255, 255, 255, 0.98)",
    secondary: "#BABABA",
    border: "#3E3E3E",
    cs: "#4A72FF",
  }

  const [light, setLight] = useState(true);

  const switcher1 = () => {
    console.log("switched");
    console.log(light);
    setLight(!light);
  };

  //filters
  const [filters, setFilters] = useState([]);

  // let updateFilters = (type) => {
  //   const tempFilters = [...filters];

  //   if (filters.includes(type)) {
  //     const index = filters.indexOf(type);
  //     tempFilters.splice(index, 1);

  //     console.log("removed: ", type);
  //     console.log("filters", tempFilters);

  //     setFilters(tempFilters);
  //   } else {
  //     tempFilters.push(type);
  //     console.log("added: ", type);
  //     console.log("filters", tempFilters);

  //     setFilters(tempFilters);
  //   }
  // }

  const filterAudio = () => {
    const tempFilters = [...filters];
    if (filters.includes("audio")) {
      const index = filters.indexOf("audio");
      tempFilters.splice(index, 1);
      console.log("removed audio");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    } else {
      tempFilters.push("audio");
      console.log("added audio");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    }
  }

  const filterPhoto = () => {
    const tempFilters = [...filters];
    if (filters.includes("photo")) {
      const index = filters.indexOf("photo");
      tempFilters.splice(index, 1);
      console.log("removed photo");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    } else {
      tempFilters.push("photo");
      console.log("added photo");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    }
  }
    
  const filterProjects = () => {
    const tempFilters = [...filters];
    if (filters.includes("project")) {
      const index = filters.indexOf("project");
      tempFilters.splice(index, 1);
      console.log("removed project");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    } else {
      tempFilters.push("project");
      console.log("added project");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    }
  }

  const filterFabric = () => {
    const tempFilters = [...filters];
    if (filters.includes("fabric")) {
      const index = filters.indexOf("fabric");
      tempFilters.splice(index, 1);
      console.log("removed fabric");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    } else {
      tempFilters.push("fabric");
      console.log("added fabric");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    }
  }
    
  const filterStudy = () => {
    const tempFilters = [...filters];
    if (filters.includes("study")) {
      const index = filters.indexOf("study");
      tempFilters.splice(index, 1);
      console.log("removed study");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    } else {
      tempFilters.push("study");
      console.log("added study");
      console.log("filters", tempFilters);
      setFilters(tempFilters);
    }
  }
    
  const clearFilters = () => {
    setFilters([]);
  }

  return (
    <Router>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <GlobalFonts />
        <Switcher toggle={switcher1} status={light}/>
        {/* <Navigation toggle={toggleAbout} aboutToggle={aboutToggle}/> */}
        <Versions />
        <NavBar aboutToggle={toggleAbout} mobileToggle={toggle} isOpen={isOpen} filters={filters} clearFilters={clearFilters} photoFilter={filterPhoto} audioFilter={filterAudio} studyFilter={filterStudy} projectFilter={filterProjects} fabricFilter={filterFabric}/>
        <AboutPanel aboutToggle={aboutToggle} toggle={toggleAbout}></AboutPanel>
        <MobileAboutPanel toggle={aboutToggle} togglePanel={toggleAbout}></MobileAboutPanel>
        <Marks />
        {/* <SideProjects sideProjectsToggle={sideProjectsToggle} /> */}
        {/* <Wipe isLightTheme={isLightTheme}/> */}
        <CloseOverlay isOpen={isOpen} aboutToggle={aboutToggle} toggleAbout={toggleAbout} mobileToggle={toggle}/>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                {/* <Route exact path="/everythingicaretoshare" component={Works} /> */}
                <Route exact path="/reality1" render={(props) => <Works toggle={toggleAbout} mobileToggleStatus={isOpen} mobileToggle={toggle} filters={filters} clearFilters={clearFilters} photoFilter={filterPhoto} audioFilter={filterAudio} studyFilter={filterStudy} projectFilter={filterProjects} fabricFilter={filterFabric} {...props} />}/>
                {/* <Route exact path="/blog" component={Blog} />  */}
                {/* <Route exact path="/photo" component={Photography} /> */}
                {/* <Route path="/:workId?/works" component={WorkExpanded} exact /> */}
                {/* <Route path="/:workId?/images" component={Images} /> */}
              </Switch>
            </AnimatePresence>
          )}
        />
        {/* <WIP /> */}
        <Background />
      </ThemeProvider>
    </Router>
  );
}

export default App;