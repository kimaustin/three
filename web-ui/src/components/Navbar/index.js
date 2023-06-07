import React, { useState, useEffect } from 'react';
import { Container, FiltersContainer, ClearFilters, Filter, Nav, NavDOMLinkAbout, NavbarContainer, NavLogo, Styled1, Styled2, Styled3, Social, About, Menu, Details1, MobileAboutContainer, Logo, NavHome, Close, NavMenu, NavItem, NavLinksDOM, NavLinksDOM2, NavLinks, CloseBtn, NavBtnLink } from './NavbarElements';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

const Navbar = ({aboutToggle, mobileToggle, isOpen, clearFilters, filters, photoFilter, audioFilter, projectFilter, caseFilter, fabricFilter }) => {

    const location = useLocation();
    let currPage = location.pathname.split("/").pop();

    const [mobileAbout, setMobileAbout] = useState(false);
    
    const toggleMobileAbout = () => {
        // console.log("mobile about showing", mobileAbout);
        setMobileAbout(true);
    };

    const toggleMobileAbout2 = () => {
        // console.log("mobile menu showing", mobileAbout);
        setMobileAbout(false);
    };

    return (
        <Container
            example_var={mobileAbout}
            as={motion.div} initial={{ x: '100vw', y: 0 }} 
            animate={isOpen ? {  x: '43vw', y: 0 } : { x: '100vw', y: 0 }}
            transition={{
            type: "tween",
            ease: [0.28, 1.35, 1.5, .91],
            duration: 0.34
            }}
        >
            <FiltersContainer>
                <Filter onClick={projectFilter} active={(filters.includes("project")) ? true : false }>projects <a>{(filters.includes("project")) ? "✕" : ""}</a></Filter>
                <Filter onClick={caseFilter} active={(filters.includes("case")) ? true : false }>case studies <a>{(filters.includes("case")) ? "✕" : ""}</a></Filter>
                <Filter onClick={photoFilter} active={(filters.includes("photo")) ? true : false }>photo <a>{(filters.includes("photo")) ? "✕" : ""}</a></Filter>
                <Filter onClick={audioFilter} active={(filters.includes("audio")) ? true : false }>audio <a>{(filters.includes("audio")) ? "✕" : ""}</a></Filter>
                <Filter onClick={fabricFilter} active={(filters.includes("fabric")) ? true : false }>fabric <a>{(filters.includes("fabric")) ? "✕" : ""}</a></Filter>
                <ClearFilters 
                    onClick={clearFilters} 
                    active={(filters.length > 0) ? true : false }
                >
                    clear all
                </ClearFilters> 
            </FiltersContainer>
            {/* <NavHome onClick={mobileToggle} to="/"><Logo /><a style={{ marginLeft: '8px', marginTop: '1px' }}>호연</a></NavHome> */}
            {/* <NavMenu
                as={motion.div} initial={{ x: '0vw', y: 0 }} 
                animate={mobileAbout ? {  x: '-100vw', y: 0 } : { x: '0vw', y: 0 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.35
                }}
            >
                <NavLinksDOM onClick={mobileToggle} to="/works">Index</NavLinksDOM>
                <NavLinksDOM2>(Blog coming Soon)</NavLinksDOM2>
                <NavLinksDOM2>(Lab coming Soon)</NavLinksDOM2>
                <NavLinksDOM onClick={mobileToggle} to="/photo">Photography</NavLinksDOM>
                <Details1>Built by me in React + Elixir<br />Last Updated: Apr 4, 2023</Details1>
            </NavMenu> */}
            <Close onClick={mobileToggle}>close</Close>
            {/* <Menu 
                onClick={toggleMobileAbout2}
                as={motion.div} initial={{ x: '60vw', opacity: 0, zIndex: -1 }} 
                animate={mobileAbout ? {  x: '0vw', opacity: 1, zIndex: 1 } : { x: '60vw', opacity: 0, zIndex: -1 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.3
                }}
            >Menu</Menu> */}
            {/* <About 
                onClick={toggleMobileAbout} 
                as={motion.div} initial={{ x: '0vw', opacity: 1, zIndex: 1 }} 
                animate={mobileAbout ? {  x: '-50vw', opacity: 0, zIndex: -1 } : { x: '0vw', opacity: 1, zIndex: 1 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.3
                }}
            >About/Contact</About> */}
            {/* <CloseBtn onClick={mobileToggle}>✕</CloseBtn> */}
        </Container>
    );
};

export default Navbar;