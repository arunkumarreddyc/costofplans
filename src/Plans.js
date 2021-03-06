import React from "react";

export default function Plans({ name, price, features }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {name}
          </h5>
          <h6 className="card-price text-center">
            $ {price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((item, index) => {
              return (
                 <li
                  key={index}
                  className={
                    !item.enabled
                      ? "text-muted"
                      : name === "Free"
                      ? ""
                      : "feature-text"
                  }
                >
                  <span className="fa-li">
                    <i
                      className={
                        item.enabled ? "fas fa-check fs-4" : "fas fa-times fs-4"
                      }
                    ></i>
                  </span>
                  {item.name === "Unlimited Free Subdomains" ? (
                    <span>
                      <b>Unlimited</b> Free Subdomains
                    </span>
                  ) : (
                    item.name
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
