import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

// react-test-renderer

test('should render Header correctly',() => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot();
})

