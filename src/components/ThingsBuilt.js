import React, { useEffect, useRef, useState } from "react";
import "../Css_applied/thingsBuiltStyles.css";
import pdfimage from "../images/pdfimage.jpeg";
import codeway from "../images/codeway.jpeg";
import PYTHONDSA from "../images/PYTHONDSA.jpeg";
import NotesApp from "../images/NotesApp.jpeg";
import zoomApp from "../images/zoomApp.jpeg"


const ThingsBuilt = ({ workBtnClickedActive }) => {
  const [ecoFactorThingMouseOver, setEcoFactorThingMOuseOver] = useState(false);
  const [zoomThingMouseOver, setZoomThingMouseOver] = useState(false);
  const [plantThingMouseOver, setPlantThingMOuseOver] = useState(false);
  const [podcastThingMouseOver, setPodcastThingMOuseOver] = useState(false);
  const [firstThingsMouseOver, setFirstThingMOuseOver] = useState(false);
  // Hover On Icons
  const [ecoFactorThingGithubHover, setEcoFactorThingGithubHover] = useState(false);
  const [zoomThingGithubHover, setZoomThingGithubHover] = useState(false);
  const [ecoFactorThingLinkHover, setEcoFactorThingLinkHover] = useState(false);
  const [firstThingGithubHover, setFirstThingGithubHover] = useState(false);
  const [plantThingGithubHover, setPlantThingGithubHover] = useState(false);

  // Title Appear when Displayed
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOne(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refOne.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });

  // EcoFactor Thing Appear when Displayed
  const [isVisibleEcoFactor, setIsVisibleEcoFactor] = useState(false);
  const [ecoFactorThingVisible, setEcoFactorThingVisible] = useState(false);
  const refEcoFactorThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleEcoFactor(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refEcoFactorThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleEcoFactor) {
      setTimeout(() => {
        setEcoFactorThingVisible(true);
      }, 200);
    }
  });

  // Plant Thing Appear when Displayed
  const [isVisiblePlant, setIsVisiblePlant] = useState(false);
  const [plantThingVisible, setPlantThingVisible] = useState(false);
  const refPlantThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisiblePlant(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refPlantThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisiblePlant) {
      setTimeout(() => {
        setPlantThingVisible(true);
      }, 200);
    }
  });

  // podcast Thing Appear when Displayed
  const [isVisiblePodcast, setIsVisiblePodcast] = useState(false);
  const [podcastThingVisible, setPodcastThingVisible] = useState(false);
  const refPodcastThing = useRef(null);

  const [zoomThingVisible, setZoomThingVisible] = useState(false);
  const [isVisibleZoom, setIsVisibleZoom] = useState(false);
  const refZoomThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisiblePodcast(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refPodcastThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisiblePodcast) {
      setTimeout(() => {
        setPodcastThingVisible(true);
      }, 200);
    }
  });

  useEffect(() => {
    if (isVisibleZoom) {
      setTimeout(() => {
        setZoomThingVisible(true);
      }, 200);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleZoom(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refZoomThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // First Thing Appear when Displayed
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [firstThingVisible, setFirstThingVisible] = useState(false);
  const refFirstThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTwo(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTwo) {
      setTimeout(() => {
        setFirstThingVisible(true);
      }, 200);
    }
  });


  // For small Screen
  // const yourDiv = document.getElementById("firstDiv");
  function isElementInViewportWithOffset(el, offset = 0) {
    let rect = el.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Check if the top of the element is inside the viewport with the specified offset
    let topInView = rect.top + offset >= 0 && rect.top + offset <= windowHeight;

    return topInView;
  }

  // codeway Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("ecofactorThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });
  // Notes App Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("plantThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });
  // Podcast Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("podcastThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });
  // DSA Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("firstThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });
  // Zoom Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("zoomThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });


  // Handling when click on Work happens on the Navbar
  const [workNavClick, setWorkNavClick] = useState(false);
  useEffect(() => {
    setWorkNavClick(workBtnClickedActive);
  }, [workBtnClickedActive]);

  useEffect(() => {
    if (workNavClick) {
      var el = document.querySelector("#WORKDIV");
      var start = window.pageYOffset;
      var end = el.offsetTop;
      var duration = 1000;
      var easing = function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var startTime = null;

      function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = easing(timeElapsed / duration);
        window.scroll(0, start + (end - start) * progress);
        if (timeElapsed < duration) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  }, [workNavClick]);

  return (
    <div
      id="WORKDIV"
      className={` ml-8 mr-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        ref={refOne}
        className={`contentContainer ${titleVisible ? "show" : ""
          } pt-[5.538rem] relative`}
      >
        <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
          03.
        </div>{" "}
        <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
          Somethings I've built
          <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
        </div>
        <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[50%] workScreen7:w-[22rem]"></div>
      </div>
      {/* Things */}

      {/* Things when the Screen < 768 */}
      <div className={"block md:hidden"}>
        {/* codeway Thing */}
        <div
          id="ecofactorThing"
          className={`contentContainer grid grid-cols-1 object-top object-contain items-start py-4 mt-20 tbScreen9:mt-10 tbScreen10:mt-0`}
        >
          <img
            className="opacity-[0.15] w-[100%] h-[100%] row-start-1 col-start-1 items-start justify-start object-top object-contain"
            src={codeway}
            alt="image"
          />
          <div className="grid grid-template-rows-4 grid-template-columns-2 gap-[10px] place-items-start text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased row-start-1 col-start-1 pt-[40px] px-[40px] pb-[30px] tbScreen1:mt-[3%] tbScreen2:mt-[1%] tbScreen2:pt-[25px] tbScreen2:gap-[3px] tbScreen5:mt-[-2%] tbScreen5:px-[20px]">
            <div className="bg-transparent tbScreen5:text-[12px]">
              Featured Project
            </div>
            <div className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right tbScreen1:mt-[-10px] tbScreen2:mt-[-4px] tbScreen5:text-[22px] tbScreen5:leading-[1] tbScreen5:mt-[2px]">
              codeway
            </div>
            <div className="bg-transparent text-[18px] text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] pr-[3%] text-left tbScreen1:py-[25px] tbScreen2:py-[10px] tbScreen4:py-[15px] tbScreen5:text-[16px] tbScreen5:py-[10px] tbScreen7:leading-[1.1] tbScreen8:leading-[1]">
              Ai Tattoo Generator: In this project, I have implement flux ai model for tattoo generation, AWS service for fetching relative category tattoo and in-apps purchase for payment integration.
            </div>
            <div className="bg-transparent text-[13px] text-[#ccd6f6] font-customMono tbScreen5:text-[11px] tbScreen5:mt-[6px]">
              Swift, SwiftyStorekit, Generative AI(Flux Model, Weaviate AWS Services)
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[90px] left-[10%] tbScreen52:bottom-[30px] tbScreen53:bottom-[16px] tbScreen54:bottom-0 tbScreen55:bottom-[-10px] tbScreen57:bottom-[-20px] tbScreen57:left-[9.5%] tbScreen56:left-[9.5%] tbScreen59:bottom-[-9px] tbScreen60:left-[12%] tbScreen61:left-[6%] tbScreen62:left-[8%] tbScreen63:left-[10%] tbScreen64:left-[12%]">
              <div className="flex w-[50px] justify-between tbScreen8:w-[50px] bg-[#2f3b4e] tbScreen58:bg-transparent">
                <span className="h-[22px] w-[22px] text-[#ccd6f6] tbScreen1:mt-[30px] tbScreen3:mt-[15px] tbScreen4:mt-[20px] tbScreen5:mt-[10px]">
                  <a
                    href="https://ecofactorsite.netlify.app/"
                    aria-label="External Link"
                    className="external"
                    target="_blank"
                  >
                    <svg
                      className="bg-[#2f3b4e] tbScreen58:bg-transparent feather feather-external-link"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Notes App Thing */}
        <div
          id="plantThing"
          className={`contentContainer grid grid-cols-1 object-top object-contain items-start py-4`}
        >
          <img
            className="row-start-1 col-start-1 opacity-[0.15] w-[100%] h-[100%] items-start justify-start object-top object-contain"
            src={NotesApp}
            alt="image"
          />
          <div className="grid grid-template-rows-4 grid-template-columns-2 gap-[10px] place-items-end text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased row-start-1 col-start-1 pt-[88px] px-[40px] pb-[30px] tbScreen1:mt-[3%] tbScreen2:mt-[1%] tbScreen3:pt-[25px] tbScreen3:gap-[3px] tbScreen5:mt-[-2%] tbScreen5:px-[20px] tbScreen12:pt-[40px]">
            <div className="bg-transparent tbScreen5:text-[12px]">
              Featured Project
            </div>
            <div className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right tbScreen1:mt-[-10px] tbScreen3:mt-[-4px] tbScreen5:pl-[40%] tbScreen5:text-[22px] tbScreen6:pl-[10%] tbScreen5:leading-[1] tbScreen5:mt-[7px]">
              Collaborative Notes App
            </div>
            <div className="bg-transparent text-[18px] text-[#a8b2d1] font-calibri leading-[1.3] py-[20px] pl-[3%] text-right tbScreen1:py-[25px] tbScreen3:py-[10px] tbScreen4:py-[15px] tbScreen5:text-[16px] tbScreen5:py-[10px] tbScreen5:leading-[1.1]">
              NotesApp:  it allows users to create, edit, and delete notes effortlessly. Each note can be customized, sorted, and tagged for easy access, making it an ideal solution for managing personal ideas, to-do lists, and daily reminders.
            </div>
            <div className="bg-transparent text-[13px] text-[#ccd6f6] font-customMono tbScreen5:text-[11px] tbScreen5:mt-[6px]">
              ReactJS, Firebase authentication, FireStore, Redux, Tailwind, HTML, CSS, SAAS
            </div>
          </div>
          <div className="relative bg-transparent">
            <div className="absolute right-[9%] top-[-130px] tbScreen44:top-[-104px] tbScreen45:top-[-144px] tbScreen46:top-[-120px] tbScreen47:top-[-80px] tbScreen48:top-[-50px] tbScreen49:top-[-30px] tbScreen50:right-[11%] tbScreen51:right-[13%]">
              <a
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[20px] antialiased  tbScreen1:mt-[30px] tbScreen3:mt-[15px] tbScreen4:mt-[20px] tbScreen5:mt-[10px] tbScreen11:mt-[10px]"
                href="https://github.com/Ahmadjajja/plant_disease_detection"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon feather feather-github"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* pdf Thing */}
        <div
          id="podcastThing"
          className={`contentContainer grid grid-cols-1 object-top object-contain items-start py-4 mt-20 tbScreen9:mt-10 tbScreen10:mt-0`}
        >
          <img
            className="opacity-[0.15] w-[100%] h-[100%] row-start-1 col-start-1 items-start justify-start object-top object-contain"
            src={pdfimage}
            alt="pdfimage"
          />
          <div className="grid grid-template-rows-4 grid-template-columns-2 gap-[10px] place-items-start text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased row-start-1 col-start-1 pt-[40px] px-[40px] pb-[30px] tbScreen1:mt-[3%] tbScreen2:mt-[1%] tbScreen2:pt-[25px] tbScreen2:gap-[3px] tbScreen5:mt-[-2%] tbScreen5:px-[20px]">
            <div className="bg-transparent tbScreen5:text-[12px]">
              Featured Project
            </div>
            <div className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right tbScreen1:mt-[-10px] tbScreen2:mt-[-4px] tbScreen5:text-[22px] tbScreen5:leading-[1] tbScreen5:mt-[2px]">
              Pdf Converter
            </div>
            <div className="bg-transparent text-[18px] text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] pr-[3%] text-left tbScreen1:py-[25px] tbScreen2:py-[10px] tbScreen4:py-[15px] tbScreen5:text-[16px] tbScreen5:py-[10px] tbScreen7:leading-[1.1] tbScreen8:leading-[1]">
              This app allows users to convert files from various formats—such as Word, Excel, PowerPoint, images (JPEG, PNG), and more—into PDFs with just a few taps.
            </div>
            <div className="bg-transparent text-[13px] text-[#ccd6f6] font-customMono tbScreen5:text-[11px] tbScreen5:mt-[6px]">
              Swift, Ai Model, Storekit, Pdfkit
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[90px] left-[10%] tbScreen52:bottom-[30px] tbScreen53:bottom-[16px] tbScreen54:bottom-0 tbScreen55:bottom-[-10px] tbScreen57:bottom-[-20px] tbScreen57:left-[9.5%] tbScreen56:left-[9.5%] tbScreen59:bottom-[-9px] tbScreen60:left-[12%] tbScreen61:left-[6%] tbScreen62:left-[8%] tbScreen63:left-[10%] tbScreen64:left-[12%]">
              <div className="flex w-[50px] justify-between tbScreen8:w-[50px] bg-[#2f3b4e] tbScreen58:bg-transparent">
                <a
                  target="_blank"
                  className="tbScreen1:mt-[30px] tbScreen3:mt-[15px] tbScreen4:mt-[20px] tbScreen5:mt-[10px] inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer antialiased"
                  aria-label="GitHub Link"
                >
                  <svg
                    className="svgGithubIcon bg-[#2f3b4e] tbScreen58:bg-transparent feather feather-github"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DSA Thing */}
        <div
          id="firstThing"
          className={`contentContainer grid grid-cols-1 object-top object-contain items-start py-4`}
        >
          <img
            className="row-start-1 col-start-1 opacity-[0.15] w-[100%] h-[100%] items-start justify-start object-top object-contain"
            src={PYTHONDSA}
            alt="image"
          />
          <div className="grid grid-template-rows-4 grid-template-columns-2 gap-[10px] place-items-end text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased row-start-1 col-start-1 pt-[88px] px-[40px] pb-[30px] tbScreen1:mt-[3%] tbScreen2:mt-[1%] tbScreen3:pt-[25px] tbScreen3:gap-[3px] tbScreen5:mt-[-2%] tbScreen5:px-[20px] tbScreen12:pt-[40px]">
            <div className="bg-transparent tbScreen5:text-[12px]">
              Featured Project
            </div>
            <div className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right tbScreen1:mt-[-10px] tbScreen3:mt-[-4px] tbScreen5:pl-[40%] tbScreen5:text-[22px] tbScreen6:pl-[10%] tbScreen5:leading-[1] tbScreen5:mt-[7px]">
              Python DSA in 5 Months
            </div>
            <div className="bg-transparent text-[18px] text-[#a8b2d1] font-calibri leading-[1.3] py-[20px] pl-[3%] text-right tbScreen1:py-[25px] tbScreen3:py-[10px] tbScreen4:py-[15px] tbScreen5:text-[16px] tbScreen5:py-[10px] tbScreen5:leading-[1.1]">
              This is the Curriculum to learn python DSA from scratch to expert.
              This repository contains all of code samples during my DSA
              Learning Journey.
            </div>
            <div className="bg-transparent text-[13px] text-[#ccd6f6] font-customMono tbScreen5:text-[11px] tbScreen5:mt-[6px]">
              Markdown
            </div>
          </div>
          <div className="relative bg-transparent">
            <div className="absolute right-[9%] top-[-130px] tbScreen44:top-[-104px] tbScreen45:top-[-144px] tbScreen46:top-[-120px] tbScreen47:top-[-80px] tbScreen48:top-[-50px] tbScreen49:top-[-30px] tbScreen50:right-[11%] tbScreen51:right-[13%]">
              <a
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[20px] antialiased  tbScreen1:mt-[30px] tbScreen3:mt-[15px] tbScreen4:mt-[20px] tbScreen5:mt-[10px] tbScreen11:mt-[10px]"
                href="https://github.com/AbdulMunnam07/Python_DSA"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon feather feather-github"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Zoom Thing */}
          <div
            id="zoomThing"
            className={`contentContainer grid grid-cols-1 object-top object-contain items-start py-4 mt-20 tbScreen9:mt-10 tbScreen10:mt-0`}
          >
            <img
              className="opacity-[0.15] w-[100%] h-[100%] row-start-1 col-start-1 items-start justify-start object-top object-contain"
              src={zoomApp}
              alt="zoomApp"
            />
            <div className="grid grid-template-rows-4 grid-template-columns-2 gap-[10px] place-items-start text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased row-start-1 col-start-1 pt-[40px] px-[40px] pb-[30px] tbScreen1:mt-[3%] tbScreen2:mt-[1%] tbScreen2:pt-[25px] tbScreen2:gap-[3px] tbScreen5:mt-[-2%] tbScreen5:px-[20px]">
              <div className="bg-transparent tbScreen5:text-[12px]">
                Featured Project
              </div>
              <div className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right tbScreen1:mt-[-10px] tbScreen2:mt-[-4px] tbScreen5:text-[22px] tbScreen5:leading-[1] tbScreen5:mt-[2px]">
                EasyJoin for Zoom
              </div>
              <div className="bg-transparent text-[18px] text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] pr-[3%] text-left tbScreen1:py-[25px] tbScreen2:py-[10px] tbScreen4:py-[15px] tbScreen5:text-[16px] tbScreen5:py-[10px] tbScreen7:leading-[1.1] tbScreen8:leading-[1]">
              This app allow user to create zoom meetings in just few steps. Current date meeting will show in a form of lists when user will open app. This app also allow user to make todo list as a reminder.
              </div>
              <div className="bg-transparent text-[13px] text-[#ccd6f6] font-customMono tbScreen5:text-[11px] tbScreen5:mt-[6px]">
                Swift, Swift UI, Storekit
              </div>
            </div>
            <div className="relative">
              <div className="absolute bottom-[90px] left-[10%] tbScreen52:bottom-[30px] tbScreen53:bottom-[16px] tbScreen54:bottom-0 tbScreen55:bottom-[-10px] tbScreen57:bottom-[-20px] tbScreen57:left-[9.5%] tbScreen56:left-[9.5%] tbScreen59:bottom-[-9px] tbScreen60:left-[12%] tbScreen61:left-[6%] tbScreen62:left-[8%] tbScreen63:left-[10%] tbScreen64:left-[12%]">
                <div className="flex w-[50px] justify-between tbScreen8:w-[50px] bg-[#2f3b4e] tbScreen58:bg-transparent">
                  <a
                    target="_blank"
                    className="tbScreen1:mt-[30px] tbScreen3:mt-[15px] tbScreen4:mt-[20px] tbScreen5:mt-[10px] inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer antialiased"
                    aria-label="GitHub Link"
                  >
                    <svg
                      className="svgGithubIcon bg-[#2f3b4e] tbScreen58:bg-transparent feather feather-github"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Things when the Screen >= 768 */}
      <div className={" hidden md:block"}>
        {/* AI Tattoo Thing */}
        <div
          ref={refEcoFactorThing}
          className={`contentContainer ${ecoFactorThingVisible ? "show" : ""
            } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased">
            <p>Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1]">
              Codeway
            </h3>
            <div className="description2 text-[18px] bg-[#172a45] shadow-none text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] text-left relative z-20 rounded mb-[3%] mt-[7%] tbScreen40:px-[20px] tbScreen40:py-[20px]">
              <p className="text-[#a8b2d1] bg-[#172a45]">
                Ai Tattoo Generator: In this project, I have implement flux ai model for tattoo generation, AWS service for fetching relative category tattoo and in-apps purchase for payment integration.
              </p>
            </div>
            <ul className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left pr-[90px] leading-[1.1] mb-[20px] tbScreen41:pr-[110px] tbScreen42:pr-[128px] tbScreen43:pr-[77px]">
              <li>
                Swift, SwiftyStorekit, AWS SDK, Generative AI(Flux Model, AWS Service)
              </li>
            </ul>
            <div className="tbScreen27:pr-[41px]">
            </div>
          </div>
          <div
            className={
              ecoFactorThingMouseOver
                ? "project-image-hover2"
                : "project-image2 mix-blend-exclusion"
            }
          >
            <a
              href="https://www.codeway.pk/"
              target="_blank"
            >
              <div>
                <img
                  onMouseOver={() => setEcoFactorThingMOuseOver(true)}
                  onMouseOut={() => setEcoFactorThingMOuseOver(false)}
                  className="object-top object-contain"
                  src={
                    ecoFactorThingGithubHover
                      ? codeway
                      : codeway
                  }
                  alt="image"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Notes Thing */}
        <div
          ref={refPlantThing}
          className={`contentContainer ${plantThingVisible ? "show" : ""
            } featured__StyledProject ml-[5%] mr-[5%]`}
        >
          <div className="project-content text-right text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased ">
            <p className="tbScreen27:pr-[41px]">Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right relative z-0 md:opacity-[1] mb-[7%] tbScreen27:pr-[41px] tbScreen26:mb-[0] tbScreen29:mb-[7%] tbScreen27:mb-[1%]">
              Collaborative Notes App
            </h3>
            <div className="text-[18px] bg-[#172a45] text-[#a8b2d1] font-calibri leading-[1.3] text-right relative z-20 shadow-OtherProjectsBoxShadow rounded py-[20px] pl-[3%] pr-[8%] mb-[3%] tbScreen26:pl-[0] tbScreen26:pr-[0] tbScreen26:py-[25px] tbScreen26:mb-[0] tbScreen27:mb-[3%] tbScreen27:px-[10px] tbScreen27:py-[40px] tbScreen29:py-[20px] tbScreen29:inline-block tbScreen29:items-end tbScreen29:w-[80%]">
              <p className="bg-[#172a45]">
                NotesApp:  it allows users to create, edit, and delete notes effortlessly. Each note can be customized, sorted, and tagged for easy access, making it an ideal solution for managing personal ideas, to-do lists, and daily reminders.
              </p>
            </div>
            <ul className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-right tbScreen27:pr-[41px]">
              <li>ReactJS, Firebase, Firebase Authencation, Redux Toolkit, HTML, CSS, SAAS</li>
            </ul>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setPlantThingGithubHover(true)}
                onMouseOut={() => setPlantThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/AbdulMunnam07/FullStack_NotesApp"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon feather feather-github"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={plantThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <span className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] ml-[10px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration">
                <a
                  onMouseOver={() => setEcoFactorThingLinkHover(true)}
                  onMouseOut={() => setEcoFactorThingLinkHover(false)}
                  href="full-stack-notes-app-8nvl.vercel.app/login"
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={ecoFactorThingLinkHover ? "#64ffda" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div
            className={
              plantThingMouseOver
                ? "project-image-hover"
                : "project-image mix-blend-screen"
            }
          >
            <a href="https://github.com/AbdulMunnam07/FullStack_NotesApp" target="_blank">
              <div>
                <img
                  className="object-top object-contain"
                  onMouseOver={() => setPlantThingMOuseOver(true)}
                  onMouseOut={() => setPlantThingMOuseOver(false)}
                  src={plantThingMouseOver ? NotesApp : NotesApp}
                  alt="image"
                />
              </div>
            </a>
          </div>
        </div>
        {/* PDF Thing */}
        <div
          ref={refPodcastThing}
          className={`contentContainer ${podcastThingVisible ? "show" : ""
            } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased">
            <p>Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1]">
              Pdf Converter
            </h3>
            <div className="description2 text-[18px] bg-[#172a45] shadow-none text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] text-left relative z-20 rounded mb-[3%] mt-[7%] tbScreen40:px-[20px] tbScreen40:py-[20px]">
              <p className="text-[#a8b2d1] bg-[#172a45]">
                This app allows users to convert files from various formats—such as Word, Excel, PowerPoint, images (JPEG, PNG), and more—into PDFs with just a few taps.
              </p>
            </div>
            <ul className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left pr-[90px] leading-[1.1] mb-[20px] tbScreen41:pr-[110px] tbScreen42:pr-[128px] tbScreen43:pr-[77px]">
              <li>
                Swift, Ai Model, Storekit, Pdfkit
              </li>
            </ul>
            <div className="tbScreen27:pr-[41px]">
            </div>
          </div>
          <div
            className={
              ecoFactorThingMouseOver
                ? "project-image-hover2"
                : "project-image2 mix-blend-exclusion"
            }
          >
            <a
              href="https://www.codeway.pk/"
              target="_blank"
            >
              <div>
                <img
                  onMouseOver={() => setEcoFactorThingMOuseOver(true)}
                  onMouseOut={() => setEcoFactorThingMOuseOver(false)}
                  className="object-top object-contain"
                  src={
                    ecoFactorThingGithubHover
                      ? pdfimage
                      : pdfimage
                  }
                  alt="image"
                />
              </div>
            </a>
          </div>
        </div>
        {/* DSA Thing */}
        <div
          ref={refFirstThing}
          className={`contentContainer ${firstThingVisible ? "show" : ""
            } featured__StyledProject ml-[5%] mr-[5%]`}
        >
          <div className="project-content text-right text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased ">
            <p className="tbScreen27:pr-[41px]">Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right relative z-0 md:opacity-[1] mb-[7%] tbScreen27:pr-[41px] tbScreen26:mb-[0] tbScreen29:mb-[7%] tbScreen27:mb-[1%]">
              <span className="tbScreen18:opacity-[0] tbScreen23:opacity-[0.5] tbScreen24:opacity-[1] tbScreen27:opacity-[0.5] tbScreen28:opacity-[1]">
                P
              </span>
              <span className="tbScreen18:opacity-[0] tbScreen21:opacity-[0.5] tbScreen22:opacity-[1]">
                y
              </span>
              <span className="tbScreen18:opacity-[0.5] tbScreen19:opacity-[1]">
                t
              </span>
              hon in 5 Months
            </h3>
            <div className="text-[18px] bg-[#172a45] text-[#a8b2d1] font-calibri leading-[1.3] text-right relative z-20 shadow-OtherProjectsBoxShadow rounded py-[20px] pl-[3%] pr-[8%] mb-[3%] tbScreen26:pl-[0] tbScreen26:pr-[0] tbScreen26:py-[25px] tbScreen26:mb-[0] tbScreen27:mb-[3%] tbScreen27:px-[10px] tbScreen27:py-[40px] tbScreen29:py-[20px] tbScreen29:inline-block tbScreen29:items-end tbScreen29:w-[80%]">
              <p className="bg-[#172a45]">
                This is the Curriculum to learn Python DSA from scratch to expert.
                This repository contains all of code samples during my DSA
                Learning Journey.
              </p>
            </div>
            <ul className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-right tbScreen27:pr-[41px]">
              <li>Markdown</li>
            </ul>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setFirstThingGithubHover(true)}
                onMouseOut={() => setFirstThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/AbdulMunnam07/Python_DSA"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon feather feather-github"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={firstThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className={
              firstThingsMouseOver
                ? "project-image-hover"
                : "project-image mix-blend-screen"
            }
          >
            <a href="https://github.com/AbdulMunnam07/Python_DSA" target="_blank">
              <div>
                <img
                  className="object-top object-contain"
                  onMouseOver={() => setFirstThingMOuseOver(true)}
                  onMouseOut={() => setFirstThingMOuseOver(false)}
                  src={firstThingsMouseOver ? PYTHONDSA : PYTHONDSA}
                  alt="image"
                />
              </div>
            </a>
          </div>
        </div>
        {/* Zoom joiner app */}
        <div
          ref={refZoomThing}
          className={`contentContainer ${zoomThingVisible ? "show" : ""
            } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased">
            <p>Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1]">
              EasyJoin for Zoom
            </h3>
            <div className="description2 text-[18px] bg-[#172a45] shadow-none text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] text-left relative z-20 rounded mb-[3%] mt-[7%] tbScreen40:px-[20px] tbScreen40:py-[20px]">
              <p className="text-[#a8b2d1] bg-[#172a45]">
                This app allow user to create zoom meetings in just few steps. Current date meeting will show in a form of lists when user will open app. This app also allow user to make todo list as a reminder.
              </p>
            </div>
            <ul className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left pr-[90px] leading-[1.1] mb-[20px] tbScreen41:pr-[110px] tbScreen42:pr-[128px] tbScreen43:pr-[77px]">
              <li>
                Swift, Swift UI, Storekit.
              </li>
            </ul>
            <div className="tbScreen27:pr-[41px]">
            </div>
          </div>
          <div
            className={
              zoomThingMouseOver
                ? "project-image-hover2"
                : "project-image2 mix-blend-exclusion"
            }
          >
            <a
              href="https://www.codeway.pk/"
              target="_blank"
            >
              <div>
                <img
                  onMouseOver={() => setZoomThingMouseOver(true)}
                  onMouseOut={() => setZoomThingMouseOver(false)}
                  className="object-top object-contain"
                  src={
                    zoomThingGithubHover
                      ? zoomApp
                      : zoomApp
                  }
                  alt="image"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsBuilt;
