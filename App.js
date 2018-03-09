import React from 'react';
import lodash from 'lodash';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import { Button } from 'react-native-elements';
import Header from './components/header';
import VodList from './components/vod-list';
import MenuVod from './components/menu-vod';
import { VOD } from './components/model';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vodList: [], isMenuVodListVisible:false, isMenuStartVodVisible:false, currentVod: {}, idGenerator: 0 };
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

  addVod = () => {
    let alea = Math.floor((Date.now() / 100));
    let nameVOD = 'VOD' + alea;
    const newVod = {
      id: this.state.idGenerator,
      content: nameVOD,
      alerte: 'En cours'
    }
    console.log(nameVOD);
    this.setState({ vodList: [...this.state.vodList, newVod], idGenerator: this.state.idGenerator + 1 }); // Eclate le tableau et ajoute l'objet VOD.
    
  };
  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Listes des VOD" />
        <Button 
          title="Nouvelle VOD"
          onPress={this.addVod}
        />
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


