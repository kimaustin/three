import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Versions = ({ drawerToggle, toggle }) => {

    const currPage = window.location.href.slice(7);
    console.log("page location: ", currPage);

    const [versionDrawer, setVersionDrawer] = useState(false);

    const toggleDrawer = () => {
        console.log("drawer toggled to", versionDrawer);
        setVersionDrawer(!versionDrawer);
    };
    
    return (
        <Container
        as={motion.div} 
                initial={{ x: 0, y: 'calc(100% - 3.25rem)'}} 
                animate={versionDrawer ? {  x: 0, y: 0 } : { x: 0, y: 'calc(100% - 3.25rem)' }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.185
                }}>
            <Label onClick={toggleDrawer}>Version History</Label>
            <Drawer>
                <Item style={{ pointerEvents: "none", color: 'grey', background: '#F3F3F3' }}>v3 (current, 2024)</Item>
                <Item onClick={() => window.location='http://realityblog.blot.im'} target="blank">Blog</Item>
                <Item onClick={() => window.location='http://two.realitycomposer.online'} target="blank">v2 (2023)</Item>
                <Item onClick={() => window.location='http://one.realitycomposer.online'} target="blank">v1 (2022)</Item>
            </Drawer>
            
        </Container>
    );
};

export default Versions;

const Container = styled.div`
    z-index: 1002;
    position: fixed;
    bottom: 0;
    height: fit-content;
    left: calc(((100vw) / 12) * 6 + 60px);
    /* right: calc(50vw - 100px); */
    /* writing-mode: vertical-lr; */
    /* transform: rotate(180deg); */

    /* border: 1px solid blue; */
    padding-top: 5px;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

const Label = styled.div`
    /* position: absolute; */
    background: white;
    width: 200px;
    height: 3.25rem;
    /* width: 3rem; */
    font-size: 17px;
    padding-top: 12px;
    /* padding-right: 12px; */
    text-align: center;
    border: 1px solid black;
    border-bottom: unset;
    font-family: 'Times New Roman';
    font-style: italic;
    /* letter-spacing: 2px; */
    /* opacity: 0.8; */

    a { 
        /* margin-top: 2px; */
        /* font-size: 20px; */
    }

    &:hover {
        /* opacity: 1; */
        color: white;
        background: black;
        cursor: pointer;
    }
` 

const Drawer = styled.div`
    z-index: 999;
    /* position: fixed; */
    /* opacity: 1; */
    display: inline-grid;
    /* width: 100%; */
    width: 200px;
    background: white;

    padding-bottom: 1rem;
    /* height: fit-content; */
    
    overflow: hidden;
    border: 1px solid black;
    border-bottom: unset;

    /* border: 1px solid green; */

    /* &:hover {
        border: 3px solid green;
    } */
`

const Item = styled.div`
    display: grid;
    /* padding-left: 8px; */
    /* padding-bottom: 8px; */
    width: 100%
    /* height: 30px; */
    color: black;
    padding-top: 11px;
    padding-bottom: 13px;
    /* padding-left: 8px; */
    /* padding: 9px 12px 5px 12px; */
    /* margin-top: -1px; */
    border-bottom: 1px solid black;
    text-align: center;
    /* border-top: unset; */
    background: white;
    font-size: '14px';
    font-family: 'Verdana';

    user-select: ${({ selected }) => ((selected) ? 'none' : 'none')};
    
    &:hover {
        background: black;
        color: white;
        cursor: ne-resize;
    }
`