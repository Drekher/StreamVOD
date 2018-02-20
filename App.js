import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './components/header';
import VodList from './components/vod-list';
import MenuVod from './components/menu-vod';

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
    this.state = { vodList };
  }
  onPressButton = () => {
    //this.setState({ myText: 'Stream lancé'});
    // <Text>{this.state.myText}</Text> a placer dans le render
    console.log('En attente');
  }

  affichageMenuVod = vodContent => {
    console.log('Appuie sur la tache', vodContent);
  }

  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Listes des VOD" />
        <Button title="Démarrer une VOD" onPress={this.onPressButton} />
        <ScrollView>
          <VodList onPressCallback={this.affichageMenuVod} vodList={this.state.vodList} />
        </ScrollView>
        <MenuVod />
      </View>
    );
  }
}


