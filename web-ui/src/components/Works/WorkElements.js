import styled, { css } from 'styled-components'
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 998;
  width: calc(100vw);
  height: calc(100vh);

  ::-webkit-scrollbar {
    display: none;
  }

  overflow: hidden;

  /* background-image: url("fun/bg0.jpg"); */

`

export const Divider = styled.div`
  z-index: 999;
  position: fixed;
  left: calc(46px + 31vw);
  top: 0;
  height: 100vh;

  border-left: 1px solid ${props => props.theme.border};

  @media screen and (max-width: 767px) {
    opacity: 0;
    display: none;
  }
`

export const MarkerL = styled.div`
  position: fixed;
  left: calc(5vw - 22px);
  top: calc(12vh + 3px);
  width: 100px;
  height: 7px;
  border-radius: 12px;
  background: black; 

  @media screen and (max-width: 767px) {
    display: grid;
    font-size: 12px;
    font-weight: 600;
    left: 4px;
    /* border-bottom: 4px solid ${props => props.theme.primary}; */
    top: calc(48vh - 8px);
    width: 8px;
  } 
`;

export const MarkerR = styled.div`
  position: fixed;
  left: calc(32vw + 46px - 12px);
  top: calc(48vh - 1.5px);
  width: 12px;
  border-bottom: 4px solid ${props => props.theme.primary};

  @media screen and (max-width: 767px) {
      left: unset;
      border-bottom: 4px solid ${props => props.theme.secondary};
      right: 0;
      top: calc(48vh - 1.5px);
      width: 7px;
      display: none;
  }
`;

export const WorkListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100vw);
  height: calc(100vh);
  overflow-y: scroll;
  /* border: 1px solid blue; */
  /* padding-bottom: calc(51vh - 62px + 0.8rem); */
  /* padding-bottom: calc(100vh - 24px - 12px); */
  /* padding-bottom: 20px; */
  padding-bottom: 10vh;
  /* padding-top: calc(48vh - 128px - 1.8rem + 103px); */
  padding-top: 18px;
  /* padding-top: 40vh; */
  padding-left: 8px;
  /* padding-left: 34px; */
  padding-right: calc((((100vw - 16px) / 12) * 9) - 24px);
  z-index: 999;

  overflow-x: hidden; 

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  /* -webkit-overflow-scrolling: touch; */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 767px) {
    z-index: 999;
    padding-right: calc(57vw + 16px);
    /* padding-right: unset; */
    /* width: 42vw; */
    /* width: 42vw; */
    padding-top: 5vh;
    padding-left: 8px;
    padding-bottom: 12px;
  }
`;


export const Indicator = styled.div`
    position: absolute;
    margin-top: 9px;
    /* right: calc((((100vw - 16px) / 12) * 9) + 20px); */
    /* right: calc((((100vw - 16px) / 12) * 9 - 40px)); */
    left: 15px;
    user-select: none;
    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: ${props => ((props.outlined) ? props.theme.primary : props.theme.bg)};

    @media screen and (max-width: 767px) {
      display: none;
    }
`

