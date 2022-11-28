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
import avatar from "../img/n.jpg";

const PortfolioDetail = ({
  projectImg,
  projectName,
  projectSubName,
  decs,
  techs,
  icons,
}) => {
  return (
    <div>
      {" "}
      <div class="row wellProject" style={{ marginTop: "50px" }}>
        <div class="col l-3">
          {" "}
          <div class="well shadow up-hover color-hover ">
            <img src={projectImg} alt="Avatar" class="ava" />
            <h2>{projectName}</h2>
          </div>
        </div>
        <div class="col l-9">
          {" "}
          <div class="well shadow up-hover color-hover ">
            <h1>
              <FaDev style={{ display: "inline-block" }} />
            </h1>
            <h2>{projectSubName}</h2>
            <div class="projectInfor">
              <p>{decs}</p>
              <p>Technologies involved:</p>
              <p> {techs}</p>
              <h1>
                {icons.map((icon) => {
                  return icon;
                })}
              </h1>
              <div class="btnSide">
                <div class="btnLeft">
                  <a href="!#" class="btn s-full-width">
                    Check online
                  </a>
                  <a href="!#" class="btn s-full-width">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;