import { React, useEffect, useRef, useState } from "react";
import "../Css_applied/workStyles.css";

const Work = ({ experienceBtnClickedActive }) => {
  // Work
  const [firstWorkClicked, setFirstWorkClicked] = useState(true);
  const [firstWorkClicked2, setFirstWorkClicked2] = useState(false);
  const [firstWorkClicked3, setFirstWorkClicked3] = useState(false);

  // Bar
  const [firstBarClicked, setFirstBarClicked] = useState(false);
  const [firstBarClicked2, setFirstBarClicked2] = useState(false);
  const [firstBarClicked3, setFirstBarClicked3] = useState(false);
  // Scroll Left and Right
  const [scrollLeft, setScrollLeft] = useState(0);
  // Hover
  const [firstWorkHover, setFirstWorkHover] = useState(false);
  const [firstWorkHover2, setFirstWorkHover2] = useState(false);
  const [firstWorkHover3, setFirstWorkHover3] = useState(false);

  // Displaying content after show time
  const workRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setisVisibleTwo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!workRef.current) {
        return;
      }

      const { top, height } = workRef.current.getBoundingClientRect();
      if (top <= 600 && top + height >= 600) {
        setIsVisible(true);
        setTimeout(() => {
          setisVisibleTwo(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [workRef]);

  // For Small Screen
  const yourDiv = document.getElementById("firstDiv");
  function isElementInViewportWithOffset(el, offset = 0) {
    let rect = el.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    let topInView = rect.top + offset >= 0 && rect.top + offset <= windowHeight;

    return topInView;
  }

  window.addEventListener("scroll", function () {
    let element = document.getElementById("title");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  window.addEventListener("scroll", function () {
    let element = document.getElementById("body");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  //__________________________________________________________

  const handleScroll = (event) => {
    console.log("event.target.scrollLeft: ", event)
    setScrollLeft(event.target.scrollLeft);
  };


  const handleFirstWorkClicked = () => {
    setFirstWorkClicked(true);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(false);
    handleFirstBarClicked();
  };

  const handleFirstWorkClicked2 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(true);
    setFirstWorkClicked3(false);
    handleFirstBarClicked2();
  };
  const handleFirstWorkClicked3 = () => {
    setFirstWorkClicked(false);
    setFirstWorkClicked2(false);
    setFirstWorkClicked3(true);
    handleFirstBarClicked3();
  };

  const handleFirstBarClicked = () => {
    setFirstBarClicked(true);

    setFirstBarClicked2(false);
    setFirstBarClicked3(false);
  };
  const handleFirstBarClicked2 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(true);
    setFirstBarClicked3(false);
  };
  const handleFirstBarClicked3 = () => {
    setFirstBarClicked(false);

    setFirstBarClicked2(false);
    setFirstBarClicked3(true);
  };

  useEffect(() => {
    setFirstBarClicked(true);
  }, []);

  // Handling when click on Experience happens on the Navbar
  const [experienceNavClick, setExperienceNavClick] = useState(false);
  useEffect(() => {
    setExperienceNavClick(experienceBtnClickedActive);
  }, [experienceBtnClickedActive]);

  useEffect(() => {
    if (experienceNavClick) {
      var el = document.querySelector("#EXPERIENCEDIV");
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
  }, [experienceNavClick]);
  return (
    <div id="EXPERIENCEDIV" ref={workRef}>
      <div className="mr-8 ml-8 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]">
        {/* Header Section */}
        <div
          id="title"
          className={`contentContainer ${isVisible ? "show" : ""
            } pt-[5.538rem] relative`}
        >
          <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
            02.
          </div>{" "}
          <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
            Where I've Worked
            <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
          </div>
          <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[50%] workScreen7:w-[22rem]"></div>
        </div>
        {/* When screen > 500px */}
        <div
          className={`contentContainer ${isVisibleTwo ? "show" : ""
            } block workScreen1:hidden`}
        >
          <div className="flex">
            {/* Left Side */}
            <div className="w-[20%] myScreen1:w-[8rem] workScreen10:w-[25.5%]">
              <div className="h-[7.6rem] relative border-l-[1px] border-l-[#8892b0] rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay">
                {/* iCodeGuru */}
                <div
                  onMouseOver={() => setFirstWorkHover(true)}
                  onMouseOut={() => setFirstWorkHover(false)}
                  onClick={handleFirstWorkClicked}
                  className={
                    firstWorkHover
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  iCodeGuru
                </div>
                {/* Codeway */}
                <div
                  onMouseOver={() => setFirstWorkHover2(true)}
                  onMouseOut={() => setFirstWorkHover2(false)}
                  onClick={handleFirstWorkClicked2}
                  className={
                    firstWorkHover2
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Codeway
                </div>
                {/* Freelancing */}
                <div
                  onMouseOver={() => setFirstWorkHover3(true)}
                  onMouseOut={() => setFirstWorkHover3(false)}
                  onClick={handleFirstWorkClicked3}
                  className={
                    firstWorkHover3
                      ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                      : firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px] bg-[#172a45]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer pl-[8.25px]"
                  }
                >
                  Freelancing
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="ml-[10%] w-[70%] relative workScreen10:w-[70%] workScreen10:ml-[4.5%]">
              {/* iCodeGuru */}
              {(firstWorkClicked) && (
                <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                  <div>
                    <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                      Trainer{" "}
                      <span className="antialiased text-[#64ffda]">@</span>
                      <span className="antialiased text-[#64ffda] relative">
                        <a
                          href="https://www.linkedin.com/company/icode-guru/mycompany/"
                          className="viewArchive"
                          target="_blank"
                        >
                          iCodeGuru
                        </a>
                      </span>
                    </div>
                    <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                      May 2024 - Oct 2024{" "}
                    </div>

                    <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Trainer and moderator at 𝐢𝐂𝐨𝐝𝐞𝐆𝐮𝐫𝐮 platform, with 20,000+ 𝐦𝐞𝐦𝐛𝐞𝐫𝐬.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Teaching 𝐃𝐒𝐀 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞.
                      </div>
                    </div>
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        Voluntarily taught the Python programming language to students.
                      </div>
                    </div>
                    {/* 1 */}
                    <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                      <div className="text-[#64ffda] pr-[1rem]" style={{ position: "relative", bottom: "3px" }}>➾</div>{" "}
                      <div className="leading-[1.22rem]">
                        <div className="relative inline-block">
                          <a
                            className="spanOneHoverClass text-[#64ffda] cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                            href="https://github.com/AbdulMunnam07/Volunteer_Teaching_Recordings"
                            target="_blank"
                          >
                            &nbsp;(𝐏𝐲𝐭𝐡𝐨𝐧, 𝐃𝐒𝐀, & 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 &nbsp;
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Codeway */}
              {firstWorkClicked2 && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                    IOS Application Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a
                        href="https://www.codeway.pk/"
                        className="viewArchive"
                        target="_blank"
                      >
                        Codeway
                      </a>
                    </span>
                  </div>
                  <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                    Sep 2024 - Present{" "}
                  </div>

                  <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Developed and maintained IOS applications using the swift
                      , focusing on delivering high-quality, scalable, and
                      efficient code for AppStore at Codeway software company.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Collaborated with cross-functional teams to understand
                      business requirements and implemented technical solutions,
                      utilizing modern development techniques to design and
                      implement complex software features.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Conducted code reviews, participated in the software
                      development lifecycle, and troubleshooted and debugged
                      code issues. Demonstrated a deep understanding of the swift
                      IOS, Agile development practices, and effective
                      communication and collaboration skills to create
                      cutting-edge IOS applications that transformed business
                      operations.
                    </div>
                  </div>
                </div>
              )}
              {/* Frelancing */}
              {firstWorkClicked3 && (
                <div className="blink_me">
                  {/* For firstWork */}
                  <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased cursor-default">
                    MERN Stack Developer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <span className="antialiased text-[#64ffda] relative">
                      <a className="viewArchive">Fb and local Clients</a>
                    </span>
                  </div>
                  <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                    Nov 2021 - present{" "}
                  </div>
                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Developed and delivered a wide range of web-based
                      solutions, utilizing front-end technologies such as HTML,
                      CSS, and JavaScript, as well as back-end technologies such
                      as Node.js and Express js.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Built and maintained strong relationships with clients
                      through effective communication and problem-solving
                      skills, ensuring timely completion and adherence to
                      project requirements.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Accomplished in utilizing version control systems such as
                      Git and SVN, and implementing agile methodologies for
                      efficient project management.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Proven ability to work independently as well as part of a
                      team, successfully delivering projects on time and within
                      budget.
                    </div>
                  </div>

                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.3rem]">
                      Experience in integrating web applications with
                      third-party APIs and services.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* When Screen <= 600px */}
      <div id="body" className={`contentContainer hidden workScreen1:block`}>
        <div className="flex flex-col">
          {/* First Upper Side When the screen < 425 i-e when it has scroll bar*/}
          <div className="hidden workScreen9:block">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div
                  onScroll={handleScroll}
                  className="flex smallScreenWorkWidth mb-[30px] border-b-[2px] border-[#303c55] z-0 overflow-x-scroll relative"
                >
                  {/* iCodeGuru */}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Codeway
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  {/* <div style={borderBottomStyle} /> */}
                </div>
              </div>
            </div>
          </div>

          {/* First Upper Side When the screen >= 425 i-e when it has no scroll bar*/}
          <div className="hidden workScreen8:flex items-center justify-center">
            <div className="relative rounded transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration delay-whereIWorkedTransitionDelay ">
              {/* Companies Names*/}
              <div className="flex">
                <div className="flex mb-[30px] border-b-[2px] border-[#303c55] z-0 relative">
                  {/* iCodeGuru*/}
                  <div
                    onClick={handleFirstWorkClicked}
                    className={
                      firstWorkClicked
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex flex-wrap items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    iCodeGuru
                  </div>
                  {/* SEEHRAT */}
                  <div
                    onClick={handleFirstWorkClicked2}
                    className={
                      firstWorkClicked2
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Codeway
                  </div>
                  {/* Freelancing */}
                  <div
                    onClick={handleFirstWorkClicked3}
                    className={
                      firstWorkClicked3
                        ? "h-[2.532rem] text-[#64ffda] text-[13px] flex items-center font-customMono antialiased cursor-pointer bg-[#172a45] whitespace-nowrap px-[15px] w-[100%]"
                        : "h-[2.532rem] text-[#8892b0] text-[13px] flex items-center font-customMono antialiased cursor-pointer whitespace-nowrap px-[15px] w-[100%]"
                    }
                  >
                    Freelancing
                  </div>
                  {/* <div style={borderBottomStyle} /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Lower Side */}
          <div className="ml-[10%] w-[70%] relative">
            {/* iCodeGuru */}
            {(firstWorkClicked) && (
              <div className="blink_me transition-all delay-whereIWorkerdTransitionFinalDelay">
                <div>
                  <div className="text-[#ccd6f6] font-calibri text-[20px] antialiased leading-[1] pb-[10px]">
                    Trainer{" "}
                    <span className="antialiased text-[#64ffda]">@</span>
                    <a
                      href="https://www.linkedin.com/company/icode-guru/mycompany/"
                      className="antialiased text-[#64ffda] underline"
                      target="_blank"
                    >
                      iCodeGuru
                    </a>
                  </div>
                  <div className="text-[#a8b2d1] font-customMono text-[13px] antialiased">
                    May 2024 - Sep 2024{" "}
                  </div>

                  <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Trainer and moderator at 𝐢𝐂𝐨𝐝𝐞𝐆𝐮𝐫𝐮 platform, with 20,000+ 𝐦𝐞𝐦𝐛𝐞𝐫𝐬.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      Teaching 𝐏𝐲𝐭𝐡𝐨𝐧 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 and 𝐃𝐒𝐀 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞.
                    </div>
                  </div>
                  <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                    <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                    <div className="leading-[1.22rem]">
                      <a
                        className="text-[#64ffda] transition-GetInTouchButtonTransitionProperty  duration-GetInTouchButtonTransitionDuration  ease-GetInTouchButtonTransitionTiming cursor-pointer font-calibri text-[20px] aboutScreen4:block"
                        href="https://github.com/AbdulMunnam07/Volunteer_Teaching_Recordings"
                        target="_blank"
                      >
                        (𝐏𝐲𝐭𝐡𝐨𝐧, 𝐃𝐒𝐀, & 𝐋𝐞𝐞𝐭𝐂𝐨𝐝𝐞) 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭  &nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Codeway */}
            {firstWorkClicked2 && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] font-calibri leading-[1.2] text-[20px] antialiased">
                  IOS Applications Developer{" "}
                  <span className="antialiased text-[#64ffda]">@</span>
                  <a
                    href="https://seeraht.com/"
                    className="antialiased text-[#64ffda] underline"
                  >
                    Codeway
                  </a>
                </div>
                <div className="pt-[7px] text-[#a8b2d1] inline-block font-customMono text-[13px] antialiased">
                  Sep 2024 - present{" "}
                </div>

                <div className="mt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                  Developed and maintained IOS applications using the swift
                      , focusing on delivering high-quality, scalable, and
                      efficient code for AppStore at Codeway software company.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                  Collaborated with cross-functional teams to understand
                      business requirements and implemented technical solutions,
                      utilizing modern development techniques to design and
                      implement complex software features.                                          
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.22rem]">
                    Conducted code reviews, participated in the software
                    development lifecycle, and troubleshooted and debugged code
                    issues. Demonstrated a deep understanding of the MERN stack,
                    Agile development practices, and effective communication and
                    collaboration skills to create cutting-edge web applications
                    that transformed business operations.
                  </div>
                </div>
              </div>
            )}
            {/* Freelancing */}
            {firstWorkClicked3 && (
              <div className="blink_me">
                {/* For firstWork */}
                <div className="text-[#ccd6f6] leading-[1.2] font-calibri text-[20px] antialiased">
                  MERN Stack Developer{" "}
                  <span className="antialiased text-[#64ffda]">
                    @Fb and local Clients
                  </span>
                </div>
                <div className="text-[#a8b2d1] pt-[7px] font-customMono text-[13px] antialiased">
                  Nov 2023 - present{" "}
                </div>
                <div className="pt-[2.3rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Developed and delivered a wide range of web-based solutions,
                    utilizing front-end technologies such as HTML, CSS, and
                    JavaScript, as well as back-end technologies such as Node.js
                    and Express js.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Built and maintained strong relationships with clients
                    through effective communication and problem-solving skills,
                    ensuring timely completion and adherence to project
                    requirements.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Accomplished in utilizing version control systems such as
                    Git and SVN, and implementing agile methodologies for
                    efficient project management.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Proven ability to work independently as well as part of a
                    team, successfully delivering projects on time and within
                    budget.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience with database management systems such as MongoDB.
                  </div>
                </div>
                <div className="pt-[1rem] text-[#8892b0] font-calibri text-[18px] antialiased flex">
                  <div className="text-[#64ffda] pr-[1rem]">➾</div>{" "}
                  <div className="leading-[1.3rem]">
                    Experience in integrating web applications with third-party
                    APIs and services.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
