// @flow

import React from "react";

import Banner from "./components/Banner";
// $FlowFixMe
import "./style/column-callout.scss";

const App = () => (
  <div className="column-container center">
    <Banner
      targetURL="https://donate.mozilla.org?utm_source=mdn&utm_medium=referral&utm_campaign=EOY2017-DEV&utm_term=mdnhomepage"
      customClasses="callout-standard callout-foundation"
      calloutMainCopy="Mozilla"
      calloutSubtext="Proudly non-profit. Donate before Dec 31."
      buttonCopy="Donate Now"
    />
    <Banner
      targetURL="https://www.mozilla.org/firefox/developer/?utm_campaign=css_grid_learn_more_2&utm_medium=referral&utm_source=developer.mozilla.org"
      customClasses="callout-standard callout-fx-dev"
      calloutMainCopy="Build in the Browser."
      calloutSubtext="Design sites without leaving the browser."
      buttonCopy="Learn More"
    />
  </div>
);

export default App;
