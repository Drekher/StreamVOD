import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';

const MenuVod = ({ isVisible, onDisapearCallBack, onDeleteCallBack }) => (
            <Modal 
                isVisible={isVisible} 
                animationIn={'zoomInDown'} 
                animationOut={'zoomOutUp'} 
                animationInTiming={1000} 
                animationOutTiming={1000} 
                backdropTransitionInTiming={1000} 
                backdropTransitionOutTiming={1000}
            >

        
            <TouchableWithoutFeedback onPress={() => console.log('reste')}>
                <View style={style.modal}>
                    <View style={style.textView}>
                        <Text>Que souhaitez vous faire sur cette VOD </Text>
                    </View>
                    <View>
                        <Button 
                        buttonStyle={style.buttonChangeStatus}
                        title="Changer status"
                        onPress={() => onDisapearCallBack()}
                        />
                        <Button 
                        buttonStyle={style.buttonDeleteVod}
                        title="Supprimer"
                        onPress={() => onDeleteCallBack()}
                        />
                        <Button 
                        buttonStyle={style.buttonCancel}
                        title="Annuler"
                        onPress={() => console.log('Annulation')}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
);

export default MenuVod;