import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firebase from '../../firebase'
import "firebase/compat/firestore";

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const { products, shopName } = useSelector(
        (state) => state.cartReducer.selectedProducts
    );
    
    const total = products
        .map((product) => Number(product.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        });

    console.log(totalUSD);

    const addOrderToFirebase = () => {
        const db = firebase.firestore();
        db.collection("orders").add({
            products: products,
            shopName: shopName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setModalVisible(false);
        navigation.navigate("OrderCompleted");
    }

    const styles = StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
        },
    
        modalCheckoutContainer: {
          backgroundColor: "white",
          padding: 16,
          height: 500,
          borderWidth: 1,
        },
    
        shopName: {
          textAlign: "center",
          fontWeight: "600",
          fontSize: 18,
          marginBottom: 10,
        },
    
        subtotalContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        },
    
        subtotalText: {
          textAlign: "left",
          fontWeight: "600",
          fontSize: 15,
          marginBottom: 10,
        },
      });


    //shopTitle is missing
    const checkOutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.shopName}> {shopName} </Text>
                        {products.map((product, index) => (
                            <OrderItem key={index} product={product} />
                        ))}
                        <View>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View
                            style={{ flexDirection: "row", justifyContent: "center" }}
                        >
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: "relative",
                                }}
                                onPress={() => {
                                    addOrderToFirebase();
                                    setModalVisible(false);
                                }}>
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}>
                                    {total ? totalUSD : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    return (
        <>
        <Modal 
        animationType='slide' 
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        >
            {checkOutModalContent()}
            </Modal>
        {total ? (
        <View style={{
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 130,
            zIndex: 999,
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
            }}>
                <TouchableOpacity 
                    style={{
                        marginTop: 20,
                        backgroundColor: "black",
                        flexDirection: "row",
                        justifyContent: 'flex-end',
                        padding: 15,
                        borderRadius: 30,
                        width: 300,
                        position: "relative",
                    }}
                    onPress = {() => setModalVisible(true)}
                >
                    <Text style={{ color: "white", fontSize: 20, marginRight: 30,}}>
                        View Cart
                    </Text>
                    <Text style = {{ color: "white", fontSize: 20}}>{totalUSD}</Text>
                </TouchableOpacity>
            </View>
        </View>
        ) : (
        <></>
        )}
        </>
    )
}