import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1
          className="gradient__text"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p
          class="build"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          />
          <button
            type="button"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Get Started
          </button>
        </div>

        <div
          className="gpt3__header-content__people"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div
        className="gpt3__header-image"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <img src={ai} alt="header" />
      </div>
    </div>
  );
};

export default header;
