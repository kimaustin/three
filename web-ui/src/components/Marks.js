import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const Marks = ({toggle, toggleLight, status, toggleDark, themeToggleStatus}) => {
    return (
        <Container>
            <Label>Powered by nektinemedia :D</Label><br />
            <Label style={{ opacity: 0.5, fontStyle: 'italic' }}>Currently open to work</Label>
            <Bottom>
                <Label>40.70270,-73.91847</Label>
                <Label>Brooklyn, NY</Label>
            </Bottom>
        </Container>
    );
};

export default Marks;


// STYLES ------------------------

const Container = styled.div`
    /* z-index: -1; */
    /* display: grid; */
    position: fixed;
    right: 18px;
    top: 0px;
    height: 100vh;
    padding: 22px 0 22px 0;

    /* border: 2px solid blue; */

    @media screen and (max-width: 767px) {
    }
`

const Bottom = styled.div`
    position: absolute;
    bottom: 22px;
    right: 0;
`

const Label = styled.div`
    font-size: 14px;
    line-height: 138%;
    opacity: 0.7;
    float: right;
    text-align: right;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 767px) {
    }
`
