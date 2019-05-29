import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { ByeWorld, HelloWorld, ThumbnailCarousel } from './index';

describe('index', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ByeWorld />);
      expect(component).toMatchSnapshot();
    });

    it('should match to snapshot', () => {
      const component = shallow(<HelloWorld />);
      expect(component).toMatchSnapshot();
    });

    it('should match to snapshot', () => {
      const component = shallow(<ThumbnailCarousel />);
      expect(component).toMatchSnapshot();
    });
  });
});
