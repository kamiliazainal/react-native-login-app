import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const userInfo = {username: 'user', password: 'p455w0rd'}

export default class HomeScreen extends Component {
    static navigationOptions = {
      header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#1e90ff" barStyle="light-content"/>
          <Text style={styles.welcome}>Login to my app</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.userBtn}
             // onPress={() => this.props.navigation.navigate('Details')}
             onPress={this._login}
              >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn}
              onPress={() => alert("Signup Works")}>
              <Text style={styles.btnTxt}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } 

    _login = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            //alert('Logged in !');
            //await AsyncStorage.setItem('@storage_Key', 'stored value')
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('Details')
        }
        else {
            alert('Username or Password is incorrect !');
        }
    }
  }


  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1e90ff'
    },
    welcome: {
      fontSize: 30,
      margin: 10,
      color: '#fff',
      textAlign: 'center'
    },
    input:{
      width: '90%',
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 10
    },
    userBtn: {
      backgroundColor: "#FFD700",
      padding: 15,
      width: '45%'
    },
    btnTxt:{
      fontSize: 18,
      textAlign: 'center'
    },
    btnContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%'
    }
  })