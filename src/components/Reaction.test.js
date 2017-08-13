import React from 'react';
import { shallow } from 'enzyme';

import Reaction from './Reaction';
import { COLD_REACTIONS, HOT_REACTIONS } from '../ReactionsData.js';

describe('<Reaction />', () => {
    let seedData = COLD_REACTIONS;
    it('renders without crashing', () => {
        shallow(<Reaction distance="4" reactions={seedData} reactionType={'cold'}/>);
    })
})