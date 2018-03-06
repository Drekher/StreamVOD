import React from 'react';
import lodash from 'lodash';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './components/header';
import VodList from './components/vod-list';
import MenuVod from './components/menu-vod';
import { VOD } from './components/model';

const vodList = [
    {
      id: 0,
      content: 'VOD du 17/02/2018 à 17h32',
      alerte: 'Terminée'
    },

    {
      id: 1,
      content: 'VOD du 17/02/2018 à 18h14',
      alerte: 'En cours'
    },

    {
      id: 2,
      content: 'VOD du 17/02/2018 à 19h07',
      alerte: 'En cours'
    },
    {
      id: 3,
      content: 'VOD du 20/02/2018 à 13h32',
      alerte: 'Terminée'
    },

    {
      id: 4,
      content: 'VOD du 20/02/2018 à 14h14',
      alerte: 'En cours'
    },

    {
      id: 5,
      content: 'VOD du 20/02/2018 à 15h07',
      alerte: 'En cours'
    },
    {
      id: 6,
      content: 'VOD du 20/02/2018 à 13h32',
      alerte: 'En cours'
    },

    {
      id: 7,
      content: 'VOD du 20/02/2018 à 14h14',
      alerte: 'Terminée'
    },

    {
      id: 8,
      content: 'VOD du 20/02/2018 à 15h07',
      alerte: 'En cours'
    }
  ];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vodList, isMenuVodListVisible:false, isMenuStartVodVisible:false, currentVod: {} };
  }
  

  toogleMenuVodVisiblity = vod => {
    let currentVod = vod;
    if (this.setState.isMenuVodListVisible) {
      currentVod = {};
    }
    this.setState({ isMenuVodListVisible: !this.state.isMenuVodListVisible,
    currentVod
    });
  }

  deleteCurrentVod = () => {
    const index = lodash.findIndex(this.state.vodList, {
      id: this.state.currentVod.id
    });

    const list = this.state.vodList;
    list.splice(index, 1);
    this.setState({ vodList: list, currentVod: {} });
    this.toogleMenuVodVisiblity();
  };

  toogleVodStatus = () => {
    const updatedVOD = this.state.currentVod;
    updatedVOD.alerte = this.state.currentVod.alerte === VOD.finished 
    ? VOD.inProgress 
    : VOD.finished;

    const index = lodash.findIndex(this.state.vodList, {
      id: this.state.currentVod.id
    });

    const updatedVodList = this.state.vodList;
    updatedVodList[index] = updatedVOD;
    this.setState({
      vodList: updatedVodList, 
      isMenuVodListVisible: false,
       currentVod: {} 
      });
  };
  
  cancelButton = () => {
    this.setState({ isMenuVodListVisible: !this.state.isMenuVodListVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Listes des VOD" />
        <Button title="Démarrer une VOD" />
        <ScrollView>
          <VodList 
            onPressCallback={this.toogleMenuVodVisiblity} 
            vodList={this.state.vodList} 
            />
        </ScrollView>
          <MenuVod 
            isVisible={this.state.isMenuVodListVisible} 
            onDisapearCallBack={this.toogleMenuVodVisiblity} 
            onDeleteCallBack={this.deleteCurrentVod}
            onChangeStatutCallBack={this.toogleVodStatus}
            onCancelCallBack={this.cancelButton}
          />
      </View>
    );
  }
}


