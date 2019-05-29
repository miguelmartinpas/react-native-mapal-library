import { NativeModules } from 'react-native';

import HelloWorld from './components/molecules/HelloWorld';
import ByeWorld from './components/molecules/ByeWorld';
import ThumbnailCarousel from './components/molecules/ThumbnailCarousel';
import Match from './components/molecules/Match';

const { RNMyLibrary } = NativeModules;

export default RNMyLibrary;

export { HelloWorld, ByeWorld, ThumbnailCarousel, Match };
