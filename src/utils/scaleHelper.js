import {Dimensions} from 'react-native';

const designWidth = 1024;
const designHeight = 768;

// const dWidth = Dimensions.get("screen").width;
// const dHeight = Dimensions.get("screen").height;
// // dWidth < dHeight means dimensions are in portrait mode,
// // as we only supports landscape we can ignore this and swap values;
// const deviceWidth = dWidth < dHeight ? dHeight : dWidth;
// const deviceHeight = dWidth < dHeight ? dWidth : dHeight;

let deviceWidth = Dimensions.get('screen').width;
let deviceHeight = Dimensions.get('screen').height;
if (deviceWidth < deviceHeight) {
  deviceWidth = deviceWidth + deviceHeight;
  deviceHeight = deviceWidth - deviceHeight;
  deviceWidth = deviceWidth - deviceHeight;
}

const widthRatio = deviceWidth / designWidth;
const heightRatio = deviceHeight / designHeight;

export const scaleValueBasedOnWidth = value => {
  return value * widthRatio;
};

export const scaleValueBasedOnHeight = value => {
  return value * heightRatio;
};
