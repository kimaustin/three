import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const Switcher = ({toggle, toggleLight, status, toggleDark, themeToggleStatus}) => {
    return (
        <Container>
            <Label onClick={toggle}>i want {status ? "DARK" : "LIGHT"}!!!</Label>
        </Container>
    );
};

export default Switcher;


// STYLES ------------------------

const Container = styled.div`
    z-index: 999;
    position: fixed;
    width: 10vw;
    left: 47vw;
    bottom: 24px;

    @media screen and (max-width: 767px) {
    }
`

const Label = styled.div`
    position: absolute;
    text-align: center;
    left: 0;
    top: 0;
    font-size: 14px;
    opacity: 0.7;
    color: ${props => props.theme.primary};

    &:hover {
        opacity: 1;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
    }
`
