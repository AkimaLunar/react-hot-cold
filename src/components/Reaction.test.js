import React from 'react';
import { shallow } from 'enzyme';

import Reaction from './Reaction';
import { COLD_REACTIONS, HOT_REACTIONS } from '../ReactionsData.js';

describe('<Reaction />', () => {
    let seedData = COLD_REACTIONS;
    it('renders without crashing', () => {
        shallow(<Reaction distance="4" reactions={seedData} reactionType={'cold'}/>);
    })

    it('renders a correct reaction', () => {
        const distance = 40;
        const reactionType  ='cold';
        const wrapper = shallow(<Reaction distance={distance} reactions={seedData} reactionType={reactionType}/>);
        expect(wrapper.contains(<img src={COLD_REACTIONS[2]} alt='cold'/>)).toEqual(true);
    })
})