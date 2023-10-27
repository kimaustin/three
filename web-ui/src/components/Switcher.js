import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const Switcher = ({toggle, toggleLight, status, toggleDark, themeToggleStatus}) => {
    return (
        <Container onClick={toggle}>
            <Label>{status ? "dark mode" : "light mode"}</Label>
        </Container>
    );
};

export default Switcher;

// STYLES ------------------------

const Container = styled.div`
    z-index: 999;
    position: fixed;
    right: 18px;
    /* top: 13px; */
    top: calc(50vh - 24px);
    color: ${props => props.theme.primary};

    padding: 5px 8px 3px 8px;
    border: 1px solid ${props => props.theme.primary};
    /* background: ${props => props.theme.bg}; */

    &:hover {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.bg};
        cursor: pointer;
    }
    
    @media screen and (max-width: 767px) {
        z-index: 1000;
        top: unset;
        right: unset;
        left: 12px;
        /* left: calc(42vw + 6px); */
        bottom: 13px;
        /* pointer-events: none; */
        padding: 5px 8px 3px 8px;
        border: 1px solid ${props => props.theme.primary};
        background: ${props => props.theme.bg};

        &:hover {
            background: ${props => props.theme.bg};
            color: ${props => props.theme.primary};
            cursor: pointer;
        }
    }
`

const Label = styled.div`
    /* position: absolute; */
    text-align: right;
    /* float: right; */
    /* left: 0; */
    /* top: 0; */
    font-size: 15px;
    /* opacity: 1; */
    /* color: ${props => props.theme.primary}; */
    /* padding: 4px 7px 2px 7px; */
    /* border: 1px solid ${props => props.theme.primary}; */
    /* background: ${props => props.theme.bg}; */

    &:hover {
    /* text-decoration: underline;
    cursor: pointer; */
    }

    @media screen and (max-width: 767px) {
        /* display: none; */
        display: grid;
        text-align: right;
        font-size: 16px;
        color: ${props => props.theme.primary};
    }
`