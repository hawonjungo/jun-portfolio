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
} from "react-icons/fa";
import { MdDraw } from "react-icons/md";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./portfolio.css";
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
      projectName: "Jun's Portfolio",
      projectSubName: "Responsive Web Design",
      desc: "A portfolio website to introduce myself and show all the project I have done. Following the best practices and latest trends in ReactJS and responsive web development using HTML5 and CSS.",
      techs: "React, HTML, CSS, JavaScript.",
      icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
    },
    {
      id: 2,
      projectImg: ommy,
      projectName: "Ommy Ecommerce",
      projectSubName: "Responsive Web Design",
      desc: "An E-commerce selling swimwear website. It was a group project with two members. Working with clients in order to ensure a friendly user interface, and make sure the website had what they needed such as single-page detail products, shopping carts, payment sections..etc. Always communicated, and then worked together to deliver the best e-commerce solutions, helping client show and organize products",
      techs:
        "MERN( MongoDB, Express, ReactJS, NodeJS), build RESTful API for products.",
      icons: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
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
          {/* projun */}
          {/* <div className="row wellProject" style={{ marginTop: "50px" }}>
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={avatar} alt="Avatar" className="ava" />
                <h2>{portfolioList.junProject.projectName}</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaDev style={{ display: "inline-block" }} />
                </h1>
                <h2>Responsive Web Design</h2>
                <div className="projectInfor">
                  <p>
                    A portfolio website to introduce myself and show all the
                    project I have done. Following the best practices and latest
                    trends in ReactJS and responsive web development using HTML5
                    and CSS.
                  </p>
                  <p>Technologies involved:</p>
                  <p> React, HTML, CSS, JavaScript.</p>
                  <h1>
                    <FaReact />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiJavascript />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* ommy */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={ommy} alt="Avatar" className="ava" />
                <h2>Ommy Ecommerce</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaShopify style={{ display: "inline-block" }} />
                </h1>
                <h2>Responsive Web Design</h2>
                <div className="projectInfor">
                  <p>
                    An E-commerce selling swimwear website. It was a group
                    project with two members.
                  </p>
                  <p>
                    Working with clients in order to ensure a friendly user
                    interface, and make sure the website had what they needed
                    such as single-page detail products, shopping carts, payment
                    sections..etc. Always communicated, and then worked together
                    to deliver the best e-commerce solutions, helping client
                    show and organize products.
                  </p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a
                        href="https://ommy-surf.herokuapp.com/"
                        className="btn s-full-width"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* music Band */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={band} alt="Avatar" className="ava" />
                <h2>Music Band</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Inventory */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={inventory} alt="Avatar" className="ava" />
                <h2>Inventory Control</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Backend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* musicPlay */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={musicPlay} alt="Avatar" className="ava" />
                <h2>Music Player</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* todo */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={todo} alt="Avatar" className="ava" />
                <h2>Todo List</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*javaRoster  */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={javaRoster} alt="Avatar" className="ava" />
                <h2>GoRoster</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Element game  */}
          <div className="row wellProject">
            <div className="col l-3">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <img src={elementGame} alt="Avatar" className="ava" />
                <h2>Three Elements game</h2>
              </div>
            </div>
            <div className="col l-9">
              {" "}
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaRegLightbulb style={{ display: "inline-block" }} />
                </h1>
                <h2>Information</h2>
                <div className="projectInfor">
                  <p>First line</p>
                  <p>Second line</p>
                  <p>
                    Technologies : MERN( MongoDB, Express, ReactJS, NodeJS),
                    build RESTful API for products.
                  </p>
                  <h1>
                    <SiMongodb />
                    <SiExpress />
                    <FaReact />
                    <FaNodeJs />
                  </h1>
                  <div className="btnSide">
                    <div className="btnLeft">
                      <a href="!#" className="btn s-full-width" target="_blank">
                        Check online
                      </a>
                      <a href="!#" className="btn s-full-width">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* TEst component */}

          {portfolioList.map((project) => (
            <PortfolioDetail
              key={project.id}
              projectImg={project.projectImg}
              projectName={project.projectName}
              projectSubName={project.projectSubName}
              desc={project.desc}
              techs={project.techs}
              icons={project.icons}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
