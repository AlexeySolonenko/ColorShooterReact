import { positionProps } from '../constLoader.js';

export const buildClassString = (ballPos, mode, elem) => {
    try {
      let d = positionProps;
      let elemClass = d[mode][elem].common + ' ' + d[mode][elem][ballPos.name];
      return elemClass;
    } catch (err) {
      console.log('Could not return frame class');
      console.log(err);
      return '';
    };
  };