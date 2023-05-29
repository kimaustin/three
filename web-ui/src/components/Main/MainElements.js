import styled from 'styled-components';
import { keyframes } from "styled-components";
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    overflow: hidden;

    /* background: ${props => props.theme.bg}; */

    /* text-align: center; */
    /* justify-content: center; */
    /* align-content: center; */
    /* align-items: center; */

    /* cursor: url("../imgs/c_main.svg"), crosshair; */
    /* cursor: crosshair; */

    img {
        /* max-height: 35vh; */
        position: absolute;
        left: 42.5%;
        top: 50%;
        transform: translate(0, -52%);
        width: 15vw;

        max-height: 37vh;
        /* max-width: 17.5vw; */
        /* width: 18vw; */
        object-fit: cover;
        /* border: 1px solid #201D17; */
    }

`;

export const Logo = styled.div`
    position: fixed;
    left: calc(50vw - 9px);
    top: calc(50vh - 9px);
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;
    border: 1px solid ${props => props.theme.border};
`

export const AboutMe = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100vw);
    height: calc(100vh);
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: calc(74vh - 10px);
    padding-top: calc(24vh - 2px);
    padding-left: 5vw;
    padding-right: 62vw;
    z-index: 999;

    /* border: 1px solid blue; */

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }
`

export const Info = styled.div`
    font-size: 14px;
    /* letter-spacing: 0.2px; */
    margin-bottom: 10px;
    scroll-margin-top: calc(24vh - 2px);

    &:hover {
      color: green;
    }

    img {

      /* opacity: 0.5; */
      border 1px solid blue;
      width: 20%;
      height: 20%;
      object-fit: contain;
    }
`

export const Desc = styled.div`
    font-size: 13px;
    letter-spacing: 0.2px;
    line-height: 155%;
    margin-bottom: 16px;
    scroll-margin-top: calc(24vh - 2px);

    &:hover {
      color: green;
    }
`

export const IndexLink = styled(LinkRouter)`
  z-index: 999;
  position: fixed;
  left: 5vw;
  /* bottom: calc(100vh - 76vh + 24vh - 110px); */
  bottom: 110px;
  margin-top: 50px;
  color: ${props => props.theme.primary};
  font-size: 14px;
  text-decoration: none;
  /* height: calc(76vh - 100px); */
  /* top: calc(24vh - 10px); */
  
  &:hover {
    text-decoration: underline;
  }
`

export const Actions = styled.div`
  z-index: 1000;
  display: grid;
  // grid-template-columns: 1fr 1fr 2fr;
  /* grid-template-rows: 1fr 1fr; */

  position: fixed;
  width: 19vw;
  height: calc(76vh - 100px);
  left: 49.5vw;
  top: calc(24vh - 10px);
  text-align: left;

  transition: 0.1s all ease-in-out;
  user-select: none;
  pointer-events: none;

` 

export const Location = styled.div`
  position: absolute;
  bottom: 0;
  /* height: 30px; */
  /* margin-top: 2px; */
  // width: 80%;
  /* align-content: start; */

  color: ${props => props.theme.secondary};
  // opacity: 0.9;
  /* text-decoration: none; */
  // text-transform: uppercase;
  font-size: 13px;
  line-height: 145%;
  /* font-family: "SS3"; */

  @media screen and (max-width: 767px) {
    margin-top: unset;
    // padding-top: 6px;
    align-content: end;
    float: right;
    text-align: right;
    font-size: 9px;
  }
`