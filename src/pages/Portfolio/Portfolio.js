import React from 'react';

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
} from 'react-icons/fa';
import { MdDraw } from 'react-icons/md';
import { SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';

import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import './portfolio.css';
import avatar from '../../img/n.jpg';
import ommy from '../../img/ommy.PNG';
import band from '../../img/musicBand.PNG';
import inventory from '../../img/inventory.PNG';
import musicPlay from '../../img/musicPlay.PNG';
import todo from '../../img/Todo.PNG';
import javaRoster from '../../img/javaRoster.PNG';
import elementGame from '../../img/elementGame.PNG';

import PortfolioDetail from '../../components/PortfolioDetail';

const Portfolio = () => {
  const portfolioList = [
    {
      id: 1,
      projectImg: avatar,
      projectName: "Jun's Portfolio",
      projectSubName: 'Responsive Web Design',
      desc: 'A portfolio website to introduce myself and show all the project I have done. Following the best practices and latest trends in ReactJS and responsive web development using HTML5 and CSS.',
      techs: 'React, HTML, CSS, JavaScript.',
      icons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
    },
    {
      id: 2,
      projectImg: ommy,
      projectName: 'Ommy Ecommerce',
      projectSubName: 'Responsive Web Design',
      desc: 'An E-commerce selling swimwear website. It was a group project with two members. Working with clients in order to ensure a friendly user interface, and make sure the website had what they needed such as single-page detail products, shopping carts, payment sections..etc. Always communicated, and then worked together to deliver the best e-commerce solutions, helping client show and organize products',
      techs:
        'MERN( MongoDB, Express, ReactJS, NodeJS), build RESTful API for products.',
      icons: [<SiMongodb />, <SiExpress />, <FaReact />, <FaNodeJs />],
    },
    {
      id: 3,
      projectImg: band,
      projectName: 'Music Band',
      projectSubName: 'Responsive Web Design',
      desc: 'A music band website. It was a group project with two members. Working with clients in order to ensure a friendly user interface, and make sure the website had what they needed such as single-page detail products, shopping carts, payment sections..etc. Always communicated, and then worked together to deliver the best e-commerce solutions, helping client show and organize products',
      techs: 'HTML, CSS, JavaScript.',
      icons: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
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
                  <FaRegLightbulb style={{ display: 'inline-block' }} />
                </h1>
                <h2>Concept</h2>
              </div>
            </div>
            <div className="col l-4 hidden-xs">
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <MdDraw style={{ display: 'inline-block' }} />
                </h1>
                <h2>Design</h2>
              </div>
            </div>
            <div className="col l-4 hidden-xs">
              <div className="well shadow up-hover color-hover ">
                <h1>
                  <FaCode style={{ display: 'inline-block' }} />
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
            <FaMegaport style={{ width: '50px' }} />
            Projects
          </h1>

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

          {/* <PortfolioDetail
            projectName={portfolioList.junProject.projectName}
            projectSubName={portfolioList.junProject.projectSubName}
            decs={portfolioList.junProject.desc}
            techs={portfolioList.junProject.techs}
            icons={portfolioList.junProject.icons}
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
