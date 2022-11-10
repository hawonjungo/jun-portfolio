import React from "react";
import "./main.css";

import { FaGlobeAmericas } from "react-icons/fa";

import avatar from "../../img/n.jpg";

const Main = () => {
  return (
    <div class="container bg-white">
      <div class="welcome">
        {" "}
        <h1 className="text-3xl font-bold underline text-white ">
          Ready to work!
        </h1>
      </div>
      <div class="profile">
        <div class="flex flex-row box">
          <div class="basis-1/2 avatar">
            <img class="img-fluid" src={avatar} alt="avatar" />
          </div>
          <div class="basis-1/2 info">
            <p class="sayHi"> Hello</p>
            <div class="name">
              <p>
                <span>I'm</span> Jun Hoang
              </p>
            </div>
            <p style={{ display: "inline-block" }}>
              <FaGlobeAmericas />
              Entry Mobile app & Web development
            </p>
            <div class="detailInfo">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
            </div>
            <div>Nationality: Vietnamese</div>
            <div>Address: Sydney, Australia</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
