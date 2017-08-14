import React from "react";
import Final from "./Final";

import { shallow, mount } from "enzyme";

describe("<Final />", () => {
  it("renders without crashing", () => {
    const callback = jest.fn();
    shallow(<Final number="44" onReset={callback} />);
  });

  it("fires a callback on submit", () => {
    const callback = jest.fn();
    const wrapper = mount(<Final number="44" onReset={callback} />);
    wrapper.find("button").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
