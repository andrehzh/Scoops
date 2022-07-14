//login will be put on hold for now...
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import firebase from '../../firebase';

export class Login extends Component {
    constructor(props) { // must call constructor whenever a component is created
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.onLogIn = this.onLogIn.bind(this) // must do this in order to access 'this' variable
    }
 
     onLogIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
        })
            .catch((error) => {
                console.log(error)
        })
    } 

  render() {
    return (
      <View style = {styles.Container}>
        <Image
            style = {{width: 300, height: 300, alignSelf: 'center'}}
            resizeMode = "contain"
            source = {require('../../assets/logo.png')}/>
        <Text style = {styles.text2}>Log In</Text>
        <TextInput
            style = {styles.input}
            placeholder = "email"
            onChangeText = {(email) => this.setState({ email })} 
        />
        <TextInput
            style = {styles.input}
            placeholder = "password"
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({ password })} 
        />
        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => this.onLogIn()}>
            <Text style = {styles.text}>Log In</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  button: {
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    backgroundColor: 'teal',
    marginBottom: 10
  },
  text: {
    color: "white",
    fontSize: 15
  },
  text2: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20
  },
});

export default Login
