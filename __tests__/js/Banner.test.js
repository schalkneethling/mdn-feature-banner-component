import React from "react";
import { create } from "react-test-renderer";
import Banner from "../../src/components/Banner";

test("banner snapshot", () => {
  const banner = create(
    <Banner
      targetURL="https://donate.mozilla.org"
      customClasses="callout-foundation"
      calloutMainCopy="Mozilla"
      calloutSubtext="Proudly non-profit. Donate before Dec 31."
      buttonCopy="Donate Now"
    />
  );
  expect(banner.toJSON()).toMatchSnapshot();
});
