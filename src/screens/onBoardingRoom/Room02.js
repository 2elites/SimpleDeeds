import React from 'react';
import RoomLayout from './../../components/onBoardingRoom/RoomLayout';
const bgImg = require('./../../../assets/images/onBoardingBG2.png');

const Room00 = ({navigation}) => {
  return (
    <RoomLayout
      title={'Safe'}
      description={
        'We insure that all parties to the transaction are verified at all times, keeping every transaction Safe and Secure.'
      }
      step={2}
      bgImg={bgImg}
      nextPath={'Splash'}
    />
  );
};
export default Room00;
