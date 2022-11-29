import React from "react";

import {
  FaCode,
  FaRegLightbulb,
  FaMegaport,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDev,
  FaNodeJs,
  FaShopify,
  FaMusic,
  FaCalendarTimes,
  FaJava,
  FaGamepad,
} from "react-icons/fa";
import {
  MdDraw,
  MdImportantDevices,
  MdInventory,
  MdDeviceUnknown,
} from "react-icons/md";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiCplusplus,
} from "react-icons/si";

import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./portfolio.css";
import "../../css/responsive.css";
import avatar from "../../img/n.jpg";
import ommy from "../../img/ommy.PNG";
import band from "../../img/musicBand.PNG";
import inventory from "../../img/inventory.PNG";
import musicPlay from "../../img/musicPlay.PNG";
import todo from "../../img/Todo.PNG";
import javaRoster from "../../img/javaRoster.PNG";
import elementGame from "../../img/elementGame.PNG";

import PortfolioDetail from "../../components/PortfolioDetail";

const Portfolio = () => {
  const portfolioList = [
    {
      id: 1,
      projectImg: avatar,
      projectIcon: <FaDev />,
      projectName: "Jun's Portfolio",
      projectSubName: "Responsive Web Design",
      desc: "A portfolio website to introduce myself and show all the project I have done. Following the best practices and latest trends in ReactJS and responsive web development using HTML5 and CSS.",
      techs: "React, HTML, CSS, JavaScript.",
      icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
      onlineLink: "",
      githubLink: "https://github.com/hawonjungo/jun-portfolio",
      serverLink: "",
      displayBtn: "none",
      displayGitBE: "none",
    },
    {
      id: 2,
      projectImg: ommy,
      projectIcon: <FaShopify />,
      projectName: "Ommy Ecommerce",
      projectSubName: "Responsive Web Design",
      desc: "An E-commerce selling swimwear website. It was a group project with two members. Working with clients in order to ensure a friendly user interface, and make sure the website had what they needed such as single-page detail products, shopping carts, payment sections..etc. Always communicated, and then worked together to deliver the best e-commerce solutions, helping client show and organize products. Currently the database had expried, so there isn't showing any products.",
      techs:
        "MERN( MongoDB, Express, ReactJS, NodeJS), build RESTful API for products.",
      icons: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
      onlineLink: "https://ommy-surf.herokuapp.com/",
      githubLink: "https://github.com/hawonjungo/ommy-e-commerce",
      serverLink: "https://github.com/hawonjungo/ecommerceapi",
      displayBtn: "",
      displayGitBE: "",
    },
    {
      id: 3,
      projectImg: band,
      projectIcon: <MdImportantDevices />,
      projectName: "Music band",
      projectSubName: "Responsive Web Design",
      desc: " Practicing with W3C project to understand and have more knowledge about a responsive website on multiple devices. Controlling hidden nav menu, working with Row and Column layers, and the position of all the elements in the web.",
      techs: " HTML, CSS.",
      icons: [<FaHtml5 />, <FaCss3Alt />],
      onlineLink: "",
      githubLink: "https://github.com/hawonjungo/OnePage_Band",
      serverLink: "",
      displayBtn: "none",
      displayGitBE: "none",
    },
    {
      id: 4,
      projectImg: inventory,
      projectIcon: <MdInventory />,
      projectName: "Inventory control",
      projectSubName: "Responsive Web Design",
      desc: "Uni project, the idea was to create an Inventory Control for my family's small business, helping them to control orders, and manage all the daily products in and out. Using react to break the website into different components, HOOKS handles all the states, combined with CRUD( create, read, update, delete) with fake RESTful API, a bit backend, and stored data on MongoDB.",
      techs: " React, MongoDB.",
      icons: [<FaReact />, <SiMongodb />],
      onlineLink: "",
      githubLink: "https://github.com/hawonjungo/JS--Dashboard-Inventory",
      serverLink: "https://github.com/hawonjungo/Inventory-BackEnd",
      displayBtn: "none",
      displayGitBE: "",
    },
    {
      id: 5,
      projectImg: musicPlay,
      projectIcon: <FaMusic />,
      projectName: "Music Player",
      projectSubName: "Javascript practicing",
      desc: "Create a basic music player to practice Javascript knowledge, controlling all the music player functions logic as pause, next, skip... As practice as a personal project, planning to public and enjoy my own album music online. ",
      techs: " HTML, CSS , Javascript.",
      icons: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
      onlineLink: "",
      githubLink: "https://github.com/hawonjungo/musicPlayer",
      serverLink: "",
      displayBtn: "none",
      displayGitBE: "none",
    },
    {
      id: 6,
      projectImg: todo,
      projectIcon: <MdDeviceUnknown />,
      projectName: "2Do List",
      projectSubName: "Cross-App",
      desc: "- Uni project as a group with two people to understand what Cross-App was. Working with React-Native to create an app on different platforms such as Apple and Android. Used Android Studio, created different screens, verified users, and stored data on Firebase.",
      techs: " React-Native, MongoDB.",
      icons: [<FaReact />, <SiMongodb />],
      onlineLink: "",
      githubLink: "https://github.com/mystatus987/todo_list_react_native",
      serverLink: "",
      displayBtn: "none",
      displayGitBE: "none",
    },
    {
      id: 7,
      projectImg: javaRoster,
      projectIcon: <FaCalendarTimes />,
      projectName: "GoRoster",
      projectSubName: "Android Application",
      desc: "Keep sending availability to my boss when I used to work at a coffee shop for roster gave me the idea to create a Roster application. In this project, working on creating different screens and basic logic functions how to help users send their availability to the manager, and the manager manages to create the main roster, so all the staff can check it online.",
      techs: "100% JAVA.",
      icons: [<FaJava />],
      onlineLink: "",
      githubLink: "https://github.com/hawonjungo/GoRoster",
      serverLink: "",
      displayBtn: "none",
      displayGitBE: "none",
    },
    {
      id: 8,
      projectImg: elementGame,
      projectIcon: <FaGamepad />,
      projectName: "Three Elements",
      projectSubName: "Game",
      desc: "A keyboarding game for practicing fast fingers. The logic was combining different keys to create multiple skills to kill different monsters, each skill can only kill one type of monster. This project was created in year two at college, it hasn't finished yet but overall 70% of the game function have been deployed in the code section, however you can test on the prototype to see how it could look like. Mainly learned about OOP. ",
      techs: "100% C++.",
      icons: [<SiCplusplus />],
      onlineLink:
        "https://www.figma.com/proto/8sxWcAHPDHRtevGTqmJKJd/Three-Elements?node-id=734%3A28017&scaling=contain&page-id=734%3A27259&starting-point-node-id=734%3A28017&show-proto-sidebar=1",
      githubLink: "https://github.com/hawonjungo/ThreeElements",
      serverLink: "",
      displayBtn: "",
      displayGitBE: "none",
    },
  ];
  return (
    <div>
      <Header />
      <div className="portfolioPage">
        <div className="nameShow">
          <h1 data-text="A strong willingness to learn">
            <span>A strong willingness to learn</span>
          </h1>
        </div>
      </div>
      <div className="portContainer">
        {/* <!-- Logo Card --> */}
        <div className="LogoCard">
          <div className="row showcase stm-font">
            <div className="col l-4 hidden-xs">
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Concept</h2>
              </div>
            </div>
            <div className="col l-4 hidden-xs">
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <MdDraw style={{ display: "inline-block" }} />
                </h1>
                <h2>Design</h2>
              </div>
            </div>
            <div className="col l-4 hidden-xs">
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaCode style={{ display: "inline-block" }} />
                </h1>
                <h2>Development</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End logo card */}
        {/* Projects  */}
        <div className="showProject">
          <h1>
            <FaMegaport style={{ width: "50px" }} />
            Projects
          </h1>
          {portfolioList.map((project, index) => (
            <PortfolioDetail
              key={index}
              projectImg={project.projectImg}
              projectIcon={project.projectIcon}
              projectName={project.projectName}
              projectSubName={project.projectSubName}
              desc={project.desc}
              techs={project.techs}
              icons={project.icons}
              onlineLink={project.onlineLink}
              githubLink={project.githubLink}
              serverLink={project.serverLink}
              displayBtn={project.displayBtn}
              displayGitBE={project.displayGitBE}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
