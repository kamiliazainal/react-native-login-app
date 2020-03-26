import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from './component/screens/Login';
import DetailsScreen from './component/screens/Details';

const RootStack = createStackNavigator({
  //Home: HomeScreen,
  Details: DetailsScreen
},
{
  //initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1e90ff'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  }
}
);

const AuthStack = createStackNavigator({
  Home: HomeScreen
});

class AuthLoadingScreen extends Component {
  constructor(props){
    super(props);
    this._loadData();
  }

  render(){
    return (
      <View stle={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="light"/>
      </View>
    );
  }

  _loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
))

// const AppContainer = createAppContainer(RootStack);

// type Props = {};
// export default class App extends Component<Props> {
//   render(){
//     return (
//       <AppContainer />
//     );
//   }
// };

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})