import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Touchable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import ProductItems from "../components/shopDetail/ProductItems";
import { TouchableOpacity } from "react-native-gesture-handler";

//items hardcoded
const goods = [
    {
        title: "chocolatecake",
        description: "cake of chocolate, made with chocolate",
        price: "$10.10",
        image:
            "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
    },
    {
        title: "cheesecake",
        description: "cake of cheese, made with cheesy cheese",
        price: "$22.10",
        image:
            "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
    },
    // {
    //     title: "uglyasscake",
    //     description: "ugly ass cake",
    //     price: "$0.10",
    //     image:
    //         "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/125865322_3944672392229403_874929528125186590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=waFlL4QqpHYAX-czuot&_nc_ht=scontent.fsin10-1.fna&oh=00_AT9dIvy032lhH0RnLa9ghYKTzhHJr4yE1kpFs5f0l7n77A&oe=62C9B9CB",
    // }, 
    // {
    //     title: "chococake 1",
    //     description: "again cake of chocolate, made with chocolate",
    //     price: "$10.10",
    //     image:
    //         "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
    // },
    // {
    //     title: "cheesecake 2",
    //     description: "again cake of cheese, made with cheesy cheese",
    //     price: "$22.10",
    //     image:
    //         "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
    // },
    {
        title: "uglycake 10000",
        description: "again ugly ass cake",
        price: "$0.10",
        image:
            "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/125865322_3944672392229403_874929528125186590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=waFlL4QqpHYAX-czuot&_nc_ht=scontent.fsin10-1.fna&oh=00_AT9dIvy032lhH0RnLa9ghYKTzhHJr4yE1kpFs5f0l7n77A&oe=62C9B9CB",
    }
  ];

export default function OrderCompleted( {navigation} ) {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { products, shopName } = useSelector(
    (state) => state.cartReducer.selectedProducts
  );

  const total = products
    .map((product) => Number(product.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "SGD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        /> */}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {shopName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <ProductItems
            goods={goods}
            hideCheckbox={true}
            marginLeft={10}
          />
          {/* <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          /> */}
          <TouchableOpacity
            style={{
              elevation: 8,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
              margin: 15,
              borderRadius: 15,
              backgroundColor: 'teal',
              marginBottom: 10
              }} 
              onPress = {() => navigation.navigate("BuyerCheckout")}>
              <Text style={{ color: "white", fontSize: 20, }}>
                        Check out
              </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
