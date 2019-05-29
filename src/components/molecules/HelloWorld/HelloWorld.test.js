import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HelloWorld from './index';

describe('HelloWorld', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<HelloWorld />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
      const tree = renderer.create(<HelloWorld />).getInstance();
      expect(tree).toBeDefined();
    });

    it('should match to snapshot', () => {
      const component = shallow(<HelloWorld />);
      expect(component).toMatchSnapshot();
    });
  });
});