export const WorkItem = styled.div`
  display: grid;
  width: fit-content;
  /* max-width: 100%; */
  margin-bottom: 2px;
  margin-left: 28.5px;
  scroll-margin-top: calc(16px);
  padding: 2px 4px 3px 4px;
  pointer-events: ${({ filtered }) => (filtered ? 'auto' : 'none')};  

  /* opacity: ${({ filtered, selected }) => ((filtered || selected) ? '1' : '0.4')}; */
  opacity: ${({ filtered }) => ((filtered) ? '1' : '0.35')};
  /* font-weight: ${({ outlined }) => ((outlined) ? 'medium' : 'none')}; */
  /* letter-spacing: ${({ outlined }) => ((outlined) ? '2.5px' : 'auto')}; */
  /* text-transform:  ${({ outlined }) => ((outlined) ? 'uppercase' : 'none')}; */
  /* text-transform:  ${({ outlined }) => ((outlined) ? 'uppercase' : 'none')}; */
  /* padding-left:  ${({ outlined }) => ((outlined) ? '4.5px' : 'none')}; */
  /* padding-right:  ${({ outlined }) => ((outlined) ? '3px' : 'none')}; */
  /* margin-left:  ${({ outlined }) => ((outlined) ? '18px' : 'none')}; */
  /* margin-left:  ${({ outlined }) => ((outlined) ? '14px' : 'none')}; */
  /* margin-top:  ${({ outlined }) => ((outlined) ? '9px' : 'none')}; */
  /* margin-bottom:  ${({ outlined }) => ((outlined) ? '8px' : 'none')}; */
  /* text-decoration: ${({ outlined }) => ((outlined) ? 'underline' : 'none')}; */
  /* border: 1px solid ${({ selected, filtered }) => ((selected && filtered) ? 'black' : 'white')}; */
  /* border: 1px solid ${({ selected, filtered }) => ((selected && filtered) ? '${props => props.theme.primary}' : '${props => props.theme.bg}')}; */
  /* border: 1px solid ${({ outlined }) => (outlined ? 'green' : '${props => props.theme.bg}')}; */
  border: 1.5px solid ${props => ((props.outlined) ? props.theme.primary : props.theme.bg)};

  /* background: ${props => props.theme.bg}; */
  /* text-decoration-color: ${props => props.theme.primary}; */
  /* text-decoration-thickness: 3px; */
  user-select: none;
  
  color: ${props => props.theme.primary};

  /* color: ${props => ((props.outlined) ? props.theme.bg : props.theme.primary)}; */
  /* background: ${props => ((props.outlined) ? props.theme.primary : props.theme.bg)}; */

  font-size: 30px;
  text-align: left;
  line-height: 113%;

  &:hover {
    /* opacity: 1; */
    cursor: pointer;
    /* border: 1.5px solid ${props => props.theme.primary}; */
    /* text-decoration: underline; */
    /* font-weight: bold; */
    /* margin-left: 14px; */

    opacity: ${props => ((props.outlined) ? 1 : 0.6 )};

    ${Indicator} {
      background-color: ${props => props.theme.primary};
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
    width: fit-content;
    /* width: unset; */
    margin-left: unset;
    /* font-weight: ${({ outlined }) => ((outlined) ? 'bold' : 'none')}; */
    /* text-decoration: ${({ outlined }) => ((outlined) ? 'underline' : 'none')}; */
    text-transform: unset;
    letter-spacing: unset;
    margin-top: unset;
    /* width: calc(50vw - 16px); */
    /* text-align:  ${({ outlined }) => ((outlined) ? 'right' : 'none')}; */
    /* color: ${props => ((props.outlined) ? props.theme.bg : props.theme.primary)};
    background: ${props => ((props.outlined) ? props.theme.primary : props.theme.bg)}; */

    font-size: 14px;
    max-width: 80vw;
    /* overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
  }
`;


export const ToTop = styled.div`
  /* margin-top: 50px; */
  margin-top: 30vh;
  margin-left: 4px;
  /* width: fit-content; */
  text-align: right;

  font-size: 15px;
  color: ${props => props.theme.primary};
  font-style: italic;
  /* font-weight: 600; */

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    margin-top: 28vh;
    margin-left: unset;
    margin-bottom: 140px;
  }
`










export const DetailsContainer = styled.div`
  opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')};
  /* z-index: -1; */
  z-index: -1;
  /* border: 1px solid blue; */


  @media screen and (max-width: 767px) {
    position: fixed;
    /* top: 10vh; */
    /* top: 12px; */
    top: 0;
    padding-top: 1vh;
    max-height: calc(100vh - 98px);
    left: calc(42vw + 8px);
    /* left: 33.3vw; */

    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    /* z-index: 999; */

    overflow-y: hidden;
  }
`

export const WorkImageContainer = styled.div`
  position: fixed;
  /* top: calc(13.1vh); */
  top: 0;
  left: calc(((100vw) / 12) * 6 + 14px);
  left: calc(((100vw) / 12) * 3.2 + 74px);

  padding-top: 10.5vh;
  padding-bottom: calc(100px);

  text-align: left;
  align-items: start;
  align-content: start;

  display: grid;
  width: calc(30vw - 14px);
  /* height: calc(86.9vh - 70px); */
  height: 100vh;

  /* border: 1px solid green; */

  z-index: 999;
  overflow-y: scroll;
  overflow-x: hidden;


  -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

  @media screen and (max-width: 767px) {
    position: unset;
    padding-top: unset;
    width: calc(58vw - 20px);
    height: fit-content;
    height: 40vh;
    left: calc(50vw + 8px);
    align-items: start;
    align-content: start;
  }
`

export const WorkImage = styled.div`
  z-index: 999;
  width: calc(30vw - 14px);
  /* height: 39vh; */
  /* height: calc(66vh - 80px); */
  text-align: left;
  align-items: start;
  align-content: start;
  
  /* background: red; */

  img {
        /* display: block; */
        object-fit: scale-down;
        /* width: 100%;
        max-height: calc(49vh - 80px); */

        max-width: calc(30vw - 14px);
        max-height: 100%;

        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
        text-align: left;
        align-items: start;
        align-content: start;
        border: 0.25px solid ${props => props.theme.border};

        margin-bottom: 6px;
    }

  @media screen and (max-width: 767px) {
    width: calc(58vw - 20px);
    /* height: 39vh; */
    height: fit-content;

    align-items: end;
    align-content: end;

    img {
      max-width: calc(58vw - 20px);
      align-items: start;
      align-content: start;
    }
  }
`

