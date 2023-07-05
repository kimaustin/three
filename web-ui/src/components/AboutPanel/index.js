import React from 'react';
import { Container, Content, Logo, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Bottom, Social, Side, Loader, Desc, Styled1, Styled2, Close, Styled3, Divider } from './AboutPanelElements';
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
          <Styled1>Northeastern University '2021<br />Computer Science and Design</Styled1>
          {/* <Styled2>Northeastern University '2021<br /> Bachelors of Computer Science and Design</Styled2> */}
          <Styled2>Multi-disciplinary designer, developer, and artist with a passion for building meaningful experiences. I love experimenting with new technologies, techniques, patterns, styles, and sounds.</Styled2>
          {/* <Styled1 style={{ paddingBottom: 0, paddingTop: '12px' }}>Last Updated: May 4, 2023</Styled1>
          <Styled1>Built by me in React (framer, styled-components) + Elixir.</Styled1> */}
          {/* <Styled1 style={{ color: '#6C9EFF', paddingTop: '10px' }}>Open for work and collaboration</Styled1> */}
          <Styled3>Last Updated: May 30, 2023 <br />Built in React + Elixir.</Styled3>
        </Content>
        <Bottom>
          <Social href="mailto:nektinemedia@gmail.com" target="_blank">email</Social>
          <Social href="https://www.instagram.com/nektine/" target="_blank">instagram</Social>
          <Social href="https://www.are.na/goreum-b" target="_blank">are.na</Social>
          <Social onClick={() => window.open("/imgs/Resume_Spring23.pdf")} target="_blank">resume_may2023</Social>
        </Bottom>
      </Container>
  );
}

export default About;
