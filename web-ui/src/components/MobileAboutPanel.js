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
                <Name>Austin E. Kim</Name>
                <Styled2>Reality Composer — The Wandering Bateman — 호연</Styled2>
                <Label>40.70270,-73.91847</Label>
                <Label>Brooklyn, NY</Label>
                <Styled>Multi-disciplinary designer, developer, and artist with a passion for building meaningful experiences.</Styled>
                <Styled>Bachelors of Computer Science and Design @ Northeastern University</Styled>
                <Styled>Passionate about new technologies, patterns, systems, and sounds.</Styled>
                <br />
                <Open2W>Currently open to work</Open2W>
                <Powered>Built in React + Elixir. <br />Powered by realitycomposer</Powered> </Content>
            <Bottom>
                <Social onClick={() => window.open("/akim_cv.pdf")} target="_blank">CV</Social>
                <Social href="mailto:hoyeun@realitycomposer.space" target="_blank">EMAIL</Social>
                <Social href="https://www.are.na/reality-composer" target="_blank">ARE.NA</Social>
                <Social href="https://www.instagram.com/reality.composer/" target="_blank">INSTAGRAM</Social>
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
        padding-left: 11px;
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

    color: ${props => props.theme.primary};
    font-size: 24px;
    padding-top: 1px;
    margin-bottom: -9px;
`
const Styled = styled.div`
    padding-top: 12px;
    padding-right: 18px;
    
    color: ${props => props.theme.primary};;
    font-size: 16px;
    line-height: 135%;
`

const Styled2 = styled.div`
    padding-top: 14px;
    padding-right: 18px;
    
    color: ${props => props.theme.primary};;
    font-size: 14px;
    line-height: 143%;
    opacity: 0.7;
    padding-bottom: 7px;
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
    margin-bottom: 4px;
`

const Powered = styled.div`
    /* position: absolute; */
    /* bottom: 16px; */
    font-size: 12px;
    line-height: 138%;
    opacity: 0.6;
    color: ${props => props.theme.primary};
`
