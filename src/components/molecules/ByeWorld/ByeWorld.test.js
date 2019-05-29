import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ByeWorld from './index';

describe('ByeWorld', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<ByeWorld />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
      const tree = renderer.create(<ByeWorld />).getInstance();
      expect(tree).toBeDefined();
    });

    it('should match to snapshot', () => {
      const component = shallow(<ByeWorld />);
      expect(component).toMatchSnapshot();
    });
  });
});
