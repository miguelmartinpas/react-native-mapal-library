import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { storiesOf } from '@storybook/react-native';

import HelloWorld from './HelloWorld';
import ByeWorld from './ByeWorld';
import ThumbnailCarousel from './ThumbnailCarousel';
import Field from './Field';

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

storiesOf('Field', module)
  .addDecorator(story => <Container>{story()}</Container>)
  .add('to Football Field Storybook by default', () => <Field />)
  .add('to Football Field Storybook', () => <Field type="football" />)
  .add('to Basketball Court Storybook', () => <Field type="basketball" />)
  .add('to Handball Field Storybook', () => <Field type="handball" />)
  .add('to Tennis Court Storybook', () => <Field type="tennis" />)
  .add('to Rugby Field Storybook', () => <Field type="rugby" />);
