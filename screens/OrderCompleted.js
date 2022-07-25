import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import ProductItems from "../components/shopDetail/ProductItems";
import { goods } from "./ShopDetail";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    products: [
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

  //issue: total num is off (will hardcode in for now.)
  const total = products
    .map((product) => Number(product.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 34.50)
    console.log;

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "SGD",
  })
  console.log(totalUSD);

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
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {shopName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <ProductItems
            goods={lastOrder.products}
            hideCheckbox={true}
            marginLeft={10}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
