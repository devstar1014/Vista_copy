import React from "react";
import "../../assets/css/style.css";
import { HowWorksData } from "../data/HowWorksData";

export const HowWorks = () => {
  return (
    <div>
      <section className="how_it_works">
        <div className="container">
          <h2 className="work_title">How it works?</h2>
          <p className="work_text">
            At VISTA, we have a team of experts with vast experience in
            engineering tools enabled with Cloud, Analytics, Mobility, IOT and
            AI practices and develop unique customer experience.
          </p>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 gy-4 justify-content-center mt-5">
            {HowWorksData.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <div className="work_card">
                    <div>
                      <div className="icon">
                        <img src={item.img} alt={item.alt} />
                      </div>
                      <p className="text">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
