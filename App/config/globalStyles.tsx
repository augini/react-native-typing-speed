import {Dimensions} from 'react-native';

type dimensions = {
  height: number;
  width: number;
};

export const storyBoardDimensions: dimensions = {
  height: 740,
  width: 360,
};

export const height: number = Number(
  (Dimensions.get('screen').height * (1 / storyBoardDimensions.height)).toFixed(
    2,
  ),
);

export const width: number = Number(
  (Dimensions.get('screen').width * (1 / storyBoardDimensions.width)).toFixed(
    2,
  ),
);
