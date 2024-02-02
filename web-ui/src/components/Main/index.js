import React, { useState, useEffect, useRef } from 'react';
// import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';
// import { useInView, inView, InView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { useHistory } from 'react-router';
import { AboutMe, Actions, Container, Info, Desc, Location, IndexLink } from './MainElements';
import { MarkerL } from '../Works/WorkElements';

const Main = () => {
        
  const history = useHistory();
  const [isStillLoading, setIsStillLoading] = useState(true);
  // const [currTrait, setCurrTrait] = useState(0);

  const location = useLocation();
  let currPage = location.pathname.split("/").pop();

  useEffect(() => {
    const onPageLoad = () => {
      // alert("hi");
      // toggleLight;
      history.push('/reality1');
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  // const t1 = { name: 'Austin Emmanuel Kim', desc: 'UX Designer, Web Developer, Lover of type, Photographer, Experiential Advisor, Ableton Lover, Curator, Blogger', img: 'test/pic3.png', tags: ['UX Design', 'Figma', 'React.JS'] }
  // const t2 = { name: '김호연', desc: 'my given korean name.', img: 'test/pic5.png', tags: ['2UX Design', 'Figma', 'React.JS'] }
  // const t3 = { name: 'nektine', desc: 'my given instagram name.', img: 'test/pic4.png', tags: ['3UX Design', 'Figma', 'React.JS'] }
  // const t4 = { name: 'goreum_b', desc: 'my given artist name, korean roots.', img: 'test/pic1.png', tags: ['4UX Design', 'Figma', 'React.JS'] }
  
  // const myTraits = [ t1, t2, t3, t4 ];

  // const traitContainerRef = useRef();

  // let observerOptions = {
  //   root: traitContainerRef.target,
  //   rootMargin: '-24% 0px -75% 0px',
  // }

  // const traitRefs = [];
  // traitRefs.push(useRef());
  // traitRefs.push(useRef());
  // traitRefs.push(useRef());
  // traitRefs.push(useRef());
  // traitRefs.push(useRef());

  // useEffect (() => {
  //     for (var i = 0; i < myTraits.length; i++) { 
  //         const observer = new IntersectionObserver((traitsList) => {
  //           if (traitsList[0].isIntersecting) {
  //             console.log("target id", traitsList[0].target.id);
  //             console.log("scroll - curr trait", currTrait);
  //             setCurrTrait(traitsList[0].target.id);
  //             traitsList[0].target.style.opacity = 1.0;
  //           } else {
  //             traitsList[0].target.style.opacity = 0.4;
  //           }
  //         }, observerOptions)
  //         observer.observe(traitRefs[i].current);
  //     }
  // }, [])

  // const handleClick = async event => {
  //   traitRefs[event].current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // let traits_list = myTraits.map((trait, index) => {
  //   return (
  //     <Info id={index} ref={traitRefs[index]} onClick={() => handleClick(index)}>{trait.name}
  //       {/* <a> {trait.</a> */}
  //       {/* <img src={trait.img}/> */}
  //     </Info>
  //   )
  // });

  // console.log("curr trait val", currTrait);
  // console.log("curr trait", myTraits[currTrait]);

  return (
      <Container>
            {/* <AboutMe
              ref={traitContainerRef}
              as={motion.div} 
              initial={{ x: 0, y: '-100vh' }} 
              animate={{ x: 0, y: '0vh' }}
              exit={{ x: 0, y: '-100vh', transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.1,
              } }}
              transition={{
              type: "tween",
              ease: [0.28, 1.35, 1.5, .91],
              duration: 0.3 }}
            >
              {traits_list}
            </AboutMe>
            <IndexLink currpage={currPage} thispage={'works'} to="/everythingicaretoshare">Index</IndexLink>
            <Actions
              as={motion.div} 
              initial={{ x: 0, y: '-100vh' }} 
              animate={{ x: 0, y: '0vh' }}
              exit={{ x: 0, y: '-100vh', transition: {
                type: "tween",
                ease: [0.7, 0, 0.13, 1],
                duration: 0.2,
              } }}
              transition={{
              type: "tween",
              ease: [0.5, 1.1, 1.2, .8],
              duration: 0.25 }}
            >
              <Desc>{myTraits[currTrait].desc}</Desc>
              <Location><p>40.70270,-73.91847</p><p>Brooklyn, NY</p></Location>
            </Actions> */}
          {/* <MarkerL /> */}
      </Container>
  );
};

export default withRouter((Main));