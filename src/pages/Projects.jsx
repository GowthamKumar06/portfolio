import React from "react";

export default function Projects() {
  const myDev = [
    {
      id: 1,
      name: "Red Team Factory",
      pic: "",
      url: "https://redteamfactory.com/",
    },
    {
      id: 2,
      name: "Nano Health Care",
      pic: "",
      url: "https://nanohealthcare.au/",
    },
    {
      id: 3,
      name: "The Handler",
      pic: "",
      url: "https://thehandler.in/",
    },
  ];

  return (
    <>
      <div id="project-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              {/* <iframe src={RTF} frameborder="0"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
