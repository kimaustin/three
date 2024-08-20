import React from 'react';
import { Container, Content, Logo, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Bottom, Social, Side, Styled0, Loader, Desc, Styled1, Styled2, Close, Styled3, Divider } from './AboutPanelElements';
import { ListContainer } from '../Works/WorkElements';
import { motion } from "framer-motion";

const About = ({ toggle, aboutToggle }) => {
 
  return (
      <Container showInfo={aboutToggle}
        as={motion.div} initial={{ opacity: 0, zIndex: -1 }} 
        animate={aboutToggle ? {  opacity: 1, zIndex: 1000 } : { opacity: 0, zIndex: -1 }}
        transition={{
          type: "tween",
          ease: [0.28, 1.35, 1.5, .91],
          duration: 0.0
        }}
      > 
        <Close onClick={toggle}>close</Close>
        {/* <Loader /> */}
        <Divider />
        {/* <Side>INFO</Side> */}
        {/* <ProfileContainer>
            <img src={"imgs/me3.jpeg"} style={{display: 'block'}} onerror='this.style.display = "none"' alt={'picture'} style={{height: '100%'}} id="me!"></img>
        </ProfileContainer> */}
        {/* <Close onClick={toggle}>close</Close> */}
        <Content>
          {/* <Styled1>Currently based in Brooklyn, NY</Styled1> */}
          <Name>Austin Emmanuel Kim</Name>
          <Styled0>Reality Composer — The Wandering Bateman — 호연</Styled0>
          {/* <Styled1>Northeastern University '2021<br />Computer Science and Design</Styled1> */}
          <Styled1>Bachelors of Computer Science and Design @ Northeastern University</Styled1>
          {/* <Styled2>Northeastern University '2021<br /> Bachelors of Computer Science and Design</Styled2> */}
          <Styled2>Multi-disciplinary designer, developer, composer, artist with a passion for building meaningful experiences. Passionate about new technologies, patterns, systems, and sounds.</Styled2>
          <Styled2>Currently into : FSOL, puerh, strawberry-player, buggy g. riphead, go, plexus.earth</Styled2>
          {/* <Styled1 style={{ paddingBottom: 0, paddingTop: '12px' }}>Last Updated: May 4, 2023</Styled1>
          <Styled1>Built by me in React (framer, styled-components) + Elixir.</Styled1> */}
          {/* <Styled1 style={{ color: '#6C9EFF', paddingTop: '10px' }}>Open for work and collaboration</Styled1> */}
          <Styled3>Last Updated: Aug 4, 2024 <br />Built in React + Elixir.</Styled3>
        </Content>
        <Bottom>
          <Social onClick={() => window.open("/akim_cv.pdf")} target="_blank">CV</Social>
          <Social href="mailto:hoyeun@realitycomposer.space" target="_blank">EMAIL</Social>
          <Social href="https://www.are.na/reality-composer" target="_blank">ARE.NA</Social>
          <Social href="https://www.instagram.com/reality.composer/" target="_blank">INSTAGRAM</Social>
        </Bottom>
      </Container>
  );
}

export default About;
