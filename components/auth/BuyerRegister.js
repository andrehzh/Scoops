import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export class BuyerRegister extends Component {
    constructor(props) { // must call constructor whenever a component is created
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onBuyerRegister = this.onBuyerRegister.bind(this) // must do this in order to access 'this' variable
    }
 
    onBuyerRegister() {
        const { name, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
              firebase.firestore().collection("buyers")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  name,
                  email
                })
            console.log(result);
            this.props.navigation.navigate("BuyerHome");
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
        <Text style = {styles.text2}>Register - Buyer</Text>
        <TextInput
            style = {styles.input}
            placeholder = "name"
            onChangeText = {(name) => this.setState({ name })}
        />
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
            onPress = {() => {this.onBuyerRegister()}}>
            <Text style = {styles.text}>Sign Up</Text>
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
    height: 60,
    margin: 12,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    marginBottom: 7
  },
});

export default BuyerRegister
