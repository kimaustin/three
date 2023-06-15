import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';

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
                <Label>40.70270,-73.91847</Label>
                <Label>Brooklyn, NY</Label>
                <br />
                <Name>austin emmanuel kim</Name>
                <Styled>Multi-disciplinary designer, developer, and artist with a passion for building meaningful experiences.</Styled>
                <Styled>Bachelors of Computer Science & Design<br />Northeastern University 2021.</Styled>
                <Styled>Passionate about expanding into new technologies, techniques, patterns, styles, and sounds.</Styled>
                <br />
                <Open2W>Currently open to work</Open2W>
                <br />
                <Styled3>Built in React + Elixir.</Styled3>
                <Powered>Powered by nektinemedia.</Powered> </Content>
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
        display: flex;
        z-index: 1001;
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
    z-index: 1000;

    /* position: fixed; */
    /* left: 10px; */
    /* top: 14px; */
    /* border: 5px solid blue; */

    padding-right: 8px;
    padding-top: 14px;
    padding-bottom: 12px;
    /* pointer-events: none; */

    text-align: left;
`

const Name = styled.div`
    display: flex;
    line-height: 100%;

    color: ${props => props.theme.secondary};
    font-size: 12px;
`
const Styled = styled.div`
    padding-top: 14px;
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
    z-index: 1000;
    position: fixed;
    /* bottom: 13px; */
    bottom: 88px;
    /* z-index: 997; */
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
`

const Label = styled.div`
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
    color: ${props => props.theme.primary};
`
const Open2W = styled.div`
    font-size: 14px;
    line-height: 138%;
    opacity: 1;
    font-style: italic;
    color: ${props => props.theme.cs};
`

const Powered = styled.div`
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
    color: ${props => props.theme.primary};
`