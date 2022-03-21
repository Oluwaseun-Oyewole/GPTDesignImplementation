import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const brand = () => {
  return (
    <div>
      {" "}
      <div className="gpt3__brand section__padding">
        <div data-aos="fade-up">
          <img src={google} />
        </div>
        <div data-aos="fade-up">
          <img src={slack} />
        </div>
        <div data-aos="fade-up">
          <img src={atlassian} />
        </div>
        <div data-aos="fade-up">
          <img src={dropbox} />
        </div>
        <div data-aos="fade-up">
          <img src={shopify} />
        </div>
      </div>
    </div>
  );
};

export default brand;
