import React from 'react';
// import "./main.css";
import '../../css/grid.css';
import './main.css';

import { FaGlobeAmericas } from 'react-icons/fa';

import avatar from '../../img/n.jpg';

const Main = () => {
  return (
    <div className="main">
      <div className="grid wide">
        <div className="wrapInfor">
          <div className="row">
            <div className="col l-5 avatar">
              <img src={avatar} alt="Avatar" className="ava" />
            </div>
            <div className="col l-7 infor">
              <div className="infoBox">
                <p className="sayHi">Hello</p>

                <div className="inforName">
                  <p>
                    <span>I'm</span> Jun Hoang
                  </p>

                  <i className="bi-globe"></i>

                  <p>
                    <span className="iconInfor">
                      <FaGlobeAmericas />
                    </span>{' '}
                    Mobile App & Web Developer
                  </p>
                </div>
                <hr />

                <div className="detailInfor">
                  <div className="textInfor">
                    <p>
                      A developer always tries the best at every single
                      opportunity given, focusing and loving to learn new
                      technologies for any projects needed or to upgrade coding
                      skills. Design, build, public Web and Android mobile or
                      cross-apps from scratch, graduate with a portfolio with
                      coding languages and related as:
                    </p>
                    <div className="codeLang">
                      <div className="row">
                        <div className="col l-6 ">
                          ● Javascript ● ReactJS ● React Native
                        </div>
                        <div className="col l-6">
                          ● MySQL ● MongoDB ● Firebase
                        </div>
                        <div className="col l-6">
                          ● Visual Studio Code ● Android studio
                        </div>
                        <div className="col l-6">
                          ● NodeJS ● Java ● C++ ● React Native{' '}
                        </div>
                      </div>
                    </div>

                    <p>
                      <i>
                        Please take a look on some of my lastest works in
                        portfolio page.
                      </i>
                    </p>
                  </div>
                  <div className="row">
                    <div className="col l-4 l-o-2 bold">Nationality</div>
                    <div className="col l-4">Vietnamese</div>
                  </div>
                  <div className="row">
                    <div className="col l-4 l-o-2 bold">Address</div>
                    <div className="col l-4">Sydney, Australia</div>
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
