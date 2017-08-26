import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(
            <App />
        );
    });
//   it("renders a correct reaction", () => {
//     const game = {
//       id: "123",
//       number: 45,
//       guesses: [42,43]
//     }
//     const wrapper = mount(<App />);
//     wrapper.instance().addGuess(40);
//     expect(
//       wrapper.contains(
//         `<Reaction
//           distance={wrapper.instance().state.currentDistance}
//           reactions={HOT_REACTIONS}
//           reactionType={"hot"}
//         />`
//       )
//     );
//   });
//   it("renders the final screen on winning", () => {
//     const value = 44;
//     const wrapper = mount(<App />);
//     wrapper.instance().setState({ number: value });
//     wrapper.instance().addGuess(value);
//     expect(wrapper.contains(`<Final />`));
//   });

//   it("can reset the game", () => {
//     const wrapper = mount(<App />);
//     wrapper.instance().setState({ winner: true });
//     wrapper.instance().setNumber();
//     expect(wrapper.contains(`<Guess />`));
//   });
});
