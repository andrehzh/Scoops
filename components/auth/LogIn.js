import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export class LogIn extends Component {
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
      <View>
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
            onPress = {() => this.onLogIn()}
            title = "Log In"
            color = "teal"
        />
      </View>
    )
  }
}

export default LogIn