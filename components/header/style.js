import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const style = StyleSheet.create({
    subHeader:{
        backgroundColor: APP_COLORS.marronFonce,
        height:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: APP_COLORS.marronClair,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: APP_COLORS.noir,
        shadowOpacity: 0.6,
    },
    footer: {
        backgroundColor: APP_COLORS.orangeClair,
        height:50,
        shadowColor: APP_COLORS.noir,
        shadowOpacity: 0.6,
        shadowOffset: {height:10}
        
    },
    text: {
        color:APP_COLORS.blanc,
        fontSize: 20
    },

    titre: {
        color:APP_COLORS.blanc,
        fontSize: 10
    }
});