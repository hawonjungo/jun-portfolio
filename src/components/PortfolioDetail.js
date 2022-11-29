import React from "react";

const PortfolioDetail = ({
  projectImg,
  projectIcon,
  projectName,
  projectSubName,
  desc,
  techs,
  icons,
}) => {
  return (
    <div>
      {" "}
      <div className="row wellProject" style={{ marginTop: "50px" }}>
        <div className="col l-3">
          {" "}
          <div className="well shadow up-hover color-hover ">
            <img src={projectImg} alt="Avatar" className="ava" />
            <h2>{projectName}</h2>
          </div>
        </div>
        <div className="col l-9">
          {" "}
          <div className="well shadow up-hover color-hover ">
            <h1>{projectIcon}</h1>
            <h2>{projectSubName}</h2>
            <div className="projectInfor">
              <p> {desc}</p>
              <p>- Technologies involved:</p>
              <p>{techs}</p>
              <h1>
                {icons.map((icon) => {
                  return icon;
                })}
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
      </div>
    </div>
  );
};

export default PortfolioDetail;
