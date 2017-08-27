import React from "react";
import Final from "./Final";

import { shallow, mount } from "enzyme";

describe("<Final />", () => {
  it("renders without crashing", () => {
    const game = {
      id: "123",
      number: 45,
      guesses: [42,43]
    }
    const callback = jest.fn();
    shallow(<Final game={game} onReset={callback} />);
  });

  it("fires a callback on submit", () => {
    const game = {
      id: "123",
      number: 45,
      guesses: [42,43]
    }
    const callback = jest.fn();
    const wrapper = mount(<Final game={game} onReset={callback} />);
    wrapper.find("button").simulate("click");
    expect(callback).toHaveBeenCalledWith(game.id);
  });
});
