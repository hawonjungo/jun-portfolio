import React from "react";
import "./main.css";

import { FaGlobeAmericas } from "react-icons/fa";

import avatar from "../../img/n.jpg";

const Main2 = () => {
  return (
    <div class="body">
      <div class="container">
        <div class="welcome">
          {" "}
          <h1 className="text-3xl font-bold underline text-[#f16a52]">
            Ready to Work!
          </h1>
        </div>
        <div class="profile">
          <div class="box">
            <div class="avatar">
              <img class="img-fluid" src={avatar} alt="avatar" />
            </div>
            <div class="info">
              <p class="sayHi"> Hello</p>
              <div class="name">
                <p>
                  <span>I'm</span> Jun Hoang
                </p>
              </div>
              <p>
                <span class="iconInfo">
                  <FaGlobeAmericas />
                </span>
                Fresher Mobile App & Web development
              </p>
              <div class="detailInfo">
                <p>___________________________________________</p>
                <p>
                  Design, build and publish iOS and Android mobile apps from
                  scratch and graduate with a portfolio of work:
                </p>
                <p>● C++ ● JavaScript ● ReactJS ● Java </p>
                <p>
                  Please take a look on some of my lastest works in portfolio
                  page.
                </p>
              </div>
              <div>Nationality: Vietnamese</div>
              <div>Address: Sydney, Australia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
