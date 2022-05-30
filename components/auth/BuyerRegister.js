import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
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
              console.log(result)
        })
            .catch((error) => {
                console.log(error)
        })
    }

  render() {
    return (
      <View>
          <TextInput
            placeholder = "name"
            onChangeText = {(name) => this.setState({ name })} // sets the name when user types
          />
          <TextInput
            placeholder = "email"
            onChangeText = {(email) => this.setState({ email })} // sets the name when user types
          />
          <TextInput
          placeholder = "password"
          secureTextEntry = {true}
          onChangeText = {(password) => this.setState({ password })} // sets the name when user types
        />

        <Button
            onPress = {() => this.onRegister()}
            title = "Sign Up"
        />
      </View>
    )
  }
}

export default BuyerRegister