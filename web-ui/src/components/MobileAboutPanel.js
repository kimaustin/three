import React, { useState } from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { Link as LinkRouter, useLocation } from 'react-router-dom';

const MobileAboutPanel = ({toggle, togglePanel}) => {

    return (
        <Container
            as={motion.div} 
            initial={{ x: '-100vw', y: 0 }} 
            animate={toggle ? {  x: '0vw', y: 0 } : { x: '-100vw', y: 0 }}
            transition={{
            type: "tween",
            ease: [0.28, 1.35, 1.5, .91],
            duration: 0.34
            }}
        >
            <Close onClick={togglePanel}>✕</Close>
            <Content>
                {/* <Styled1>Currently based in Brooklyn, NY</Styled1> */}
                {/* <Name>austin emmanuel kim</Name> */}
                <Label>40.70270,-73.91847</Label>
                <Label>Brooklyn, NY</Label>
                <br />
                <Name>austin emmanuel kim</Name>
                <Styled>Multi-disciplinary designer, developer, and artist with a passion for building meaningful experiences.</Styled>
                <Styled>I graduated from Northeastern University in May of 2021 with a bachelors of Computer Science and Design, and have been working on various web and graphic design projects across many fields.</Styled>
                <Styled>I love experimenting with new technologies, techniques, patterns, styles, and sounds.</Styled>
                <br />
                <Styled3>Built in React + Elixir.</Styled3>
                <Powered>Powered by nektinemedia.</Powered>
                <br />
                <Open2W>Currently open to work</Open2W>
            </Content>
            <Bottom>
                <Social href="mailto:nektinemedia@gmail.com" target="_blank">email</Social>
                <Social href="https://www.instagram.com/nektine/" target="_blank">instagram</Social>
                <Social href="https://www.are.na/goreum-b" target="_blank">are.na</Social>
                <Social onClick={() => window.open("/imgs/Resume_Spring23.pdf")} target="_blank">resume_may2023</Social>
            </Bottom>
        </Container>
    );
};

export default MobileAboutPanel;


// STYLES ------------------------

const Container = styled.div`   
     display: none;

    @media screen and (max-width: 767px) {
        display: block;
        z-index: 1000;
        height: 100vh;
        width: calc(100vw - 74px);
        overflow: hidden;
        position: fixed;
        left: 0;
        padding-left: 10px;
        padding-right: 12px;
        border-right: .75px solid ${props => props.theme.secondary};
        background: ${props => props.theme.bg};
    }
`

const Close = styled.p`
    z-index: 999;
    position: absolute;
    top: 12px;
    right: 12px;
    color: ${props => props.theme.primary};;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const Content = styled.div`
    overflow: hidden;
    width: 100%;
    z-index: 999;

    padding-right: 8px;
    padding-top: 14px;
    padding-bottom: 12px;
    pointer-events: none;

    text-align: left;

    @media screen and (max-height: 640px) {
        display: none;
    }
`

const Name = styled.div`
    display: flex;
    line-height: 100%;

    color: ${props => props.theme.secondary};
    font-size: 12px;
`
const Styled = styled.div`
    padding-top: 20px;
    padding-right: 18px;
    
    color: ${props => props.theme.primary};;
    font-size: 14px;
    line-height: 143%;
`
const Styled3 = styled.div`
    /* padding-top: 18px; */
    
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
`

const Bottom = styled.div`
    position: absolute;
    bottom: 8px;
    z-index: 997;
`

export const Social = styled.a`
    display: list-item;
    z-index: 990;
    width: 100%;

    overflow: hidden;

    padding-top: 4px;
    font-size: 30px;

    color: ${props => props.theme.primary};;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Label = styled.div`
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 767px) {
    }
`
const Open2W = styled.div`
    font-size: 14px;
    line-height: 138%;
    opacity: 1;
    font-style: italic;
    color: ${props => props.theme.cs};

    @media screen and (max-width: 767px) {
    }
`

const Powered = styled.div`
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 767px) {
    }
`