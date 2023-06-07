import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const Switcher = ({toggle, toggleLight, status, toggleDark, themeToggleStatus}) => {
    return (
        <Container>
            <Label onClick={toggle}>i want {status ? "DARK" : "LIGHT"}!!!</Label>
            <MobileLabel onClick={toggle}>{status ? "dark mode" : "light mode"}</MobileLabel>
        </Container>
    );
};

export default Switcher;

// STYLES ------------------------

const Container = styled.div`
    z-index: 999;
    position: fixed;
    right: 10px;
    top: 12px;

    @media screen and (max-width: 767px) {
        z-index: 1000;
        top: unset;
        right: unset;
        left: 8px;
        /* left: calc(42vw + 6px); */
        bottom: 13px;
        
        padding: 5px 9px 3px 9px;
        border: 1px solid ${props => props.theme.primary};
        background: ${props => props.theme.bg};
    }
`

const Label = styled.div`
    /* position: absolute; */
    text-align: right;
    /* float: right; */
    /* left: 0; */
    /* top: 0; */
    font-size: 14px;
    /* opacity: 1; */
    color: ${props => props.theme.primary};
    /* padding: 4px 7px 2px 7px; */
    /* border: 1px solid ${props => props.theme.primary}; */
    /* background: ${props => props.theme.bg}; */

    &:hover {
        /* background: ${props => props.theme.primary}; */
        /* color: ${props => props.theme.bg}; */
        /* opacity: 1; */
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`

const MobileLabel = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: grid;
        text-align: right;
        font-size: 16px;
        color: ${props => props.theme.primary};
    }
`

