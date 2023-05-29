import React, { useState } from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const Navigation = ({toggle, aboutToggle}) => {
    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    const [showInfo, setShowInfo] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [filterType, setFilterType] = useState(0);
    
    //TODO: Cases for when clicking on other tabs or things UNDER Info Card
    const pageTransition = {
        type: "tween",
        ease: [0.7, 0.1, 0.4, 1],
        duration: 0.5
    };
 
    let infoDrop = null;

    const filtersVariants = {
        initial: {
          x: "-12rem",
          // opacity: 0
        },
        in: {
          x: "0vh",
          // opacity: 1
        },
        out: {
          x: "-12rem",
          transition: {
              type: "tween",
              ease: [0.7, 0, 0.13, 1],
              duration: 0.85,
          }
          // opacity: 0
        },
      };

    const toggleWithType = (filter) => {
        console.log("filter type: " + filterType);
        if (filterType != filter) {
        setFilterType(filter);
        } else {
        setFilterType(0);
        }
    };

    return (
        <Container>
            <NavLink currpage={currPage} thispage={'main'} to="/">me</NavLink>
            <NavLink currpage={currPage} thispage={'works'} to="/works">case studies</NavLink>
            <NavLink currpage={currPage} thispage={'photo'} to="/photography">photo</NavLink>
            <NavLink currpage={currPage} thispage={'test'} to="/test">audio</NavLink>
            <NavLink currpage={currPage} thispage={'fabric'} to="/fabric">fabric</NavLink>
            <NavDOMLinkAbout currpage={aboutToggle} thispage={true} onClick={() => toggle('info')}>contact</NavDOMLinkAbout>
            {/* <MobileMenuToggle onClick={mobileToggle}>Menu/About</MobileMenuToggle> */}
        </Container>
    );
};

export default Navigation;


// STYLES ------------------------

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 40vw;
    display: grid;
    margin-top: 27vh;
    /* text-align: left; */
    /* height: ; */
    /* width: 46px; */
    /* width: 100vw; */
    /* background: #1E1C1F; */
    /* background: green; */
    /* background: ${props => props.theme.bgNav}; */
    /* backdrop-filter: blur(12px); */
    /* border-right: .5px solid ${props => props.theme.border}; */
    z-index: 999;

    @media screen and (max-width: 767px) {
        top: unset;
        /* left: 0; */
        bottom: 0px;
        width: 100vw;
        border-top: .5px solid ${props => props.theme.border};
        border-bottom: unset;
        height: 52px;
    }
`

const NavLink = styled(LinkRouter)`
    display: grid;
    padding-bottom: 7px;
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 36px;

    opacity: 0.3;
    /* font-family: "SS3"; */

    /* border: 1px solid green; */

    &:hover {
        opacity: 0.9;
    }

    @media screen and (max-height: 767px) {
    }
`

const NavDOMLinkAbout = styled.div`
    text-decoration: none;
    padding-top: 20px;
    
    font-size: 36px;
    color: ${props => props.theme.primary};
    opacity: 0.3;

    &:hover {
        opacity: 0.9;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`
