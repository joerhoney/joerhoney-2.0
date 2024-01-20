import React from "react";
import { Link } from "gatsby";
import "@css/split.css";

const Split = (props) => {
  return (
    <div className="splitWrap">
      <div
        className={`split ${
          typeof props.className !== "undefined" ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

const Half = (props) => {
  const alt = props.alt ?? "";
  // TODO: Use <GatsbyImage />
  return (
    <div
      className={`half ${
        typeof props.className !== "undefined" ? props.className : ""
      }`}
      id={props.id}
    >
      {props.src && (
        <img
          alt={alt}
          src={props.src}
          style={{ objectPosition: props.position }}
        />
      )}
      <div className="cell">
        <div className="title">
          <h2>{props.heading}</h2>
        </div>
        <div className="content">
          {props.children}
          {props.button && (
            <Link className="button" to={props.to}>
              {props.button}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { Split, Half };
