import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    // z-index: 999;
    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100vw;
    // height: 100vh; 
`

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh; 
    // border: 5px solid green;

    /* background: ${props => props.theme.bgBlur}; */
    /* background: blue; */
    background-color: rgba(0, 0, 0, 0.1);
    /* opacity: 0; */
    /* backdrop-filter: blur(13px); */
`

export const Fun = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        text-align: center;
        align-items: center;
        object-fit: scale-down;
    }

    @media screen and (max-width: 767px) {
        display: none;
    }
`