export const WorkDate = styled.div`
  position: fixed;
  top: 18px;
  left: calc(((100vw) / 12) * 3  + 54px);
  left: calc(((100vw) / 12) * 7.3 + 14px);


  color: ${props => props.theme.primary};
  font-style: italic;
  font-size: 15px;

  /* border: 1px solid blue; */

  @media screen and (max-width: 767px) {
    opacity: 0.75;
    position: unset;
    font-size: 11px;
    margin-bottom: 2vh;
    margin-top: 8px;
    /* margin-bottom: 34px; */
  }
`

export const WorkPreview = styled.div`
  z-index: 999;

  position: fixed;
  /* height: fit-content; */
  width: calc((((100vw) / 12) * 2));
  left: calc(((100vw) / 12) * 3 + 54px);
  left: calc(((100vw) / 12) * 7.3 + 14px);

  /* border: 1px solid green; */

  top: calc(10.5vh - 3.5px);
  text-align: left;

  @media screen and (max-width: 767px) {
    position: unset;
    margin-top: 6px;
    width: calc(58vw - 20px);
`;

export const Desc = styled.div`
  color: ${props => props.theme.primary};
  line-height: 140%;
  /* opacity: 0.85; */
  font-size: 15px;
  
  /* border: 1px solid green; */

  user-select: none;
  pointer-events: none;

  @media screen and (max-width: 767px) {
    /* opacity: 0.8; */
    font-size: 12px;
  }
`;

export const Link = styled.div`
  z-index: 1000;
  /* opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')}; */

  line-height: 153%;
  font-size: 10px;

  /* position: fixed; */
  /* height: fit-content; */
  max-width: calc((((100vw - 16px) / 12) * 3) - 90px);
  /* border: 1px solid green; */
  /* width: calc((((100vw) / 12) * 3) - 80px); */
  /* width: 100%; */

  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis ["..."];

  /* top: 50vh; */
  /* padding-right: 18px; */
  /* top: 10vh; */
  /* top: calc(13vh - 30px); */

  text-decoration: none;

  left: calc(((100vw - 16px) / 12) * 3);

  a { 
    color: ${props => props.theme.cs};
  }

  &:hover {
    text-decoration: underline;
  }


  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileLink = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: fixed;
    z-index: 10000;
    max-width: calc(58vw - 20px);
    width: fit-content;
    opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')};
    background: ${props => props.theme.cs};

    bottom: 70px;
    left: calc(42vw + 8px);
    /* left: calc(58vw + 8px); */
    font-size: 14px;
    line-height: 150%;

    /* bottom: 58px; */
    /* right: calc(-45vw + 4px); */
    /* transform-origin: 0 0; */
    /* transform: rotate(-90deg); */

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis ["..."];

    a { 
      color: ${props => props.theme.bg};
    }
  }
`;


export const CaptionText1 = styled.div`
  z-index: 999;
  width: 30vw;
  text-align: left;
  align-items: start;
  align-content: start;

  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const CaptionText2 = styled.div`
  z-index: 999;
  width: 30vw;
  text-align: left;
  align-items: start;
  align-content: start;

  font-size: 10px;
  font-style: italic;
  margin-top: 4px;
  margin-bottom: 10px;
`













export const FiltersContainer = styled.div`
    position: fixed;
    /* top: 0; */
    left: calc(((100vw) / 12) * 3 + 54px);
  left: calc(((100vw) / 12) * 7.3 + 14px);

    /* left: 24vw; */
    bottom: 17px;
    /* bottom: 12vw; */
    /* left: 50vw; */
    display: grid;
    margin-top: 30vh;
    /* text-align: left; */
    /* height: ; */
    /* width: 46px; */
    /* width: 100vw; */
    /* background: #1E1C1F; */
    /* background: green; */
    /* background: ${props => props.theme.bgNav}; */
    /* backdrop-filter: blur(12px); */
    /* border-right: .5px solid ${props => props.theme.border}; */
    z-index: 1000;

    @media screen and (max-width: 767px) {
       display: none;
    }
