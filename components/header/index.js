import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';


const Header = ({content}) => (
    <View>
        <View style={style.subHeader}><Text style={style.titre}>StreamZ - Outils pour streamer</Text></View>
        <View style={style.header}>
            <Text style={style.text}> {content} </Text>
        </View> 
   </View>
);

export default Header;