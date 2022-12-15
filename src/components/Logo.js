import React from 'react';
import {Image} from 'react-native';

const logo = require('./../../assets/images/logo.png');

const Logo = ({h}) => {
  return <Image source={logo} style={{height: 70, width: 70}} />;
};

export default Logo;
