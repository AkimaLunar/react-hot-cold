import React from 'react';
import { shallow, mount } from 'enzyme';

import Guess from './Guess';

describe ('<Guess />', () => {
    it('renders without crashing', ()=>{
        const callback = jest.fn();
        shallow(<Guess min="0" max="100" onGuess={callback}/>);
    })

    it('fires a callback on submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<Guess min="0" max="100" onGuess={callback}/>);
        const value = 44;
        wrapper.setState({ value: value });
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    })

    // it('handles user input', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<Guess min="0" max="100" onGuess={callback}/>);
    //     const value = 44;
    //     wrapper.find('input[type="number"]').simulate('change', {target: {value: value}});

    //     expect(wrapper.instance().value).toEqual(value);
    // })
})