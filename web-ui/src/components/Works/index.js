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
  MobileLink
} from "./WorkElements";

// Scrollbar.init(document.querySelector('#my-scrollbar'), options);


const Works = ({ projects, toggle, mobileToggle, clearFilters, filters, photoFilter, audioFilter, projectFilter, caseFilter, fabricFilter }) => {

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
  
  const p1 = { type: "case", name: "Heatmaps and Stress Analysis for Digital Objects", link: "https://www.are.na/goreum-b/heatmaps-amp-stress-analysis", semester: "summer 2023", desc: "A response to the Are.na 2024 Editorial Prompt: Trace. An introduction into the exploration of applying the physical practices of stress analysis unto digital objects.", imgs: ["arena/heatmap.jpeg"], tags: ["are.na"]};
  const p2 = { type: "project", isCS: false, link: "https://www.instagram.com/p/CLdNYx_BAkB/", name: "Personal Identity Exploration", semester: "spring 2021", desc: "A series of three self-promotional posters. I explored which traits are core to my identity, and what differentiates me from my peers. Intended to express my identity in a way that creates emotional resonance in a memorable, yet authentic manner. ", imgs: ["graphic/personal.jpeg"], tags: ["Graphic Design", "Adobe Illustrator"]};
  const p3 = { type: "case", name: "Work Portfolio V2 (v2.austinkim.works)", link: "http://v2.austinkim.works", semester: "spr 2023", desc: "Second version of my digital portfolio, holding more of my polished work more catered to the professional.", imgs: ["portfolio/v2.jpeg"], tags: ["Figma", "React", "Elixir"]};
  const p4 = { type: "project", name: "The Lunchables Experience", link: "http://wwww.lunchablesexperience.com", semester: "june 11th 2023", desc: "A curated, multi-layered food experience based around the american-staple food product: Lunchables.", imgs: ["fun/lunchables.jpeg"], tags: ["Performance Art", "Experience Design"]};
  const p5 = { type: "case", isCS: true, link: "https://junehomes.com/residences/new-york-city-ny/prospect-park-south/1688-prospect-park-south", name: "June Homes Apartment Page Redesign", semester: "winter 2022'", desc: "Large restructuring of June’s Apartment Page and booking system, two closely tied systems. June Home's Apartment Page was outdated, lacking in details about their reservation, and not tailored to reservation processes.", imgs: ["june/apt_redesign.jpeg"], tags: ["Figma", "UX Design"]};
  const p6 = { type: "photo", name: "textures & motifs 2", link: "https://www.instagram.com/p/Cs2JkgDtjq_/", semester: "may 2023", desc: "Collection of textures and motifs taken by a half-frame film camera. Edition 2.", imgs: ["photo/t&m2.jpeg"], tags: ["kycera"]};
  const p7 = { type: "fabric", name: "Asymetrical Pleated Pant V1", link: "https://www.instagram.com/p/CsnJ5Y3M2st/", semester: "may 2023", desc: "First-pass at a tailored pair of pants. Inspired by asymmetrical skirt pants.", imgs: ["fabric/asym.jpeg"], tags: [""]};
  const p8 = { type: "audio", name: "[playlist] may 2023", link: "https://open.spotify.com/playlist/6HjqVm9Ul9BSLiz6CRteTL?si=1fd67827cc194d4e", semester: "may 2023", desc: "Collection of Songs discovered in May of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p9 = { type: "project", name: "Tamagotchi Model", link: "https://www.instagram.com/p/CU4Pc6hgamt/", semester: "fall 2021", desc: "Mocked up a tamagatchi model to practice my skills in Blender.", imgs: ["fun/tama.jpeg"], tags: ["React.js", "Elixir-Phoenix"]};
  const p10 = { type: "case", isCS: true, link: "", name: "PlayComb: A Covid-Friendly Playground", semester: "spring 2021", desc: "Socialization is a crucial aspect of childhood, as it cultivates creativity, emotion intelligence, and societal interactions. My senior design capstone team designed PlayComb to provide an exciting, refreshing and practical playground experience for kids of all ages through a modular layout focused on multiplicity, whist upholding social distancing.", imgs: ["projects/playcomb2.jpeg"], tags: ["Web Design", "Blender", "Animation", "3D Print"]};
  const p11 = { type: "case", isCS: true, link: "", name: "Ticketing System for Property Managers", semester: "spring 2023", desc: "June Homes works closely with House Keepers and Property Managers to clean and provide maintenance to all their homes. The tool they had used for years was an extension of an internal ticket-management system, June OS. This effort created a new app to better suit these workers.", imgs: ["june/ticketing.jpeg"], tags: ["Figma", "UX Design", "Material UI"]};
  const p12 = { type: "project", isCS: false, link: "https://www.instagram.com/p/CK5V0LJhe9H/", name: "song poster design - Mac Miller: swimming", semester: "fall 2021", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for the late Mac Miller's album, Swimming.", imgs: ["graphic/swimming.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p13 = { type: "case", isCS: false, link: "", name: "YvStudio: Art Teacher Website Design", semester: "fall 2021", desc: "A free-lance project for a local high school art teacher, Yvette Kim. The website will be a showcase for her and her student's work, as well as being a 'sustainable' site for her to add and remove content directly on the website.", imgs: ["projects/yvette.jpeg"], tags: ["Figma", "Web Design", "Experience Design", "React.js"]};
  const p14 = { type: "audio", name: "[playlist] april 2023", link: "https://open.spotify.com/playlist/6YetqjeWzJ8KiMLrTi1e08?si=d43168ea201f4924", semester: "apr 2023", desc: "Collection of Songs discovered in April of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p15 = { type: "case", isCS: true, link: "", name: "Resident Application Redesign", semester: "summer 2022", desc: "To book any home with June, a user must first be approved through a Resident Application. This application verified a user’s identity, and would either approve or deny an application based on their financial information.", imgs: ["june/res_app.jpeg"], tags: ["Figma", "UX Design", "Automation"]};
  const p16 = { type: "project", isCS: false, link: "", name: "Orchestral Era Tokens", semester: "spring 2021", desc: "A series of posters advertising rare, collectible tokens connected to various orchestral music eras. Graphics for each poster were inspired the musical styles from each era. Baroque marks the beginning of light, modern structure in music compositions, Classical defines large, organized orchestral play for royalty and those in power, and Romantic defines compositions that were emotional, expressive, and humanistic.", imgs: ["graphic/orchestra.jpeg"], tags: ["Graphic Design", "Illustrator"]};
  const p17 = { type: "audio", name: "[playlist] march 2023", link: "https://open.spotify.com/playlist/0QM3QcsSyTGCRRtCVTnNro?si=eca6b6daca4446c7", semester: "mar 2023", desc: "Collection of Songs discovered in March of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p18 = { type: "project", isCS: false, link: "", name: "88Rising Magazine Spread Design", semester: "spring 2019", desc: "A series of three magazine styles covering the rise in popularity around the media group: 88Rising. Featuring artists such as Rich Brain, Niki, and the Higher Brothers, I ventured into magazine/book designing for the first time in hopes of creating layouts that were engaging and reflect the energetic youth of these groups.", imgs: ["graphic/88rising.jpeg"], tags: ["InDesign", "Typography", "Illustrator"]};
  const p19 = { type: "project", isCS: false, link: "", name: "Narco-culture Infographic", semester: "fall 2018", desc: "An infographic briefly detailing the history of Narcoculture in Mexico, highlighting the presence and distribution of various drug cartels that took over Mexico from the 1980’s to present day (2020).", imgs: ["graphic/narco.jpeg"], tags: ["Illustrator", "Information Design"]};
  const p20 = { type: "photo", name: "textures & motifs 1", link: "https://www.instagram.com/p/CrEUXCRut5L/", semester: "apr 2023", desc: "Collection of textures and motifs taken by a half-frame film camera. Edition 1.", imgs: ["photo/t&m1.jpeg"], tags: ["kycera"]};
  const p21 = { type: "project", link: "", name: "Hard-Drive Paper Model", class_short: "3D", semester: "spring 2017", desc: "3D Hard Drive sketch and paper model for 3D", imgs: ["projects/harddrive.jpeg"], tags: ["Sketch-Up"]};
  const p22 = { type: "project", isCS: false, link: "", name: "International Holocaust Film Festival Conference", semester: "fall 2018", desc: "Developed a series of Stamps and Posters for the International Holocaust Film Festival. Inspired by, and using pictures taken from the Holocaust Museum in downtown Boston, the posters emphasized the importance of remembering those affected by the holocaust, the stamps highlighting the countries most directly affected by concentration camps. The stamps and logo for the poster were a result of a 100-iteration design practice.", imgs: ["graphic/ifhs.jpeg"], tags: ["Illustrator", "Photography"]};
  const p23 = { type: "audio", name: "[playlist] february 2023", link: "https://open.spotify.com/playlist/0e0npwBus6ErHjJtvPRR7W?si=d1949ce30a40492b", semester: "feb 2023", desc: "Collection of Songs discovered in February of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p24 = { type: "project", isCS: false, link: "https://www.instagram.com/p/CURGRHKMQ6_/", name: "song poster design - Kendrick Lamar: Family Ties", semester: "fall 2022", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Series done for Kendrick Lamar and Baby Keem's song, Family Ties.", imgs: ["graphic/family.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p25 = { type: "project", isCS: false, link: "", name: "Album Trading Cards", semester: "spring 2021", desc: "A series of three marketing posters advertising an Album Trading Card Product. Inspired by the resurgence of pokemon trading cards, the product consists of different sets of cards, based on music eras and genres. I would have liked to do more “limited edition” sets of these cards, and packaging designs, but for the assignment only explored a single set of posters.", imgs: ["graphic/album_trading.jpeg"], tags: ["Graphic Design", "Illustrator"]};
  const p26 = { type: "project", link: "", name: "shoe storage project", class_short: "3D", semester: "spring 2017", desc: "Final project for a 3D Fundamentals class. Designed a functional storage piece to be used for travel.", imgs: ["fun/shoe.jpeg"], tags: ["Design", "Sketch-Up"]};
  const p27 = { type: "audio", name: "[playlist] january 2023", link: "https://open.spotify.com/playlist/5ZzNU0thNC6EXI7Jw7gfiD?si=4f001d669fbd4894&pt=8ce0b1ab5dee5e5dbcda854aad22159d", semester: "jan 2023", desc: "Collection of Songs discovered in January of 2023 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const pX7 = { type: "audio", name: "Spotify Party", semester: "spring 2021", desc: "A platform for music enthusiasts to host music parties while also receiving set feedback from guests. Attendees (or guests), have full view of upcoming songs in a SpotifyParty, as well as the standings of their votes and requests sent to the party host. Ever user's party song requests, voting habits, and songs from any party they've been to, are displayed through a series of informative graphics, and a user-specific Impact grade is given to them based on their activeness.", imgs: ["fun/spotify_party.jpeg"], tags: ["React.js", "Elixir-Phoenix", "Web Design", "Figma"]};
  const p28 = { type: "audio", name: "[playlist] december 2022", link: "https://open.spotify.com/playlist/6qtpE3wLYLEOQVcUZtDgrY?si=0784f3f896b94f41", semester: "dec 2023", desc: "Collection of Songs discovered in December of 2022 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p29 = { type: "project", link: "", name: "Planet Beat-Looper", class_short: "PB", semester: "fall 2017", desc: "Final Project; Circular-based Beat Looper for Programming Baiscs", imgs: ["fun/beat.jpeg"], tags: ["P5.js"]};
  const p30 = { type: "case", isCS: false, link: "", name: "Work Portfolio V1 (v1.austinkim.works)", semester: "summer 2021", desc: "Documenting the process of how I built my first portfolio. I further expanded on my front-end skills by working closely with React.js, Styled Components, and FramerAnimation to deliver an engaging experience to explore my previous works.", imgs: ["portfolio/V1.jpeg"], tags: ["React.js", "Elixir-Phoenix", "Figma", "Experience Design"]};
  const p31 = { type: "photo", name: "mini-series on homes from home", link: "https://www.instagram.com/p/CKH3qIEhSbH/", semester: "jan 2021", desc: "Mini photo-series on homes from my home. I've driven by these a thousand times, but never thought much of them. I was able to look at things differently this time around.", imgs: ["photo/houses.jpeg"], tags: ["minolta srt-101"]};
  const p32 = { type: "project", isCS: false, link: "https://www.instagram.com/p/B77nYyZhZb7/", name: "song poster design - Hundred Waters: Out Alee", semester: "fall 2020", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for Hundred Water's song, Out Alee.", imgs: ["graphic/outalee.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p33 = { type: "audio", name: "[playlist] november 2022", link: "https://open.spotify.com/playlist/4uCe65WKWVwczzAVcfJT04?si=6b740299f9b84543", semester: "nov 2023", desc: "Collection of Songs discovered in November of 2022 that inspire, excite, or provoke emotion in me.", imgs: [""], tags: ["Spotify"]};
  const p34 = { type: "project", isCS: false, link: "", name: "Type Studies Exploration", semester: "spring 2018", desc: "A series of typography exploration exercises from a Typography 1 course. I explored analyzing and respecting the beauty of type by pinpointing and framing the various anatomy of type in one exercise, showcased a series of typefaces of my liking in another, and created a series of logos using only letterforms in another.", imgs: ["graphic/type2.jpeg"], tags: ["InDesign", "Typography"]};
  const p35 = { type: "case", link: "", name: "Data Privacy Campaign", semester: "fall 2019", desc: "A Data Privacy Campaign is a project aimed at bringing awareness to data privacy, and the dangers surrounding it. Social media corporations are always watching, always collecting data on user’s habits. Final deliverable: website design mockup, series of Instagram Advertisements, series of posters, laptop and phone stickers, and business cards.", imgs: ["graphic/privacy.jpeg"], tags: ["InDesign", "Illustrator", "Graphic Design"]};
  const p36 = { type: "project", isCS: false, link: "", name: "song poster design - Raveena: Moonstone", semester: "fall 2020", desc: "Part of a collection of graphics I've created for songs I've grown fond of over the years. Done for Raveena's EP, Moonstone.", imgs: ["graphic/raveena.jpeg"], tags: ["Illustrator", "Photoshop"]};
  const p37 = { type: "audio", name: "Texas Instruments I", link: "https://www.soundcloud.com/nektine", semester: "TBD", desc: "Redacted", imgs: [""], tags: ["Ableton Live 11"]};
  const p38 = { type: "photo", name: "corners of ATL Suburbs", semester: "fall 2020", desc: "Small series of corners photographed around Atlanta.", imgs: ["photo/atl.jpeg"], tags: []};
  const p39 = { type: "project", link: "", name: "Siddhartha Book Design", semester: "spring 2018", desc: "A book design typography exercise for the first chapter of Siddhartha: an Indian Tale by Hermann Hesse. Process involved printing and hand-binding (with tape) multiple sets of designs to further refine every page in this exercise.", imgs: ["graphic/siddhartha.jpeg"], tags: ["InDesign", "Typography"]};
  const p40 = { type: "project", link: "", name: "PhotoWalk", semester: "fall 2020", desc: "Photowalk is an app designed to encourage both digital and film photographers to become more familiar with their cities by going on “Photo Walks”, and expanding on their photography skills. By being able to share experiences through photos, walk routes, and specific stop locations, photographers can help others newer to the city to find interesting streets to take their own pictures of.", imgs: ["projects/photowalk.jpeg"], tags: ["Figma", "Mobile Design", "Experience Design"]};
  const p41 = { type: "project", link: "", name: "How a Song is Built", class_short: "ID1", semester: "Fall '18", desc: "An infographic dissecting and explaining the anatomy of a song, in their most generic form. As complex a songs can be, I broke up what a very popular but standardized pop song from the 2000’s - 2020’s era would most likely entail, as well as the steps it takes for a song idea to develop into a produced song.", imgs: ["graphic/howasong.jpeg"], tags: ["Illustrator", "Information Design"]};
  const p42 = { type: "case", link: "", name: "NEU Covid App Redesign", class_short: "HCI", semester: "Fall '20", desc: "An app redesign of the Northeastern Covid-Tracker app, focused on simplicity and functionality. Northeastern's required forms and flows are included, such as self-screening and positive test result forms, as well as a few features such as a news tab, extended account details on a user’s profile page, and a series of articles to encourage proper and safe Covid practices.", imgs: ["projects/covid.jpeg"], tags: ["Figma", "Mobile Design"]};
  const p43 = { type: "project", link: "", name: "Fog X Flo Reflection", class_short: "5D", semester: "Fall '18", desc: "Fog X Flo project and reflection for 5D Fundamentals. Created a website to host reflection and interpretation of temporary experience art installation around parks in Boston, MA.", imgs: ["projects/fog.jpeg"], tags: ["Javascript", "CSS", "HTML", "Photography", "Experience Design"]};

  const myProjects = [ p1, p2, p3, p4, p5, p6, p7, p8, p10, p35, p11, p12, p40, p13, p14, p15, p16, p17, p18, p24, p19, p20, p21, p31, p9, p22, p23, p25, p26, p27, pX7, p28, p29, p30, p32, p33, p36, p37, p38, p39, p43, p42, p34, p41 ];

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

    let project_tags = project.tags.map((tag, index) => (
      <ProjectTag>{tag}</ProjectTag>
    ));

    // let height_varPreview = "calc(120px + " + ((index) * (90 / (projects.length + 3))) + "vh)";
    
    // if (project.type == '')
      // IF EMPTY, RETURN ALL

    return (
      <WorkItem 
        onClick={()=> handleClick(index)}
        id={index} 
        ref={myRefs[index]}
        selected={(index == projectValue) ? true : false } 
        filtered={(filters.length < 1 || (filters.includes(project.type))) ? true : false }>
              {project.name}
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
        >clear all</ClearFilters>
        <Filter onClick={projectFilter} active={(filters.includes("project")) ? true : false }>projects <a>{(filters.includes("project")) ? "✕" : ""}</a></Filter>
        <Filter onClick={caseFilter} active={(filters.includes("case")) ? true : false }>case studies <a>{(filters.includes("case")) ? "✕" : ""}</a></Filter>
        <Filter onClick={photoFilter} active={(filters.includes("photo")) ? true : false }>photo <a>{(filters.includes("photo")) ? "✕" : ""}</a></Filter>
        <Filter onClick={audioFilter} active={(filters.includes("audio")) ? true : false }>audio <a>{(filters.includes("audio")) ? "✕" : ""}</a></Filter>
        <Filter onClick={fabricFilter} active={(filters.includes("fabric")) ? true : false }>fabric <a>{(filters.includes("fabric")) ? "✕" : ""}</a></Filter>
      </FiltersContainer>

      <NavDOMLinkAbout thispage={true} onClick={() => toggle('info')}>about</NavDOMLinkAbout>
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
          <WorkImage>
            <img src={rightImageSource}/>
            {/* <img src={"testProjCover" + projectValue + ".png"}/> */}
          </WorkImage>
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
