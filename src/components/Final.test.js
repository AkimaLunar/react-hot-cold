import React from 'react';
import { shallow } from 'enzyme';

import Final from './Final';

describe('<Final />', () => {
    it('renders without crashing', ()=>{
        const callback = jest.fn();
        shallow(<Final number="44" onReset={callback} />)
    })
})