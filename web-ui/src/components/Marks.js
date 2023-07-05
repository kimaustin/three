import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

const Marks = ({toggle, toggleLight, status, toggleDark, themeToggleStatus}) => {
    return (
        <Container>
            <Label>40.70270,-73.91847</Label>
            <br />
            <Label>Brooklyn, NY</Label>
            <Bottom> 
                <Open2W>Currently open to work</Open2W><br />
                <Powered>Powered by nektinemedia :D</Powered>
            </Bottom>
        </Container>
    );
};

export default Marks;


// STYLES ------------------------

const Container = styled.div`
    /* z-index: -1; */
    /* display: grid; */
    /* width: auto; */
    position: fixed;
    right: 12px;
    /* bottom: 17px; */
    top: 12px;
    /* height: 100vh; */
    /* padding: 14px 0 22px 0; */

    /* border: 2px solid blue; */

    @media screen and (max-width: 767px) {
        display: none;
    }
`

const Label = styled.div`
    font-size: 15px;
    line-height: 138%;
    opacity: 0.7;
    float: right;
    text-align: right;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 767px) {
    }
`

const Bottom = styled.div`
    position: fixed;
    bottom: 17px;
    right: 12px;
    /* width: auto */
`

const Open2W = styled.div`
    font-size: 15px;
    line-height: 138%;
    opacity: 0.85;
    float: right;
    text-align: right;
    font-style: italic;
    color: ${props => props.theme.cs};

    @media screen and (max-width: 767px) {
    }
`

const Powered = styled.div`
    font-size: 15px;
    line-height: 138%;
    opacity: 0.7;
    float: right;
    /* padding-top:  */
    text-align: right;
    opacity: 0.5;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 767px) {
    }
`