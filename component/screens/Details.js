import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Button} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import AsyncStorage from '@react-native-community/async-storage';

export default class DetailsScreen extends Component {
    static navigationOptions = {
      title: 'My App',
      headerRight: <View />
    }
    render() {
      return (
        <View style={styles.container}>
           <View style={styles.containers}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                <MapView.Marker
                    coordinate={{latitude: 37.78825,
                    longitude: -122.4324}}
                    title={'My title'}
                    description={'My description'}
                    />                      
                </MapView>
            </View>
            <Button onPress={this._logout} title="Logout" />
        </View>
      );
    }

    _logout = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
  }

  const styles = StyleSheet.create({
      container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
      },
      containers: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 430,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
  })