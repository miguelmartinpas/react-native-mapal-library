import React from 'react';
import { View } from 'react-native';

import FootballField from './fields/FootballField';
import BasketballCourt from './fields/BasketballCourt';
import TennisCourt from './fields/TennisCourt';
import HandballField from './fields/HandballField';
import RugbyField from './fields/RugbyField';

const Match = props => {
  console.log('Match', props);
  let Component;
  switch (props.type) {
    case 'football':
      Component = FootballField;
      break;
    case 'basketball':
      Component = BasketballCourt;
      break;
    case 'tennis':
      Component = TennisCourt;
      break;
    case 'handball':
      Component = HandballField;
      break;
    case 'rugby':
      Component = RugbyField;
      break;
    default:
      Component = FootballField;
  }
  return (
    <View>
      <Component />
    </View>
  );
};

export default Match;
