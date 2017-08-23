import React from "react";
import Guess from "./Guess";

import { shallow, mount } from "enzyme";

describe("<Guess />", () => {
  it("renders without crashing", () => {
    const callback = jest.fn();
    shallow(<Guess min="0" max="100" onGuess={callback} />);
  });

  it("fires a callback on submit", () => {
    const game = {
      id: "123",
      number: 45,
      guesses: [42,43]
    }
    const callback = jest.fn();
    const wrapper = mount(<Guess min="0" max="100" game={game} onGuess={callback} />);
    const value = 44;
    wrapper.setState({ value: value });
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(game.id, game.number, game.guesses, value);
  });

  it("handles user input", () => {
    const callback = jest.fn();
    const wrapper = mount(<Guess min="0" max="100" onChange={callback} />);
    const value = 44;
    wrapper.find("#guess").simulate("change", { target: { value: value } });
    expect(wrapper.instance().state.value).toEqual(value);
  });
});
