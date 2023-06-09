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
  /* padding-bottom: calc(51vh - 62px + 0.8rem); */
  /* padding-bottom: calc(100vh - 24px - 12px); */
  padding-bottom: 16px;
  /* padding-top: calc(48vh - 128px - 1.8rem + 103px); */
  padding-top: 6px;
  padding-left: 10px;
  padding-right: calc((((100vw - 16px) / 12) * 9) + 32px);
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
    padding-right: calc(57vw + 12px);
    padding-left: 8px;
    padding-bottom: 12px;
  }
`;

export const WorkItem = styled.div`
  display: grid;
  width: fit-content;
  margin-bottom: 4px;
  scroll-margin-top: calc(6px);

  /* opacity: ${({ filtered, selected }) => ((filtered || selected) ? '1' : '0.4')}; */
  opacity: ${({ filtered }) => ((filtered) ? '1' : '0.35')};
  /* opacity: ${({ selected }) => ((selected) ? '1' : '0.4')}; */

  text-decoration: ${({ selected, filtered }) => ((selected && filtered) ? 'underline' : 'none')};
  text-decoration-color: ${props => props.theme.primary};
  pointer-events: ${({ filtered }) => (filtered ? 'auto' : 'none')};  
  
  color: ${props => props.theme.primary};
  font-size: 14px;
  text-align: left;
  line-height: 145%;

  &:hover {
    /* opacity: 1; */
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    width: fit-content;
    /* width: calc(50vw - 16px); */
  }
`;

export const ToTop = styled.div`
  /* margin-top: 50px; */
  margin-top: 55vh;
  width: fit-content;

  font-size: 14px;
  color: ${props => props.theme.primary};
  font-style: italic;
  /* font-weight: 600; */

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    margin-top: 28vh;
    margin-bottom: 140px;
  }
`

export const Indicator = styled.div`
    // position: fixed;
    width: 8px;
    height: 8px;
    // margin-right: 6px;  
    // padding-top: -20px;
    // padding-bottom: -17px;
 
    // top: 78px;

    // border: 1px solid green;

    background: #FFFFFF;
    // opacity: 0.8;
`










export const DetailsContainer = styled.div`
  opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')};
  /* z-index: -1; */
  z-index: -1;

  @media screen and (max-width: 767px) {
    position: fixed;
    /* top: 10vh; */
    /* top: 12px; */
    top: 6px;
    max-height: calc(100vh - 98px);
    left: calc(42vw + 8px);

    /* border: 1px solid blue; */
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    ::-webkit-scrollbar {
      display: none;
    }

    overflow-y: scroll;
  }
`

export const WorkDate = styled.div`
  position: fixed;
  top: 6px;
  /* top: 12px; */
  left: calc(((100vw - 16px) / 12) * 3);

  color: ${props => props.theme.primary};
  font-style: italic;
  font-size: 14px;

  /* border: 1px solid blue; */

  @media screen and (max-width: 767px) {
    opacity: 0.75;
    position: unset;
    font-size: 11px;
    margin-bottom: 9vh;
    /* margin-bottom: 34px; */
  }
`

export const WorkImageContainer = styled.div`
  position: fixed;
  width: 23vw;
  top: calc(13vh);
  left: calc(((100vw - 16px) / 12) * 6);
  text-align: left;
  align-items: start;
  align-content: start;
  
  /* border: 1px solid green; */

  @media screen and (max-width: 767px) {
    position: unset;
    width: calc(58vw - 20px);
    height: fit-content;
    left: calc(50vw + 8px);
    align-items: end;
    align-content: end;
  }
`

export const WorkImage = styled.div`
  z-index: 999;
  width: 23vw;
  height: 39vh;
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

        max-width: 23vw;
        max-height: 100%;

        /* background-image: #201D17; */
        /* padding-left: 3.25rem; */
        text-align: left;
        align-items: start;
        align-content: start;
        border: 0.25px solid ${props => props.theme.border};
    }

  @media screen and (max-width: 767px) {
    width: calc(58vw - 20px);
    /* height: 39vh; */
    height: fit-content;

    align-items: end;
    align-content: end;

    img {
      max-width: calc(58vw - 20px);
      align-items: end;
      align-content: end;
    }
  }
`

export const WorkPreview = styled.div`
  z-index: 999;

  position: fixed;
  /* height: fit-content; */
  width: calc((((100vw - 16px) / 12) * 3) - 44px);
  left: calc(((100vw - 16px) / 12) * 3);

  top: 13vh;
  text-align: left;

  @media screen and (max-width: 767px) {
    position: unset;
    margin-top: 4px;
    width: calc(58vw - 20px);
`;

export const Desc = styled.div`
  color: ${props => props.theme.primary};
  line-height: 153%;
  font-size: 12px;
  
  user-select: none;
  pointer-events: none;

  @media screen and (max-width: 767px) {
    /* opacity: 0.8; */
    font-size: 12px;
  }
`;

export const Link = styled.a`
  z-index: 1000;
  /* opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')}; */

  line-height: 153%;
  font-size: 12px;

  /* position: fixed; */
  /* height: fit-content; */
  width: calc((((100vw - 16px) / 12) * 3) - 44px);
  /* top: 50vh; */
  /* top: 10vh; */
  top: calc(13vh - 30px);

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

export const MobileLink = styled.a`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: fixed;
    z-index: 10000;
    width: calc(58vw - 20px);
    opacity: ${({ filtered }) => ((filtered) ? '1' : '0.25')};

    bottom: 70px;
    left: calc(42vw + 8px);
    font-size: 14px;
    line-height: 150%;

    a { 
      color: ${props => props.theme.cs};
    }
  }
`;











export const FiltersContainer = styled.div`
    position: fixed;
    /* top: 0; */
    left: calc(((100vw - 16px) / 12) * 3);
    /* left: 24vw; */
    bottom: 10px;
    /* bottom:  */
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
    margin-top: 5px;
    /* width: 100%; */
    width: fit-content;
    /* height: 30px; */
    /* padding-top: */
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-size: 36px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    opacity: ${({ active }) => (active ? '0.9' : '0.35')};

    /* border: 1px solid green; */
    // WHEN ACTIVE, SHOW X ON HOVER

    a {
      opacity: 0;
      font-size: 16px;
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
    font-size: 14px;

    margin-bottom: 7px;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    opacity: ${({ active }) => (active ? '1' : '0.3')};
    /* opacity: 0.5; */

    /* padding: 4px 8px 2px 7px; */
    /* border: 1px solid ${props => props.theme.primary}; */
    /* background: ${props => props.theme.bg}; */
    font-size: 14px;
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

    /* left: 50vw; */
    left: calc(((100vw - 16px) / 12) * 6);
    bottom: 10px;

    text-decoration: none;
    
    font-size: 36px;
    color: ${props => props.theme.primary};
    opacity: 0.3;


    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    @media screen and (max-width: 767px) {
      z-index: 1000;
      opacity: 0.9;
      font-size: 30px;
      bottom: 6px;
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















