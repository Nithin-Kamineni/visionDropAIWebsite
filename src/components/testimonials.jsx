import React from "react";
import "./investors.css"; // Make sure to import the CSS file

export const Investors = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Investors</h2>
          <p>{props.description}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

        <div className="section-title text-center">
          <h2>Funding Awards</h2>
        </div>
        <div className="funding-company">
          {props.funding
            ? props.funding.map((d, i) => (
                <div className="funding-box">
                  <img src={d.img} alt="" className="funding-image" />
                  <div className="funding-meta">
                    <h4 dangerouslySetInnerHTML={{ __html: d.text }}></h4>
                    {d.name1 && <p>{d.name1}</p>}
                    {d.name2 && <p>{d.name2}</p>}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
