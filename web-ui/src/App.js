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
import Navigation from "./components/Navigation";

//Our App Components
function App() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // console.log("mobile nav toggled", isOpen);
    setIsOpen(!isOpen);
  };

  const [versionDrawer, setVersionDrawer] = useState(false);

  const toggleDrawer = () => {
      console.log("drawer toggled to", versionDrawer);
      setVersionDrawer(!versionDrawer);
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

  // const toggleAbout = () => {
  //   console.log("about toggled");
  //   setAboutToggle(!setAboutToggle);
  // };

  const [sideProjectsToggle, setSideProjectsToggle] = useState(false);

  // const location = useLocation();
  //TODO: make 2 Styled Component Themes, declare state that is one Theme.
  //----- ON dark/mode press, change state to other theme. Pass in state to each component.

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
    bg: "rgba(10, 10, 10, 1)",
    bgBlur: "rgba(35, 35, 35, .65)",
    bgSide: "rgba(51, 49, 52, 0.8)",
    bgNav: "rgba(30, 30, 31, 0.65)",
    bgPreview: "rgba(8, 8, 8, 0.85)",
    primary: "rgba(245, 251, 255, 0.95)",
    secondary: "#BABABA",
    border: "#3E3E3E",
    cs: "#5685FF",
  }

  const [light, setLight] = useState(true);

  const switcher1 = () => {
    console.log("switched");
    console.log(light);
    setLight(!light);
  };

  return (
    <Router>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <GlobalFonts />
        <Switcher toggle={switcher1} status={light}/>
        <Navigation toggle={toggleAbout} aboutToggle={aboutToggle}/>
        {/* <Versions drawerToggle={versionDrawer} toggle={toggleDrawer} /> */}
        <NavBar mobileToggle={toggle} isOpen={isOpen}/>
        <AboutPanel aboutToggle={aboutToggle} toggle={toggleAbout}></AboutPanel>
        <Marks />
        {/* <SideProjects sideProjectsToggle={sideProjectsToggle} /> */}
        {/* <Wipe isLightTheme={isLightTheme}/> */}
        <CloseOverlay isOpen={isOpen} aboutToggle={aboutToggle} toggleAbout={toggleAbout} mobileToggle={toggle}/>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route exact path="/works" component={Works} />
                {/* <Route exact path="/works" render={(props) => <Works theme={colorTheme} {...props} />}/> */}
                {/* <Route exact path="/blog" component={Blog} />  */}
                <Route exact path="/photo" component={Photography} />
                <Route path="/:workId?/works" component={WorkExpanded} exact />
                <Route path="/:workId?/images" component={Images} />
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