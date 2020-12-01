import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Form from '../client/src/components/Form.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure ({ adapter: new Adapter() });


let wrapper = shallow(<Form />);

describe('Form', () => {
  it('Should show the word Registration', () => {
    expect(wrapper.find('h1').text()).toEqual('Registration')
  })
});
