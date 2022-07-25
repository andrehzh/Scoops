import { USER_STATE_CHANGE, USER_PRODUCTS_STATE_CHANGE } from '../constants';
import firebase from "../../firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
require("firebase/firestore");
require("firebase/storage");

export function reload() {
    return ((dispatch) => {
        dispatch(fetchUser())
        dispatch(fetchUserProducts())
    })
}

export function fetchUser() {
    return ((dispatch) => {
        let listener = firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .onSnapshot((snapshot, error) => {
                if (snapshot.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: { uid: firebase.auth().currentUser.uid, ...snapshot.data() } })
                }
            })
        unsubscribe.push(listener)
    })
}

export function fetchUserProducts() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("shops")
            .doc(firebase.auth().currentUser.uid)
            .collection("products")
            .orderBy("price", "asc")
            .get()
            .then((snapshot) => {
                let products = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                dispatch({ type: USER_PRODUCTS_STATE_CHANGE, products })
            })
    })
}