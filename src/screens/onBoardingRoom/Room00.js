import React from 'react';
import RoomLayout from './../../components/onBoardingRoom/RoomLayout';
const bgImg = require('./../../../assets/images/onBoardingBG0.png');

const Room00 = ({navigation}) => {
  return (
    <RoomLayout
      title={'Simplicity'}
      description={
        'An easy and secure way for clients to input required information, keeping everyone safe and informed throughout the transaction.'
      }
      step={0}
      bgImg={bgImg}
      nextPath={'OnBoardingRoom01'}
    />
  );
};
export default Room00;
