// @flow

import React from "react";

const Banner = (props: {
  customClasses: string,
  targetURL: string,
  calloutMainCopy: string,
  calloutSubtext: string,
  buttonCopy: string
}) => {
  return (
    <div className={`column-callout ${props.customClasses}`}>
      <a href={props.targetURL}>
        <span>
          <p className="callout-main-copy">
            {props.calloutMainCopy}
            <span className="callout-subtext">{props.calloutSubtext}</span>
          </p>
          <button type="button">{props.buttonCopy}</button>
        </span>
      </a>
    </div>
  );
};

export default Banner;
