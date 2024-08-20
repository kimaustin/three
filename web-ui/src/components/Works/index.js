import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView, inView, InView } from 'react-intersection-observer';
import { connect } from "react-redux";
// import { motion } from "framer-motion";
import { Link as LinkRouter, useHistory, useNavigate, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Container,
  Marker,
  Link,
  ProjectTag,
  WorkDate,
  Desc,
  NavDOMLinkAbout,
  WorkListContainer,
  Indicator,
  WorkItem,
  ClearFilters,
  TagsContainer,
  WorkPreview,
  WorkImageContainer,
  FiltersToggle,
  WorkImage,
  Divider,
  FiltersContainer,
  Filter,
  ToTop,
  DetailsContainer,
  MobileLink,
  CaptionText,
  CaptionText1,
  CaptionText2,
} from "./WorkElements";

// Scrollbar.init(document.querySelector('#my-scrollbar'), options);


const Works = ({ projects, toggle, mobileToggle, clearFilters, filters, photoFilter, audioFilter, projectFilter, studyFilter, fabricFilter }) => {

  const [projectDisplayed, setProjectDisplayed] = useState(0);
  const [hoverAllowed, setHoverAllowed] = useState(true);
  const [imageZoomed, setImageZoomed] = useState(false);

  // //filters
  // const [filters, setFilters] = useState(["case"]);

  // let updateFilters = (type) => {
  //   const tempFilters = [...filters];

  //   if (filters.includes(type)) {
  //     const index = filters.indexOf(type);
  //     tempFilters.splice(index, 1);

  //     console.log("removed: ", type);
  //     console.log("filters", tempFilters);

  //     setFilters(tempFilters);
  //   } else {
  //     tempFilters.push(type);
  //     console.log("added: ", type);
  //     console.log("filters", tempFilters);

  //     setFilters(tempFilters);
  //   }
  // }

  // const [animateProject, setAnimateProject] = useState(999);

  const { ref: myRef1, inView, entry } = useInView({
    rootMargin: '-210px'
  });

  // const myRef1 = useRef();
  // const [selectedProjVisible, setSelectedProjVisible] = useState();

  // console.log('selectedProjVisible: ' + selectedProjVisible);
  
  // if(inView) {
  //   // console.log('ref: ',  myRef1.current);
  //   // console.log('entry', entry);
  //   // console.log('about to update proj desc');
  // }

  const [projectValue, setProjectValue] = useState(0);

  // useEffect(() =>  {
  //   console.log('ref: ' + myRef1.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setSelectedProjVisible(entry.isIntersecting);
  //     // console.log('entry: ' + entry); 
  //   })
  //   observer.observe(myRef1.current);
  // }, []) 

  // const [topVal, setTopVal] = useState("-1px");
  // const [leftVal, setLeftVal] = useState("-1px");

  // console.log(projects.length);
  //TODO: pass in Projects Length as variable instaed of Connecting to Store to retrieve
  // let margin = (64 / projects.length) * .8;
  // let y_index = ((project.id - 1) * margin) + 49;
  // let stringY = y_index + "vh";
  // let stringY2 = (y_index - 2) + "vh";
  // console.log("stringY2: " + stringY2);

  // document.onmousemove = function(event) {
  //   // pointerX = event.screenX + "px";
  //   // pointerY = event.screenY + "px";
  //   if (event.pageY >= (window.innerHeight - 340)) {
  //       setTopVal((event.pageY - 340) + "px");
  //       setLeftVal((event.pageX + 2) + "px");
  //   } else {
  //       setTopVal((event.pageY + 1) + "px");
  //       setLeftVal((event.pageX + 2) + "px");
  //   }
  // }

  // if ( this.state.displayQuestions ) {
  //   questions = (
  //   <div>
  //        { this.state.questions.map((question, index) => {
  //             return <Question key={question.id}
  //             title={question.title} />
  //        })}
  //   </div>
  //   )
  // }

  const toggleImgZoom = () => {
    setImageZoomed(!imageZoomed);
    // console.log("Img Toggle reached.");
    // console.log("curr zoom status: " + imageZoomed);
  };

  const isOdd = (index) => {
    if (index % 2 == 0) {
      return true;
    } else {
      return false;
    }
  };

  // const [header, setHeader] = useState("header");

  // const listenScrollEvent = (event) => {
  //   if (WorkListContainer.scrollY < 250) {
  //     // console.log("got to scroll listener event");
  //   } else if (WorkListContainer.scrollY > 250) {
  //     // console.log("got to scroll listener event");
  //   }
  // // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);

  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  // ----------------------------------------------------------------------------------------
  // ON SCROLL, UPDATE THE IMAGE AND DESCRIPTION DETAILS
  // const changeSelector = () => {
  //   // if scroll = project number * divided value
  //   if(window.scrollY >= 80 && window.scrollY < 250) {
  //       // setCurrImage(true);
  //     console.log("got to scroll listener event");
  //     setProjectDisplayed(2);
  //   } else {
  //       // setCurrImage(false);
  //     }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeSelector)
  // }, []);

  const handleDisplayProject = (index) => {
    var currHoverAllowed = hoverAllowed;
    // console.log("proj: " + projectDisplayed);
    // console.log("hover: " + hoverAllowed);

    if (index > 16) {
      setProjectDisplayed(1);
    } else if (index == 0) {
      setProjectDisplayed(15);
    } else if (index != -1) {
      setProjectDisplayed(index);
      setHoverAllowed(false);
      // console.log("index: " + index);
    } else if (projectDisplayed == index) {
      setProjectDisplayed(-1);
      setHoverAllowed(true);
      // console.log("deselecting");
    } else {
      setHoverAllowed(true);
      // setProjectDisplayed(0);
      // console.log("hover: " + hoverAllowed);
      // console.log("deselecting");
    }
  };

  const togglePage = () => {
    handleDisplayProject(-1);
  };

  // ARROWS TO SWITCH BETWEEN PROJECTS, ANIMATE VERTICALLY

  // function ProjTags({ tag, index, tagsLength }) {
  //   // if (index == tagsLength - 1) {
  //   //   return (
  //   //     <ProjectTag>{tag}.</ProjectTag>
  //   //   );
  //   // } else {
  //   //   return <ProjectTag>{tag}. </ProjectTag>;
  //   // }
  //     return <ProjectTag>{tag}.<br /></ProjectTag>;
  // }

  // let project_previews = projects.map((project) => {
  //   if (project.id < 16) {
  //     return (
  //       <WorkImageItem>
  //         <Image>
  //           <img src={"imgs/" + project.imgs[0]} />
  //         </Image>
  //       </WorkImageItem>
  //     )
  //   }
  // });

  // OLD LIST OF PROJECTS
  // let project_names = projects.map((project) => {
  //   // means no content displayed
  //   var zerofilled = ("0" + project.id).slice(-2);

  //   const tagsDisplayed = project.tags.map((tag, index) => (
  //     <ProjTags
  //       tag={tag}
  //       key={tag.id}
  //       index={index}
  //       tagsLength={project.tags.length}
  //     />
  //   ));

  //   let index_str = "proj" + project.id;

  //   let filteredOut = false;

  //   // if (filterType != 0 && project.type != filterType) {
  //   //   filteredOut = true;
  //   // }

  //   if (project.id < 17) {
  //     console.log("filtered out for " + project.id + ": " + filteredOut);
  //     // if (filterType == 0 || filterType == project.type) {
  //       return (
  //         <WorkItem
  //           as={motion.div}
  //           initial="initial"
  //           animate="in"
  //           exit={projectDisplayed === project.id ? "outSelected" : "outOther"}
  //           variants={pageVariants3}
  //           transition={{
  //             type: "tween",
  //             ease: [0.7, 0, 0.13, 1],
  //             duration: 0.8,
  //             delay: project.id * 0.16,
  //           }}
  //           onClick={() => handleDisplayProject(project.id)}
  //           projectDisplayed={projectDisplayed}
  //           projectId={project.id}
  //           filteredOut={false}
  //         >
  //           <WorkContents
  //             to={"/" + project.id + "/works"}
  //             id={"proj" + project.id}
  //             projectType={project.type}
  //             // filter={filterType}
  //             filteredOut={false}
  //             projectDisplayed={projectDisplayed}
  //             projectId={project.id}
  //           >
  //             <WorkIndex>{zerofilled}</WorkIndex>
  //             <WorkName>{project.name}</WorkName>
  //             <TagsContainer>{tagsDisplayed}</TagsContainer>
  //             <TagsDivider />
  //           </WorkContents>
  //           {/* <Image hoverAllowed={hoverAllowed}>
  //             <img src={"imgs/" + project.imgs[0]} />
  //           </Image> */}
  //         </WorkItem>
  //       );
  //     // }
  //   }
  // });

  // const proj1 = { name: 'June ggg ONE One GGG OOO ggg', type: 'project', semester: 'mar 2023', class_short: 'June', val: 1, isCS: true, imgs: ["testProjCover1.png"], tags: ['UX Design', 'Figma', 'React.JS'], link: 'https://www.junehomes.com' }
  // const proj2 = { name: 'Two', semester: 'june 2022', type: 'case', val: 2, isCS: false, imgs: ["test/pic1.png"], tags: ['2UX Design', 'Figma', 'React.JS'], link: ''}
  // const proj3 = { name: 'three', semester: 'apr 2023', type: 'fabric', val: 3, isCS: false, imgs: ["test/pic2.png"], tags: ['3UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj4 = { name: 'four', semester: 'dec 2021', type: 'project', val: 4, isCS: true, imgs: ["testProjCover4.png"], tags: ['4UX Design', 'Figma', 'React.JS'], link: 'https://www.junehomes.com' }
  // const proj5 = { name: 'super long title super long title super long title super long title super long title super long title super long title super long title super long title', semester: 'nov 2022', type: 'case', val: 5, isCS: false, imgs: ["testProjCover5.png"], tags: ['5UX Design', 'Figma', 'React.JS'], link: '' }
  // const project_0 = { name: 'Heatmaps and Stress Analysis for Digital Objects', semester: 'nov 2022', type: 'case', val: 5, isCS: false, imgs: ["heatmap.jpeg"], tags: ['5UX Design', 'Figma', 'React.JS'], link: 'https://www.are.na/goreum-b/heatmaps-amp-stress-analysis' }
  // const proj6 = { name: 'six', semester: 'mar 2023', type: 'case', val: 6, isCS: false, imgs: ["testProjCover6.png"], tags: ['6UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj7 = { name: 'seven', semester: 'august 2022', type: 'photo', val: 7, isCS: true, imgs: ["testProjCover7.png"], tags: ['7UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj8 = { name: 'eight', semester: 'may 2022', type: 'case', val: 8, isCS: false, imgs: ["testProjCover8.png"], tags: ['8UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj9 = { name: 'nine', semester: 'dec 2025', type: 'photo', val: 9, isCS: false, imgs: ["testProjCover9.png", ""], tags: ['9UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj10 = { name: 'ten!!!!!!!!!!', semester: 'dec 2025', type: 'audio', val: 9, isCS: false, imgs: ["testProjCover9.png", ""], tags: ['9UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj11 = { name: 'this is eleven with a long description', semester: 'dec 3001', type: 'case', val: 9, isCS: false, imgs: ["testProjCover9.png", ""], tags: ['9UX Design', 'Figma', 'React.JS'], link: '' }
  // const proj12 = { name: 'nektine', semester: 'apr 2023', type: 'me', val: 3, isCS: false, imgs: ["test/pic2.png"], tags: ['3UX Design', 'Figma', 'React.JS'], link: 'https://instagram.com/nektine' }
  // const proj13 = { name: 'austin emmanuel kim', semester: 'apr 2023', type: 'me', val: 3, isCS: false, imgs: ["test/pic2.png"], tags: ['3UX Design', 'Figma', 'React.JS'], link: ''}
  
  const p44 = { type: "me", link: "", name: "Austin Hoyeun Emmanuel Kim", semester: "∞", desc: "Designer, Developer, Scientist, Artist, lover-of-type, Reality Composer, 호연, nektine, The Wandering Bateman, 1/2 of Living Skin, Photographer, Experiential Advisor, Ableton Lover, Blogger (about stupid stuff and songs I appreciate), Curator, Owner of this Archive.", imgs: ["fun/me1.jpeg"], tags: ["me"]};
  
  const p1 = { type: "study", name: "Heatmaps and Stress Analysis for Digital Objects", link: "https://www.are.na/goreum-b/heatmaps-amp-stress-analysis", semester: "summer 2023", desc: "A response to the Are.na 2024 Editorial Prompt: Trace. An introduction into the exploration of applying the physical practices of stress analysis unto digital objects.", imgs: ["arena/heatmap.jpeg"], tags: ["are.na"]};
  const p2 = { type: "project", isCS: false, link: "http://v1.austinkim.works/5/works", name: "Personal Identity Exploration", semester: "spring 2021", desc: "A series of three self-promotional posters. I explored which traits are core to my identity, and what differentiates me from my peers. Intended to express my identity in a way that creates emotional resonance in a memorable, yet authentic manner. ", imgs: ["graphic/per1.jp2", "graphic/per2.jp2", "graphic/per3.jp2", "graphic/per4.jp2", "graphic/per5.jpeg", "graphic/per6.jp2"], tags: ["Graphic Design", "Adobe Illustrator"]};
  const p3 = { type: "study", name: "Work Portfolio V2", link: "http://two.realitycomposer.online", semester: "spr 2023", desc: "Second version of my digital portfolio.", imgs: ["portfolio/v2.jpeg"], tags: ["Figma", "React", "Elixir"]};
  const p4 = { type: "project", name: "The Lunchables Experience", link: "", semester: "june 11th 2023", desc: "A curated, multi-layered food experience based around the american-staple food product: Lunchables.", imgs: ["projects/lunch.jp2", "projects/lunch1.jp2", "projects/lunch2.jp2", "projects/lunch3.jp2", "projects/lunch4.jp2", "projects/lunch5.jp2", "projects/lunch6.jp2", "projects/lunch7.jp2", "projects/lunch8.jp2", "projects/lunch9.jp2", "projects/lunch10.jp2", "projects/lunch11.jp2", "projects/lunch12.jp2", "projects/lunch13.jp2", "projects/lunch14.jp2", "projects/lunch15.jp2"], tags: ["Performance Art", "Experience Design"]};
  const p5 = { type: "study", isCS: true, link: "https://junehomes.com/residences/new-york-city-ny/prospect-park-south/1688-prospect-park-south", name: "June Homes Apartment Page Redesign", semester: "winter 2022'", desc: "Large restructuring of June’s Apartment Page and booking system, two closely tied systems. June Home's Apartment Page was outdated, lacking in details about their reservation, and not tailored to reservation processes.", imgs: ["work/june/1_cover.jpg", "work/june/1_11.jpeg", "work/june/1_12.jpeg", "work/june/1_14.jpeg", "work/june/1_1.jpeg", "work/june/1_2.jpeg", "work/june/1_3.jpeg", "work/june/1_7.jpeg", "work/june/1_8.jpeg", "work/june/1_9.jpeg", "work/june/1_10.jpeg"], tags: ["Figma", "UX Design"]};
  const p6 = { type: "photo", name: "Textures & Motifs 1", link: "https://www.instagram.com/p/Cs2JkgDtjq_/", semester: "may 2023", desc: "First edition of Textures & Motifs. Shot on Mamiya RB67.", imgs: ["photo/tm2/1.jpeg", "photo/tm2/2.jpeg", "photo/tm2/3.jpeg", "photo/tm2/4.jpeg", "photo/tm2/5.jpeg", "photo/tm2/6.jpeg", "photo/tm2/7.jpeg", "photo/tm2/8.jpeg"], tags: ["kycera"]};
  const p7 = { type: "fabric", name: "Asymetrical Pleated Pant V1", link: "https://www.instagram.com/p/CsnJ5Y3M2st/", semester: "may 2023", desc: "First-pass at a tailored pair of pants. Inspired by asymmetrical skirt pants.", imgs: ["fabric/asym.jpeg"], tags: [""]};
  const p8 = { type: "audio", name: "[audio curation] may 2023", link: "https://open.spotify.com/playlist/6HjqVm9Ul9BSLiz6CRteTL?si=1fd67827cc194d4e", semester: "may 2023", desc: "Collection of Songs discovered in May of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p9 = { type: "project", name: "Tamagotchi Model", link: "https://www.instagram.com/p/CU4Pc6hgamt/", semester: "fall 2021", desc: "Mocked up a tamagatchi model to practice my skills in Blender.", imgs: ["fun/tama.jpeg", "fun/tama2.png"], tags: ["React.js", "Elixir-Phoenix"]};
  const p10 = { type: "study", isCS: true, link: "", name: "PlayComb: A Covid-Friendly Playground", semester: "spring 2021", desc: "Socialization is a crucial aspect of childhood, as it cultivates creativity, emotion intelligence, and societal interactions. My senior design capstone team designed PlayComb to provide an exciting, refreshing and practical playground experience for kids of all ages through a modular layout focused on multiplicity, whist upholding social distancing.", imgs: ["projects/playcomb2.jpeg", "projects/playcomb3.jpeg", "projects/playcomb.jpeg", "projects/playcomb.png"], tags: ["Web Design", "Blender", "Animation", "3D Print"]};
  const p11 = { type: "study", isCS: true, link: "", name: "Ticketing System for Property Managers", semester: "spring 2023", desc: "June Homes works closely with House Keepers and Property Managers to clean and provide maintenance to all their homes. The tool they had used for years was an extension of an internal ticket-management system, June OS. This effort created a new app to better suit these workers.", imgs: ["work/june/3_cover.jpeg", "work/june/3_1.jpeg", "work/june/3_3.jpeg", "work/june/3_4.jpeg", "work/june/3_2.jpeg", "work/june/3_8.jpeg", "work/june/3_7.jpeg", "work/june/3_10.jpeg", "work/june/3_5.jpeg", "work/june/3_6.jpeg"], tags: ["Figma", "UX Design", "Material UI"]};
  const p12 = { type: "project", isCS: false, link: "", name: "Mac Miller: Swimming (poster)", semester: "fall 2021", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for the late Mac Miller's album, Swimming.", imgs: ["graphic/swimming-07.jp2", "graphic/swimming-08.jp2", "graphic/swimming-09.jp2"], tags: ["Illustrator", "Photoshop"]};
  const p13 = { type: "study", isCS: false, link: "", name: "YvStudio: Art Teacher Website Design", semester: "fall 2021", desc: "A free-lance project for a local high school art teacher, Yvette Kim. The website will be a showcase for her and her student's work, as well as being a 'sustainable' site for her to add and remove content directly on the website.", imgs: ["projects/yvette.jpeg"], tags: ["Figma", "Web Design", "Experience Design", "React.js"]};
  const p14 = { type: "audio", name: "[audio curation] april 2023", link: "https://open.spotify.com/playlist/6YetqjeWzJ8KiMLrTi1e08?si=d43168ea201f4924", semester: "apr 2023", desc: "Collection of Songs discovered in April of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p15 = { type: "study", isCS: true, link: "", name: "Resident Application Redesign", semester: "summer 2022", desc: "To book any home with June, a user must first be approved through a Resident Application. This application verified a user’s identity, and would either approve or deny an application based on their financial information.", imgs: ["work/june/res_app.jpeg"], tags: ["Figma", "UX Design", "Automation"]};
  const p16 = { type: "project", isCS: false, link: "", name: "Orchestral Era Tokens", semester: "spring 2021", desc: "A series of posters advertising rare, collectible tokens connected to various orchestral music eras. Graphics for each poster were inspired the musical styles from each era. Baroque marks the beginning of light, modern structure in music compositions, Classical defines large, organized orchestral play for royalty and those in power, and Romantic defines compositions that were emotional, expressive, and humanistic.", imgs: ["graphic/orch_1.png", "graphic/orch_2.png", "graphic/orch_3.jpeg", "graphic/orch_0.jpeg"], tags: ["Graphic Design", "Illustrator"]};
  const p17 = { type: "audio", name: "[audio curation] march 2023", link: "https://open.spotify.com/playlist/0QM3QcsSyTGCRRtCVTnNro?si=eca6b6daca4446c7", semester: "mar 2023", desc: "Collection of Songs discovered in March of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p18 = { type: "project", isCS: false, link: "", name: "88Rising Magazine Spread Design", semester: "spring 2019", desc: "A series of three magazine styles covering the rise in popularity around the media group: 88Rising. Featuring artists such as Rich Brain, Niki, and the Higher Brothers, I ventured into magazine/book designing for the first time in hopes of creating layouts that were engaging and reflect the energetic youth of these groups.", imgs: ["graphic/88rising.jpeg", "graphic/88_0.jpeg", "graphic/88_1.jpeg"], tags: ["InDesign", "Typography", "Illustrator"]};
  const p19 = { type: "project", isCS: false, link: "http://v1.austinkim.works/9/works", name: "Narco-Culture Infographic", semester: "fall 2018", desc: "An infographic briefly detailing the history of Narcoculture in Mexico, highlighting the presence and distribution of various drug cartels that took over Mexico from the 1980’s to present day (2020).", imgs: ["graphic/narco.jpeg", "graphic/narco1.jpeg"], tags: ["Illustrator", "Information Design"]};
  const p20 = { type: "photo", name: "Textures & Motifs 2", link: "https://www.instagram.com/p/CrEUXCRut5L/", semester: "apr 2023", desc: "Collection of textures and motifs taken by a half-frame film camera. Edition 1.", imgs: ["photo/1_1.jpeg", "photo/1_2.jpeg", "photo/1_3.jpeg", "photo/1_4.jpeg", "photo/1_5.jpeg", "photo/1_6.jpeg", "photo/1_7.jpeg", "photo/1_8.jpeg"], tags: ["kycera"]};
  const p21 = { type: "project", link: "", name: "Hard-Drive Paper Model", class_short: "3D", semester: "spring 2017", desc: "3D Hard Drive sketch and paper model for 3D", imgs: ["projects/harddrive.jpeg"], tags: ["Sketch-Up"]};
  const p22 = { type: "project", isCS: false, link: "http://v1.austinkim.works/14/works", name: "International Holocaust Film Festival Materials", semester: "fall 2018", desc: "Developed a series of Stamps and Posters for the International Holocaust Film Festival. Inspired by, and using pictures taken from the Holocaust Museum in downtown Boston, the posters emphasized the importance of remembering those affected by the holocaust, the stamps highlighting the countries most directly affected by concentration camps. The stamps and logo for the poster were a result of a 100-iteration design practice.", imgs: ["graphic/ifhs_0.jpeg", "graphic/ifhs.jpeg", "graphic/ifhs_1.png", "graphic/ifhs_2.png", "graphic/ifhs_3.png"], tags: ["Illustrator", "Photography"]};
  const p23 = { type: "audio", name: "[audio curation] february 2023", link: "https://open.spotify.com/playlist/0e0npwBus6ErHjJtvPRR7W?si=d1949ce30a40492b", semester: "feb 2023", desc: "Collection of Songs discovered in February of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p24 = { type: "project", isCS: false, link: "https://www.instagram.com/p/CURGRHKMQ6_/", name: "Kendrick Lamar & Baby Keem: Family Ties (poster)", semester: "fall 2022", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Series done for Kendrick Lamar and Baby Keem's song, Family Ties.", imgs: ["graphic/family.jpeg", "graphic/family_1.jpeg", "graphic/family_2.jpeg", "graphic/family_3.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p25 = { type: "project", isCS: false, link: "", name: "Album Trading Cards", semester: "spring 2021", desc: "A series of three marketing posters advertising an Album Trading Card Product. Inspired by the resurgence of pokemon trading cards, the product consists of different sets of cards, based on music eras and genres. I would have liked to do more “limited edition” sets of these cards, and packaging designs, but for the assignment only explored a single set of posters.", imgs: ["graphic/album_trading.jpeg", "graphic/album_trading_2.jpeg", "graphic/album_trading_3.jpeg", "graphic/album_trading_4.jpeg"], tags: ["Graphic Design", "Illustrator"]};
  const p26 = { type: "project", link: "", name: "shoe storage project", class_short: "3D", semester: "spring 2017", desc: "Final project for a 3D Fundamentals class. Designed a functional storage piece to be used for travel.", imgs: ["fun/shoe.jpeg"], tags: ["Design", "Sketch-Up"]};
  const p27 = { type: "audio", name: "[audio curation] january 2023", link: "https://open.spotify.com/playlist/5ZzNU0thNC6EXI7Jw7gfiD?si=4f001d669fbd4894&pt=8ce0b1ab5dee5e5dbcda854aad22159d", semester: "jan 2023", desc: "Collection of Songs discovered in January of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const pX7 = { type: "audio", name: "Spotify Party", semester: "spring 2021", desc: "A platform for music enthusiasts to host music parties while also receiving set feedback from guests. Attendees (or guests), have full view of upcoming songs in a SpotifyParty, as well as the standings of their votes and requests sent to the party host. Ever user's party song requests, voting habits, and songs from any party they've been to, are displayed through a series of informative graphics, and a user-specific Impact grade is given to them based on their activeness.", imgs: ["fun/spotify_party.jpeg"], tags: ["React.js", "Elixir-Phoenix", "Web Design", "Figma"]};
  const p28 = { type: "audio", name: "[audio curation] december 2022", link: "https://open.spotify.com/playlist/6qtpE3wLYLEOQVcUZtDgrY?si=0784f3f896b94f41", semester: "dec 2023", desc: "Collection of Songs discovered in December of 2022 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p29 = { type: "project", link: "", name: "Planet Beat-Looper", class_short: "PB", semester: "fall 2017", desc: "Final Project; Circular-based Beat Looper for Programming Baiscs", imgs: ["fun/beat.jpeg"], tags: ["P5.js"]};
  const p30 = { type: "study", isCS: false, link: "", name: "Work Portfolio (v1.austinkim.works)", semester: "summer 2021", desc: "Documenting the process of how I built my first portfolio. I further expanded on my front-end skills by working closely with React.js, Styled Components, and FramerAnimation to deliver an engaging experience to explore my previous works.", imgs: ["portfolio/V1.jpeg"], tags: ["React.js", "Elixir-Phoenix", "Figma", "Experience Design"]};
  const p31 = { type: "photo", name: "mini-series on homes from home", link: "https://www.instagram.com/p/CKH3qIEhSbH/", semester: "jan 2021", desc: "Mini photo-series on homes from my home. I've driven by these a thousand times, but never thought much of them. I was able to look at things differently this time around.", imgs: ["photo/houses.jpeg"], tags: ["minolta srt-101"]};
  const p32 = { type: "project", isCS: false, link: "https://www.instagram.com/p/B77nYyZhZb7/", name: "Hundred Waters: Out Alee (poster)", semester: "fall 2020", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for Hundred Water's song, Out Alee.", imgs: ["graphic/outalee.jpeg", "graphic/outalee_0.jpeg", "graphic/outalee_1.jpeg", "graphic/outalee_2.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p33 = { type: "audio", name: "[audio curation] november 2022", link: "https://open.spotify.com/playlist/4uCe65WKWVwczzAVcfJT04?si=6b740299f9b84543", semester: "nov 2023", desc: "Collection of Songs discovered in November of 2022 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p34 = { type: "project", isCS: false, link: "", name: "Type Studies Exploration", semester: "spring 2018", desc: "A series of typography exploration exercises. Explored the beauty of type by pinpointing and framing the anatomy of type in one exercise, showcased a series of typefaces of my liking in another, and created a series of logos using only letterforms in another.", imgs: ["graphic/Kim_logos.png", "graphic/type2.jpeg", "graphic/type2_1.jpeg", "graphic/type2_2.jpeg", "graphic/type2_3.jpeg"], tags: ["InDesign", "Typography"]};
  const p35 = { type: "study", link: "", name: "Data Privacy Campaign", semester: "fall 2019", desc: "A Data Privacy Campaign is a project aimed at bringing awareness to data privacy, and the dangers surrounding it. Social media corporations are always watching, always collecting data on user’s habits. Final deliverable: website design mockup, series of Instagram Advertisements, series of posters, laptop and phone stickers, and business cards.", imgs: ["graphic/priv1.jp2", "graphic/priv2.jp2", "graphic/priv3.jp2", "graphic/priv4.jp2", "graphic/priv5.jp2", "graphic/priv6.jp2"], tags: ["InDesign", "Illustrator", "Graphic Design"]};
  const p36 = { type: "project", isCS: false, link: "", name: "Raveena: Moonstone (poster)", semester: "fall 2020", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for Raveena's EP, Moonstone.", imgs: ["graphic/raveena.jpeg", "graphic/raveena_2.png"], tags: ["Illustrator", "Photoshop"]};
  const p37 = { type: "audio", name: "Texas Instruments I", link: "https://www.soundcloud.com/nektine", semester: "TBD", desc: "Redacted", imgs: [""], tags: ["Ableton Live 11"]};
  const p38 = { type: "photo", name: "ATL Suburbs", semester: "fall 2020", desc: "Small series of corners photographed around Atlanta.", imgs: ["photo/atl.jpeg", "photo/atl2.jpeg"], tags: []};
  const p39 = { type: "project", link: "", name: "Siddhartha Book Design", semester: "spring 2018", desc: "A book design typography exercise for the first chapter of Siddhartha: an Indian Tale by Hermann Hesse. Process involved printing and hand-binding (with tape) multiple sets of designs to further refine every page in this exercise.", imgs: ["graphic/siddhartha.jpeg"], tags: ["InDesign", "Typography"]};
  const p40 = { type: "project", link: "", name: "PhotoWalk", semester: "fall 2020", desc: "Photowalk is an app designed to encourage both digital and film photographers to become more familiar with their cities by going on “Photo Walks”, and expanding on their photography skills. By being able to share experiences through photos, walk routes, and specific stop locations, photographers can help others newer to the city to find interesting streets to take their own pictures of.", imgs: ["graphic/photowalk.jpeg", "graphic/photowalk_1.jpg", "graphic/photowalk_2.png"], tags: ["Figma", "Mobile Design", "Experience Design"]};
  const p41 = { type: "project", link: "", name: "How a Song is Built", class_short: "ID1", semester: "Fall '18", desc: "An infographic dissecting and explaining the anatomy of a song, in their most generic form. As complex a songs can be, I broke up what a very popular but standardized pop song from the 2000’s - 2020’s era would most likely entail, as well as the steps it takes for a song idea to develop into a produced song.", imgs: ["graphic/howasong.jpeg"], tags: ["Illustrator", "Information Design"]};
  const p42 = { type: "study", link: "", name: "NEU Covid App Redesign", class_short: "HCI", semester: "Fall '20", desc: "An app redesign of the Northeastern Covid-Tracker app, focused on simplicity and functionality. Northeastern's required forms and flows are included, such as self-screening and positive test result forms, as well as a few features such as a news tab, extended account details on a user’s profile page, and a series of articles to encourage proper and safe Covid practices.", imgs: ["projects/covid.jpeg"], tags: ["Figma", "Mobile Design"]};
  const p43 = { type: "project", link: "", name: "Fog X Flo Reflection", class_short: "5D", semester: "Fall '18", desc: "Fog X Flo project and reflection for 5D Fundamentals. Created a website to host reflection and interpretation of temporary experience art installation around parks in Boston, MA.", imgs: ["projects/fog.jpeg"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]};
  const p45 = { type: "words", link: "https://nektine.wordpress.com/2019/02/24/give-it-a-listen-planet-stardom/", name: "Give it a Listen: Planet Stardom", semester: "feb 2018", desc: "'...energy continues until the last two songs, Gorgeous, I and Magna & Friends, which beautifully end the album in grounded, soft, and earthy tones. Gorgeous, I in particular was very moving; you could clearly feel the passion in the melodic waves...' - Exerpt from blog post. Part of a music review series from my budding artist years.", imgs: [""], tags: ["blog"]};
  const p46 = { type: "words", link: "https://nektine.wordpress.com/2018/02/22/give-it-a-listen-the-trip/", name: "Give it a Listen: The Trip", semester: "jan 2018", desc: "'...The Trip is straightforward, but also entrancing. For the whole song, the same instruments are droning on over the same notes again and again, and yet… you don’t want them to stop playing. The song creates an atmosphere that you actually want to be stuck in. That’s why her message works so well: to accept the beautiful, pit-less road ahead...' - Exerpt from blog post. Part of a music review series from my budding artist years.", imgs: [""], tags: ["blog"]};
  const p47 = { type: "study", link: "http://one.realitycomposer.online", name: "Work Portfolio V1", semester: "nov 2021", desc: "First version of my digital portfolio.", imgs: ["portfolio/v1.jpeg"], tags: ["blog"]};
  const p48 = { type: "study", name: "June Homes Showcase Overview", link: "https://www.figma.com/file/VNTKP5kQkPeUMtZAwKfC0O/June-Homes---Figma-Portfolio-Showcase?type=design&node-id=5-126&mode=design&t=z50KodqiNnpB55y8-4", semester: "jun 2023", desc: "Overview of various initaitves I designed with June Homes. Projects range from a new Design System, iOS designs, and multiple system revisions.", imgs: ["work/june/overview_cover.jpeg", "work/june/ov1.png", "work/june/ov2.png", "work/june/ov3.jpeg", "work/june/ov4.png"], tags: ["june"]};
  const p49 = { type: "audio", name: "Bounds of Proxima Centauri", link: "", semester: "— 2023", desc: "Artwork for upcoming debut album, 'Bounds of Proxima Centauri', for The Wandering Bateman. Release date TBD.", imgs: ["graphic/bounds.jpeg"], tags: ["wandering bateman"]};
  const p50 = { type: "audio", name: "Tunes of the Yeoman", link: "https://music.apple.com/us/playlist/tunes-of-the-yeoman/pl.u-V9D77WKT1jBdVJ", semester: "CBC Autumn Classic, oct 2023", desc: "Curated atmosphere for the Bones of the Yeoman. The fuel that drove the Bones to come out victorious in CBC's first ever Autumn Classic.", imgs: ["fun/tunes.jpeg"], tags: ["wandering bateman"]};
  const p51 = { type: "project", name: "A Nektine Memorial", link: "https://www.instagram.com/p/CyZdb6xM2by/?img_index=1", semester: "oct 2023", desc: "It's hard to distance ourselves from online expression these days, a big part of owning up to this reality is fully realizing yourself in an online persona. Sometimes the name behind our identities feel limiting, or behind us. I felt evolution was only possible with a new name to live behind, which may be childish, but maybe not. Maybe I’ll regret leaving behind such a personally constructed name, but maybe not. Am I living shadowed and defined by the channels of the internet, or is the online fueling me to reach heightened levels of self previously impossible? Hard to say….", imgs: ["fun/nektine.jpeg"], tags: ["nektine"]};
  const p52 = { type: "project", name: "An Obsidian love letter", link: "", semester: "oct 2023", desc: "Love letter to Obsidian. Paving the way for thought collection. Paving the way for information as bio-artifacts. To see your mind realized as a breathing system of nodes... Obsidian Graph Feature top 10 features of all time, shadowed only by the likes of Global Scrap Paper, comping in Logic, few others.", imgs: ["fun/obsidian.jpeg"], tags: ["obsidian"]};
  const p53 = { type: "project", name: "GO.", link: "", semester: "aug 2023", desc: "A must-document moment, winning my first in-person game of GO. This is how you catch the bug, feeling like youve improved, learned, and reap the rewards of actively studying. Beating someone who you know is much stronger than you through a handicap difference. A poised application of knowledge, accumulated through weeks of losses. The reward of effort's equivalent exchange to consequence, so great. I want to continue to rise. I am akira toya. I am hikaru shindo. To rise is to rise in humility, and show intellectual prowess, hunger, ambition, vision, confidence.", imgs: ["fun/go.jpeg"], tags: ["obsidian"]};
  const p54 = { type: "project", name: "Living Skin (website)", link: "http://www.livingskin.space", semester: "oct 2023", desc: "Website for new Gallery/Library hybrid space, Living Skin.", imgs: ["work/livingskin/1.jpeg", "work/livingskin/2.jpeg", "work/livingskin/3.jpeg", "work/livingskin/4.jpeg"], tags: ["obsidian"]};
  const p55 = { type: "photo", name: "Textures & Motifs 3", link: "", semester: "feb 2023", desc: "Third edition of Textures & Motifs Film Series. Shot on Yashica Samurai X 3.0.", imgs: ["photo/tm3/4.jpeg", "photo/tm3/8.jpeg", "photo/tm3/2.jpeg", "photo/tm3/1.jpeg", "photo/tm3/3.jpeg", "photo/tm3/10.jpeg", "photo/tm3/7.jpeg", "photo/tm3/5.jpeg", "photo/tm3/9.jpeg"], tags: ["obsidian"]};
  const p56 = { type: "project", name: "Living Skin", link: "https://www.instagram.com/living_skin_space/", semester: "oct 2023", desc: "A new library/gallery hybrid space exploring the intertwinings of knowledge and art. Living Skin, a place to digest and consider the new.", imgs: ["work/livingskin/space1.jpeg", "work/livingskin/space5.jpeg", "work/livingskin/space.jpeg", "work/livingskin/space2.jpeg", "work/livingskin/space3.jpeg", "work/livingskin/space4.jpeg"], tags: ["obsidian"]};
  const p57 = { type: "project", name: "Reality Blog", link: "https://realityblog.blot.im/", semester: "jan 2024", desc: "뇌, in korean, means brain. A digital databse to house various notes, thoughts, and expressions that have passed through my 뇌. My first attempt in managing anything resemblant of a Blog. Built with Obsidian + Blot.im", imgs: ["projects/blog1_1.jpeg", "projects/blog1_2.jpeg"], tags: ["obsidian", "blog", "blot.im"]};
  const p58 = { type: "project", name: "Resident Application Redesign", link: "https://junehomes.com", semester: "april 2023", desc: "Redesign of a resident application for June Homes. Application verified user’s identity and financial eligibility.", imgs: ["work/june/2_1.jpeg", "work/june/2_2.jpeg", "work/june/2_4.jpeg", "work/june/2_5.jp2", "work/june/2_6.jpeg", "work/june/2_8.jpeg", "work/june/2_9.jpeg", "work/june/2_10.jpeg"], tags: ["obsidian", "blog", "blot.im"]};
  const p59 = { type: "project", name: "Northwestern Public Health Review 2024 Issue", link: "", semester: "july 2024", desc: "Magazine for NPHR 2024 Issue: Structural Racism", imgs: ["work/nphr/SR_5.jpeg", "work/nphr/SR_4.jpeg", "work/nphr/SR_3.jpeg", "work/nphr/SR_1.jpeg", "work/nphr/SR_2.jpeg", "work/nphr/SR_6.jpeg"], tags: ["indesign"]};
  const p60 = { type: "project", name: "Legal Aid Services Interview Translation", link: "", semester: "june 2024", desc: "Redesign of a resident application for June Homes. Application verified user’s identity and financial eligibility.", imgs: [""], tags: ["obsidian", "blog", "blot.im"]};
  const p61 = { type: "project", name: "Carnival of the Gibbet", link: "https://www.instagram.com/p/C6e2dTvOxbW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", semester: "june 2024", desc: "A decaying of bodies left on display... Absurdity rises from terror and filth, up from the earth as beings of white and red, only to be hung again.", imgs: ["work/livingskin/c0.jp2", "work/livingskin/c1.jp2", "work/livingskin/c2.jp2", "work/livingskin/c3.jp2", "work/livingskin/c4.jp2", "work/livingskin/c5.jp2", "work/livingskin/c6.jp2", "work/livingskin/c7.jp2", "work/livingskin/c8.jp2", "work/livingskin/c9.jp2", "work/livingskin/c11.jp2", "work/livingskin/c12.jp2", "work/livingskin/c13.jp2", "work/livingskin/c14.jp2"], tags: ["obsidian", "blog", "blot.im"]};
  const p62 = { type: "project", name: "Tapas: Banquet", link: "https://www.instagram.com/p/C-jV7E8t0z6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", semester: "august 2024", desc: "The denouement of a six-week group show at Living Skin. An all-day gathering of artistic and culinary practices.", imgs: ["work/livingskin/t.jp2", "work/livingskin/t0.jp2", "work/livingskin/t1.jp2", "work/livingskin/t2.jp2", "work/livingskin/t3.jp2", "work/livingskin/t4.jp2", "work/livingskin/t5.jp2", "work/livingskin/t6.jp2", "work/livingskin/t7.jp2", "work/livingskin/t7_.jp2", "work/livingskin/t8_.jp2", "work/livingskin/t9_.jp2", "work/livingskin/t10_.jp2", "work/livingskin/t8.jp2", "work/livingskin/t9.jp2", "work/livingskin/t10.jp2", "work/livingskin/t11.jp2", "work/livingskin/t12.jp2"], tags: ["obsidian", "blog", "blot.im"]};
  const p63 = { type: "project", name: "WhiteBox001", link: "", semester: "june 2024", desc: "…a safe haven of imagined pasts, memorials of tales untold, old rituals of discovery… WhiteBox001, group show at Living Skin.", imgs: ["work/livingskin/wb0.jpg", "work/livingskin/wb1.jp2", "work/livingskin/wb2.jp2", "work/livingskin/wb3.jp2", "work/livingskin/wb4.jp2", "work/livingskin/wb5.jp2", "work/livingskin/wb6.jp2", "work/livingskin/wb7.jp2", "work/livingskin/wb8.jp2", "work/livingskin/wb10.jp2", "work/livingskin/wb9.jp2", ], tags: ["obsidian", "blog", "blot.im"]};
  const p64 = { type: "sound", name: "Tea & Sound", link: "", semester: "june 2024", desc: "A blend of practices. Traditional Chinese Puerh drinking paired with 3 ambient live sound sets. Held at Living Skin", imgs: ["events/ts.jpg", "events/ts1.jp2", "events/ts2.jp2", "events/ts3.jp2", "events/ts3.jpg", "events/ts4.jp2", "events/ts5.jp2", "events/6.jp2", "events/ts7.jp2", "events/ts8.jp2", "events/ts9.jpg"], tags: ["obsidian", "blog", "blot.im"]};
  const p65 = { type: "event", name: "Bookbinding Workshop", link: "https://www.instagram.com/p/C8uxOOuOWYO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", semester: "june 2024", desc: "Highlights from 4-hour Bookbinding Workshop held at Living Skin, led by Mandy Gehrt. We learned how to respect the paper, and made 2 type of paper zines, 2 types of string bound notebooks, and 1 japanese glue-bind book.", imgs: ["events/bb0.jp2", "events/bb1.jp2", "events/bb2.jp2", "events/bb3.jp2", "events/bb4.jp2", "events/bb5.jp2", "events/bb6.jp2", "events/bb7.jp2", "events/bb8.jp2"], tags: ["obsidian", "blog", "blot.im"]};
  const p66 = { type: "photo", name: "Textures & Motifs 4", link: "", semester: "august 2023", desc: "Fourth edition of Textures & Motifs Film Series. Shot on Yashica Samurai X 3.0.", imgs: ["photo/tm4/0.jpeg", "photo/tm4/1.jpeg", "photo/tm4/2.jpeg", "photo/tm4/3.jpeg", "photo/tm4/4.jpeg", "photo/tm4/5.jpeg", "photo/tm4/6.jpeg", "photo/tm4/7.jpeg", "photo/tm4/8.jpeg", "photo/tm4/9.jpeg", "photo/tm4/10.jpeg", "photo/tm4/11.jpeg", "photo/tm4/12.jpeg"], tags: ["film", "yashica samurai", "photo"]};
  const p67 = { type: "project", name: "SuraSang: Exploring Korea", link: "", semester: "july 2023", desc: "A remmebering and exploration of Korea, and the history of its 3 most dominant eras. Prepared by Grace Nam and Austin Kim.", imgs: ["events/sura0.jp2", "events/sura1.jpg", "events/sura2.jp2", "events/sura3.jp2", "events/sura4.jp2", "events/sura5.jp2", "events/sura6.jp2", "events/sura7.jp2", "events/sura8.jp2", "events/sura9.jp2", "events/sura10.jp2", "events/sura11.jp2", "events/sura12.png"], tags: ["film", "yashica samurai", "photo"]};
  const p68 = { type: "photo", name: "Textures & Motifs 5", link: "", semester: "august 2023", desc: "First edition of Textures & Motifs Film Series. Shot on Yashica Samurai X 3.0.", imgs: ["photo/tm5/1.jpeg", "photo/tm5/2.jpeg", "photo/tm5/3.jpeg", "photo/tm5/4.jpeg", "photo/tm5/5.jpeg", "photo/tm5/6.jpeg", "photo/tm5/7.jpeg", "photo/tm5/8.jpeg", "photo/tm5/9.jpeg"], tags: ["film", "yashica samurai", "photo"]};
  const p69 = { type: "photo", name: "Textures & Motifs 6", link: "", semester: "august 2023", desc: "Seventh edition of Textures & Motifs Film Series. Shot on Yashica Samurai X 3.0.", imgs: ["photo/tm7/1.jpeg", "photo/tm7/2.jpeg", "photo/tm7/3.jpeg", "photo/tm7/4.jpeg", "photo/tm7/5.jpeg", "photo/tm7/6.jpeg", "photo/tm7/7.jpeg", "photo/tm7/8.jpeg"], tags: ["film", "yashica samurai", "photo"]};
  const p70 = { type: "photo", name: "Textures & Motifs 7", link: "", semester: "august 2023", desc: "Sixth edition of Textures & Motifs Film Series. Shot on Yashica Samurai X 3.0.", imgs: ["photo/tm6/1.jpeg", "photo/tm6/2.jpeg", "photo/tm6/3.jpeg", "photo/tm6/4.jpeg", "photo/tm6/5.jpeg", "photo/tm6/6.jpeg", "photo/tm6/7.jpeg", "photo/tm6/8.jpeg", "photo/tm6/9.jpeg", "photo/tm6/10.jpeg", "photo/tm6/11.jpeg", "photo/tm6/12.jpeg", "photo/tm6/13.jpeg", "photo/tm6/14.jpeg", "photo/tm6/15.jpeg", "photo/tm6/16.jpeg", "photo/tm6/17.jpeg"], tags: ["film", "yashica samurai", "photo"]};
  const p71 = { type: "photo", name: "Tea Archives", link: "", semester: "2024", desc: "Snippets from my daily practices. Various puerh.", imgs: ["photo/tea/1.jp2", "photo/tea/2.jp2", "photo/tea/3.jp2", "photo/tea/4.jp2", "photo/tea/5.jp2", "photo/tea/6.jp2", "photo/tea/7.jp2", "photo/tea/8.jp2", "photo/tea/9.jp2", "photo/tea/10.jp2", "photo/tea/11.jp2"], tags: ["film", "yashica samurai", "photo"]};
  const p72 = { type: "audio", name: "First Forgiveness", link: "https://thewanderingbateman.bandcamp.com/track/first-forgiveness", semester: "march 2024", desc: "First ambient release on Bandcamp.", imgs: ["fun/Forgiveness1.jpeg"], tags: ["film", "yashica samurai", "photo"]};

  const myProjects = [ p44, p62, p59, p70, p58, p61, p63, p69, p64, p65, p11, p57, p68, p48, p5, p56, p66, p67, p3, p72, p55, p71, p1, p6, p47, p53, p49, p52, p2, p4, p7, p10, p35, p12, p40, p16, p18, p24, p19, p20, p31, p9, p22, p25, p32, p36, p38, p34, p43, p39, pX7];

  const ListContainerRef = useRef();

  let observerOptions = {
    root: ListContainerRef.target,
    rootMargin: '2% 0px 97.75% 0px',
    // threshold: 0.1
  }

  const myRefs = [];
  myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());
  // myRefs.push(useRef());

  const historyPage = useHistory();

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const toTopClick = async event => {
    myRefs[0].current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleClick = (index) => {
    // console.log('proj clicked', index);
    // console.log('clicked - current proj index', projectValue);
    // myRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
    // navigate("/" + projectValue + "/works");
    setProjectValue(index);

    // await timeout(1000); //for 1 sec delay
    // setProjectValue(index);
  }
  

  //MAIN PROJECTS LIST
  let projects_list = myProjects.map((project, index) => {

    // let project_tags = project.tags.map((tag, index) => (
    //   <ProjectTag>{tag}</ProjectTag>
    // ));

    // let height_varPreview = "calc(120px + " + ((index) * (90 / (projects.length + 3))) + "vh)";
    // if (project.type == '')
      // IF EMPTY, RETURN ALL

    return (
      <WorkItem 
        onClick={()=> handleClick(index)}
        id={index} 
        ref={myRefs[index]}
        // selected={(index == projectValue) ? true : false } 
        outlined={((index == projectValue) && (filters.length < 1 || (filters.includes(project.type)))) ? true : false } 
        filtered={(filters.length < 1 || (filters.includes(project.type))) ? true : false }
        // filtered={((filters.length < 1 || (filters.includes(project.type))) && (index == projectValue)) ? true : false }
        >
              {project.name}
              <Indicator 
                 outlined={((index == projectValue) && (filters.length < 1 || (filters.includes(project.type)))) ? true : false } 
                 filtered={(filters.length < 1 || (filters.includes(project.type))) ? true : false }
              />
        </WorkItem>
    );

    // <WorkItem 
    //     id={index} 
    //     ref={myRefs[index]}
    //     selected={(index == projectValue) ? true : false } 
    //     filtered={(filters.length < 1 || (filters.includes(project.type))) ? true : false }>
    //       <DeskWorkItem onClick={()=> handleClick(index)}>
    //           <WorkTitle>{project.name}</WorkTitle>
    //       </DeskWorkItem>
    //       <MobileWorkItem onClick={()=> handleClick(index)}>
    //         <WorkTitle>{project.name}</WorkTitle>
    //       </MobileWorkItem>
    //     </WorkItem>

  });
  

  //MAIN PROJECTS LIST
  let images_all = myProjects[projectValue].imgs.map((image, index) => {
    
    console.log("images printed: " + (index + 1) + " " + image);
    console.log("size of list" + myProjects[projectValue].imgs.length);
    // var caption = image.substring(3, image.length);

    // if (image.startsWith("T1:")) {
    //   return (
    //     <CaptionText1>
    //           {caption}
    //     </CaptionText1>
    //   );
    // }
    // else if (image.startsWith("T2:")) {
    //   return (
    //     <CaptionText2>
    //           {caption}
    //     </CaptionText2>
    //   );
    // }
    // else {
      return (
        <WorkImage>
              <img src={image}/>
        </WorkImage>
      );
    // }
  });


  // console.log(window.screen.height);

  // let rightImageSource = "imgs/" + projects[projectValue].imgs[0];
  let rightImageSource = myProjects[projectValue].imgs[0];

  //TODO: Fix filters not working
  return (
    <Container>
      <FiltersContainer>
        <ClearFilters 
          onClick={clearFilters} 
          active={(filters.length > 0) ? true : false }
        >clear</ClearFilters>
        <Filter onClick={projectFilter} active={(filters.includes("project")) ? true : false }>projects <a>{(filters.includes("project")) ? " ✕" : ""}</a></Filter>
        <Filter onClick={studyFilter} active={(filters.includes("study")) ? true : false }>case studies <a>{(filters.includes("study")) ? " ✕" : ""}</a></Filter>
        <Filter onClick={photoFilter} active={(filters.includes("photo")) ? true : false }>photo <a>{(filters.includes("photo")) ? " ✕" : ""}</a></Filter>
        <Filter onClick={audioFilter} active={(filters.includes("audio")) ? true : false }>audio <a>{(filters.includes("audio")) ? " ✕" : ""}</a></Filter>
        <Filter onClick={fabricFilter} active={(filters.includes("fabric")) ? true : false }>fabric <a>{(filters.includes("fabric")) ? " ✕" : ""}</a></Filter>
      </FiltersContainer>

      <NavDOMLinkAbout thispage={true} onClick={() => toggle('info')}>about/contact</NavDOMLinkAbout>
      <FiltersToggle onClick={mobileToggle}>filters</FiltersToggle>
      {/* <MarkerL /> */}

      <WorkListContainer id="topWorks" ref={ListContainerRef}>
        {projects_list}
        {/* {projects_list} */}
        <ToTop onClick={toTopClick}>back to top</ToTop>
      </WorkListContainer>
      <DetailsContainer
        filtered={(filters.length < 1 || (filters.includes(myProjects[projectValue].type))) ? true : false }
      >
        <WorkDate>{myProjects[projectValue].semester}, {myProjects[projectValue].type}</WorkDate>
        <WorkImageContainer>
          {images_all}
          {/* <WorkImage> */}
            {/* <img src={rightImageSource}/> */}
            {/* <img src={"testProjCover" + projectValue + ".png"}/> */}
          {/* </WorkImage> */}
        </WorkImageContainer>
        <WorkPreview>
            <Desc>{myProjects[projectValue].desc}</Desc>
            <br />
            <Link><a href={(myProjects[projectValue].link ? myProjects[projectValue].link : '' )} target={"blank"}>{myProjects[projectValue].link}</a></Link>
        </WorkPreview>
      </DetailsContainer>   

      <MobileLink
        filtered={(filters.length < 1 || (filters.includes(myProjects[projectValue].type))) ? true : false }
      ><a href={(myProjects[projectValue].link ? myProjects[projectValue].link : '' )} target={"blank"}>{myProjects[projectValue].link}</a></MobileLink>   

    </Container>
  );
};

export default withRouter(connect(({ projects }) => ({ projects }))(Works));
