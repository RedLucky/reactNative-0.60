import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle:{
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    padding: 15,
    shadowColor: '#BDBDBD',
    shadowOffset: {width: 0, height: 200},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#FFEBEE'
  }
}

export default Header;