import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';

const MenuVod = () => (
<View>
    <Modal 
        isVisible
        animationIn={'zoomInDown'}
        animationOut={'zoomOutup'}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
    />

    <View>
        <Text>Que souhaitez vous faire sur cette VOD </Text>
    </View>
    <View>
        <Button 
        title="Supprimer"
        onPress={() => console.log('onPress supprimer')}
        />
        <Button 
        title="Changer status"
        onPress={() => console.log('onPress mise à jour')}
        />
    </View>
</View>
);

export default MenuVod;