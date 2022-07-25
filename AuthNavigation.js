import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SignedinStackBuyer, SignedInStackSeller, SignedOutStack } from './navigation';
import firebase from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null) 
    const [userType, setUserType] = useState(null)

    const userHandler = user =>
        user ? setCurrentUser(user) : setCurrentUser(null)

    const findUserType = async () => {
        const db = firebase.firestore();

        const docRef = doc(db, "users", firebase.auth().currentUser.email)
        const docSnap = await getDoc(docRef)

        if(docSnap.data().type === "buyer") {
            setUserType(docSnap.data().type) 
        };
    }
    
    useEffect(() =>
        firebase.auth().onAuthStateChanged(user => userHandler(user)),
        findUserType(),
        []);

    
    return <>{!currentUser ? <SignedOutStack /> : (userType === "buyer" ? <SignedinStackBuyer/> : <SignedInStackSeller/>) }</>
}

export default AuthNavigation