import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const style = StyleSheet.create({
    buttonChangeStatus: { backgroundColor: APP_COLORS.bleu },
    buttonDeleteVod: { backgroundColor: APP_COLORS.rouge },
    buttonCancel: { backgroundColor: APP_COLORS.gris },
    modal: { backgroundColor: APP_COLORS.blanc, height: 200, justifyContent: 'space-around' },
    textView: { justifyContent: 'center', alignItems: 'center' }
});