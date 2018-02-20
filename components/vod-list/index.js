import React from 'react';
import { List, ListItem, Badge } from 'react-native-elements';
import { VOD } from '../model';
import { APP_COLORS } from '../../styles/color';
import { style } from './style';

const VodList = ({ vodList, onPressCallback }) => (
    <List containerStyle={style.list}>
        {vodList.map(vod => (
           <ListItem 
           key={vod.id} 
           title={vod.content}
           onPress={() => onPressCallback(vod.content)}
           badge={{
                element: (
                    <Badge 
                    value={vod.alerte}
                    containerStyle={
                        vod.alerte === VOD.inProgress
                        ? { backgroundColor: APP_COLORS.vert } 
                        : { backgroundColor: APP_COLORS.rouge }
                    } 
                />
            )
        }} 
     />
    ))}

    </List>
);

export default VodList;