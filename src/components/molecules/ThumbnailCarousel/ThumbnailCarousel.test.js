import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ThumbnailCarousel from './index';

describe('ThumbnailCarousel', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<ThumbnailCarousel />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders correctly', () => {
      const tree = renderer.create(<ThumbnailCarousel />).getInstance();
      expect(tree).toBeDefined();
    });

    it('should match to snapshot', () => {
      const component = shallow(<ThumbnailCarousel />);
      expect(component).toMatchSnapshot();
    });
  });
});
