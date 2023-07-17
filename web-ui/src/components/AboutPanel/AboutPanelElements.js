import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1000;
    display: block;
    position: fixed;
    /* left: 15vw; */
    left: 23vw;
    top: 27vh;
    width: 54vw;
    height: 45vh;
    overflow: hidden;

    /* opacity: 0.7;  */
    /* background: #403939; */
    background: ${props => props.theme.bg};

    /* opacity: 0.5; */

    border: .75px solid ${props => props.theme.primary};;
    /* filter: blur(-2x); */
    /* -webkit-filter: blur(-1.5px); */
    /* cursor: url("/imgs/cursor1.svg"), auto; */

    @media screen and (max-width: 767px) {
        width: 100vw;
        border-right: unset;
        /* backdrop-filter: blur(10px); */
        display: none;
    }
`

export const Content = styled.div`
    overflow: hidden;
    /* width: 100%; */
    max-width: 64%;
    z-index: 999;

    /* background: green; */
    /* position: absolute; */
    /* bottom: 0; */

    padding-right: 10px;
    padding-left: 12px;
    padding-top: 15px;
    padding-bottom: 12px;
    pointer-events: none;

    text-align: left;

    @media screen and (max-height: 640px) {
        display: none;
    }
`

export const Logo = styled.div`
    width: 18px;
    height: 18px;
    background-image: url("logo.png");
    background-size: cover;
    border: 1px solid ${props => props.theme.border};
`

export const Name = styled.div`
    display: flex;
    line-height: 100%;
    /* position: fixed; */
    /* left: 12px; */
    /* top: 14px; */
    
    /* padding-top: 22px; */
    padding-bottom: 8px;
    /* padding-bottom: 12%; */

    color: ${props => props.theme.primary};
    font-size: 28px;
    font-weight: 300;
    /* letter-spacing: 0.25px; */
`

export const Divider = styled.div`
    z-index: -1;
    position: fixed;
    height: 45vh;
    width: 1px;
    right: 42.5%;
    border-left: 1px solid ${props => props.theme.border};
`

export const Styled1 = styled.span`
    display: flex; 
    width: 100%;
    color: ${props => props.theme.secondary};;
    font-size: 13px;
    line-height: 138%;
    padding-bottom: 8px;
`

export const Styled2 = styled.div`
    display: flex;
    padding-top: 20px;
    /* width: calc(55% - 24px); */
    /* margin-top: 18px; */
    
    color: ${props => props.theme.primary};;
    font-size: 15px;
    line-height: 147%;
`

export const Styled3 = styled.div`
    position: absolute;
    /* right: 12px; */
    bottom: 12px;
    /* max-width: calc(25% + 12px); */
    /* width: calc(50% - 24px); */
    padding-top: 18px;
    
    /* text-align: right; */
    font-size: 13px;
    line-height: 135%;
    opacity: 0.5;

    /* border: 1px solid blue; */
`

export const Bottom = styled.div`
    position: absolute;
    padding-left: 12px;
    /* padding-right: 50%; */
    bottom: 10px;
    /* width: 100%; */
    right: 13px;
    /* background: green; */

    text-align: right;
    overflow: hidden;
    z-index: 997;
`

export const Close = styled.p`
    z-index: 999;
    position: absolute;
    top: 13px;
    right: 13px;
    color: ${props => props.theme.primary};;
    font-size: 15px;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Side = styled.div`
    z-index: 999;
    height: 7.5vw;
    width: 15.7vw;
    position: fixed;
    font-size: 8vw;
    letter-spacing: -.3vw;
    bottom: 7.5vh;
    left: 88.25vw;
    /* border: 1px solid black; */
    transform: rotate(90deg);

    @media screen and (max-width: 768px) {
        display: none;
    }    
`

export const Desc = styled.p`
    /* color: black; */
    font-family: SpaceMono;
    font-size: 1rem;
    line-height: 110%;
    pointer-events: none;
`

export const Resume = styled.div`
    overflow: hidden;
    /* position: absolute; */
    width: 100%;
    /* height: ; */
    /* left: 0.5rem; */

    /* padding-left: .85rem; */
    /* padding-top: -3rem; */
    padding-right: .85rem;
    font-size: 1.6rem;
    /* cursor: pointer; */
    border-bottom: 1.5px solid white;

    &:hover {
        background: black;
        color: white;        
        /* transition: 0.2s all ease-in-out; */
    }
`

export const ProfileContainer = styled.div`
    /* position: fixed; */
    /* margin-top: 1rem; */
    /* margin-left: 2.5rem; */
    /* margin-right: 2rem; */
    /* margin-top: 2.35rem; */
    display: block;
    width: calc(20vw - 1.9rem);
    width: 100%;
    height: 37.5%;

    border-bottom: 1px solid ${props => props.theme.border};;
    /* width: 100%; */
    overflow: hidden;

    img {
        display: block;
    }

    @media screen and (max-height: 998px) {
        display: none;
    }

    @media screen and (max-height: 1000px) {
        height: 15%;
    }
`

export const ResumeDownload = styled.div`
    /* height: 100%; */
    display: flex;
    align-items: center;
    float: none;
    /* width: fill; */
    text-decoration: none;
    /* padding-left: .85rem; */
    /* padding-right: .85rem; */
    padding: .85rem;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 70px;
    font-size: 1.5rem;
    /* cursor: pointer; */

    &:hover {
        background: black;
        color: white;        
        /* transition: 0.2s all ease-in-out; */
    }
`

export const ImageSide = styled.div` 
    overflow: hidden;
    position: absolute;
    display: block;
    width: 40vw;
    z-index: 0;
    /* left: 51vw; */
    left: 6rem;
    bottom: -80vh;
    opacity: 1;
    /* transition: 0.5s all ease-in-out; */
    border: 3px solid black;

    /* &:hover {
        display: none;
    } */
    
    ${Resume}:hover & {
       bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        /* width: 96vw; */
        width: 40vw;
        height: 40vw;
        left: 0.5rem;
    }
`

export const Social = styled.a`
    display: list-item;
    z-index: 990;
    width: 100%;

    overflow: hidden;

    padding-top: 4px;
    /* font-family: 'SS3'; */
    font-size: 26px;

    color: ${props => props.theme.primary};;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

`