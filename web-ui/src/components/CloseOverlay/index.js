// import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Container, Fun, Overlay } from './CloseOverlayElements';

const CloseOverlay = ({isOpen, aboutToggle, toggleAbout, mobileToggle}) => {
    return (
        <Container>
            <Overlay
                // showInfo={isOpen}
                as={motion.div} initial={{ opacity: 0, zIndex: -1 }} 
                animate={isOpen ? { opacity: 1, zIndex: 999 } : { opacity: 0, zIndex: -1 }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.0
                }}
                onClick={mobileToggle}
            />
            <Overlay 
                // showInfo={aboutToggle}
                as={motion.div} initial={{ opacity: 0, zIndex: -1 }} 
                animate={aboutToggle ? { opacity: 1, zIndex: 999 } : { opacity: 0, zIndex: -1
                    // transition: {
                    // type: "tween",
                    // ease: [0.7, 0, 0.13, 1],
                    // duration: 0.6,
                    // delay: 0.2
                    // } 
                }}
                transition={{
                type: "tween",
                ease: [0.28, 1.35, 1.5, .91],
                duration: 0.0
                }}
                onClick={toggleAbout}
            >
                <Fun>
                    <img src="star.png"/>
                </Fun>
            </Overlay>
        </Container>
    );
};

export default CloseOverlay;
 