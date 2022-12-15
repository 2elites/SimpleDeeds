import React from 'react';
import RoomLayout from './../../components/onBoardingRoom/RoomLayout';
const bgImg = require("./../../../assets/images/onBoardingBG1.png");

const Room00 = ({ navigation }) => {
    return (
        <RoomLayout 
            title={'Secure'}
            description={'With Unlockify, you can be confident that client information will be handled and stored in a secure enviroment.'}
            step={1}
            bgImg={bgImg} 
            nextPath={'OnBoardingRoom02'}
        />
    );
};
export default Room00;
