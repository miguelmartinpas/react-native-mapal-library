import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { storiesOf } from '@storybook/react-native';

import HelloWorld from './HelloWorld';
import ByeWorld from './ByeWorld';
import ThumbnailCarousel from './ThumbnailCarousel';
import Match from './Match';

const Container = styled.View`
  flex: 1;
  background-color: rgb(255, 239, 213);
  justify-content: center;
  align-items: center;
`;
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

storiesOf('HelloWorld', module).add('to Storybook', () => <HelloWorld />);

storiesOf('ByeWorld', module).add('to Storybook', () => <ByeWorld />);

storiesOf('ThumbnailCarousel', module).add('to Storybook', () => (
  <ThumbnailCarousel />
));

storiesOf('Match', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('to Football Field Storybook by default', () => <Match />)
  .add('to Football Field Storybook', () => <Match type="football" />)
  .add('to Basketball Court Storybook', () => <Match type="basketball" />)
  .add('to Handball Field Storybook', () => <Match type="handball" />)
  .add('to Tennis Court Storybook', () => <Match type="tennis" />)
  .add('to Rugby Field Storybook', () => <Match type="rugby" />);
