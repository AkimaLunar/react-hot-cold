import React from 'react';
import { shallow } from 'enzyme';

import Guess from './Guess';

describe ('<Guess />', () => {
    it('renders without crashing', ()=>{
        const callback = jest.fn();
        shallow(<Guess min="0" max="100" onGuess={callback}/>);
    })
})