`

export const Filter = styled.div`
    margin-top: 1px;
    /* width: 100%; */
    width: fit-content;
    /* height: 30px; */
    /* padding-top: */
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 40px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    opacity: ${({ active }) => (active ? '0.9' : '0.35')};

    /* border: 1px solid green; */
    // WHEN ACTIVE, SHOW X ON HOVER

    a {
      opacity: 0;
      font-size: 20px;
    }

    ${props => props.active && css`
      &:hover {
        a {
          opacity: .95;
        }
      }
   `}

    &:hover {
        /* opacity: ${({ active }) => (active ? '0.6' : '0.85')}; */
        opacity: .9;
        /* text-decoration: ${({ active }) => (active ? 'underline' : 'none')}; */
        cursor: pointer;
        
        /* a {
          opacity: ${({ active }) => (active ? '0.95' : '0')};
        } */
    }
`

export const ClearFilters = styled.div`
    /* position: fixed;
    left: calc(((100vw - 16px) / 12) * 3); */
    color: ${props => props.theme.primary};
    width: fit-content;

    text-decoration: none;
    font-size: 15px;

    margin-bottom: 6px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    opacity: ${({ active }) => (active ? '1' : '0.3')};
    /* opacity: 0.5; */

    /* padding: 4px 8px 2px 7px; */
    /* border: 1px solid ${props => props.theme.primary}; */
    /* background: ${props => props.theme.bg}; */
    font-size: 15px;
    /* border: 1px solid blue; */
    /* transform-origin: 0 0;
    transform: rotate(-90deg); */

    &:hover {
        /* opacity: 1; */
        text-decoration: underline;
      /* background: ${props => props.theme.primary}; */
      /* color: ${props => props.theme.bg}; */
      cursor: pointer;
    }
`

export const NavDOMLinkAbout = styled.div`
    position: fixed;
    z-index: 1000;

    /* left: calc(((100vw) / 12) * 3 + 20px); */
    right: 16px;
    top: calc(50vh - 60px);
    /* left: calc(((100vw) / 12) * 6 + 60px);
    top: 16px; */
    /* bottom: 14px; */
    /* bottom: 8vh; */
    /* bottom: 2.5vh; */

    text-decoration: none;
    
    font-size: 21px;
    /* opacity: 0.3; */
    color: ${props => props.theme.primary};
    background: ${props => props.theme.bg};
    border: 1px solid ${props => props.theme.primary};

    padding-top: 3px;
    padding-bottom: 1px;
    padding-left: 6px;
    padding-right: 6px;
    padding: 5px 8px 4px 8px;


    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
        /* opacity: 0.9; */
        cursor: pointer;
        color: ${props => props.theme.bg};
        background: ${props => props.theme.primary};
    }


    @media screen and (max-width: 875px) {
      top: 7.5vh;
    }
    
    @media screen and (max-width: 767px) {
      z-index: 1000;
      opacity: 0.9;
      font-size: 30px;
      bottom: 6px;
      top: unset;
      left: unset;
      right: 10px;
      opacity: 1;
      /* right: 60px; */
      /* display: none; */

      right: 8px;
      bottom: 13px;
      padding: 5px 9px 3px 9px;
      border: 1px solid ${props => props.theme.primary};
      background: ${props => props.theme.bg};
      font-size: 16px;
    }
`

export const FiltersToggle = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    width: fit-content;
    z-index: 1000;
    display: grid;
    position: fixed;
    left: calc(42vw + 8px);
    bottom: 7px;
    text-align: right;
    /* opacity: 0.9; */

    color: ${props => props.theme.primary};
    font-weight: 200;
    font-size: 30px;

    padding: 5px 9px 3px 9px;
    border: 1px solid ${props => props.theme.primary};
    background: ${props => props.theme.bg};
    font-size: 16px;
    bottom: 13px;
    left: calc(42vw + 8px);
  }
`;














export const TagsContainer = styled.div`
  // padding-left: 12%;
  // width: 88%;
  // color: #C0C0C0;
  // font-size: 13px;
  // font-family: "OpenSans"
  display: inline-block;
  // position: relative;
  // bottom: 0;
  align-items: start;
  text-align: left;

  @media screen and (max-width: 767px) {
    // margin-top: -20px;
    // display: none;
  }
`;

export const ProjectTag = styled.a`
  color: ${props => props.theme.secondary};
  font-family: "OpenSans";
  // height: 26px;
  font-size: 12px;
  // writing-mode: vertical-rl;
  padding-right: 12px;
  // overflow: hidden; 
  // text-overflow: ellipsis;

  @media screen and (max-width: 767px) {
    font-size: 11px;
    padding-left: 0;
    padding-right: 8px;
  }
`;















