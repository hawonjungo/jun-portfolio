import React from "react";
// import "./main.css";
import "../../css/grid.css";
import "./main.css";

import { FaGlobeAmericas } from "react-icons/fa";

import avatar from "../../img/n.jpg";

const Main = () => {
  return (
    <div class="main">
      <div class="grid wide">
        <div class="wrapInfor">
          <div class="row">
            <div class="col l-5 avatar">
              <img src={avatar} alt="Avatar" class="ava" />
            </div>
            <div class="col l-7 infor">
              <div class="infoBox">
                <p class="sayHi">Hello</p>

                <div class="inforName">
                  <p>
                    <span>I'm</span> Jun Hoang
                  </p>

                  <i class="bi-globe"></i>

                  <p>
                    <span class="iconInfor">
                      <FaGlobeAmericas />
                    </span>{" "}
                    Mobile App & Web Developer
                  </p>
                </div>
                <hr />

                <div class="detailInfor">
                  <div class="textInfor">
                    <p>
                      A developer always tries the best at every single
                      opportunity given, focusing and loving to learn new
                      technologies for any projects needed or to upgrade coding
                      skills. Design, build, public Web and Android mobile or
                      cross-apps from scratch, graduate with a portfolio with
                      coding languages:
                    </p>
                    <div class="codeLang">
                      <div class="row">
                        <div class="col l-6 ">
                          ● Javascript ● ReactJS ● React Native
                        </div>
                        <div class="col l-6">● MySQL ● MongoDB ● Firebase</div>
                        <div class="col l-6">
                          ● Visual Studio Code ● Android studio
                        </div>
                        <div class="col l-6">● NodeJS ● Java ● C++ ● C#</div>
                      </div>
                    </div>

                    <p>
                      <i>
                        Please take a look on some of my lastest works in
                        portfolio page.
                      </i>
                    </p>
                  </div>
                  <div class="row">
                    <div class="col l-4 l-o-2 bold">Nationality</div>
                    <div class="col l-4">Vietnamese</div>
                  </div>
                  <div class="row">
                    <div class="col l-4 l-o-2 bold">Address</div>
                    <div class="col l-4">Sydney, Australia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
