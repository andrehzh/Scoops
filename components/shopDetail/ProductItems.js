import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'
//import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

//style dic
const styles = StyleSheet.create({
    shopProductStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

//menu
//shopTitle notWorking
//the big issue is here
export default function ProductItems({ 
    shopTitle,
    goods,
    hideCheckbox,
    marginLeft, 
    }) {
    const dispatch = useDispatch();

    const selectProduct = (product, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...product, 
                shopTitle: "filler",
                checkboxValue: checkboxValue,}
        });

        const cartProducts = useSelector(
            (state) => state.cartReducer.selectedProducts.products
        );
        
        const isGoodInCart = (good, cartProducts) => 
            Boolean(cartProducts.find((product) => product.title === good.title)
        );

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            {goods.map((good, index) => (
                <View key={index}>
                    <View style={styles.shopProductStyle}>
                        {hideCheckbox ? (
                            <></>
                        ) : (
                        <BouncyCheckbox
                        iconStyle={{ borderColor: "lightgray", borderRadius: 0}}
                        fillColor="green"
                        isChecked={isGoodInCart(good, cartProducts)}
                        onPress={(checkboxValue) => selectProduct(good, checkboxValue)}
                        />
                        )}
                        <GoodInfo good={good} />
                        <GoodImage good={good} marginLeft={marginLeft ? marginLeft : 0}/>
                    </View>
                    <Divider 
                        width={0.5} 
                        orientation="vertical" 
                        style={{ marginHorizontal: 20 }}
                    />
                </View> 
            ))}
        </ScrollView>
    )
}

//constant item info
const GoodInfo = (props) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Text style = {styles.titleStyle}>{props.good.title}</Text>
        <Text>{props.good.description}</Text>
        <Text>{props.good.price}</Text>
    </View>
)

//constant itemImage
const GoodImage = ({ marginLeft, ...props }) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Image 
        source={{uri: props.good.image}} 
        style={{width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft,}}
        />
    </View>
) 
// import React from "react";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { Divider } from "react-native-elements";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

// const styles = StyleSheet.create({
//   menuItemStyle: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     margin: 20,
//   },

//   titleStyle: {
//     fontSize: 19,
//     fontWeight: "600",
//   },
// });

// export default function ProductItems({
//   shop,
//   goods,
//   hideCheckbox,
//   marginLeft,
// }) {
//   const dispatch = useDispatch();

//   const selectProduct = (product, checkboxValue) =>
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: {
//         ...product,
//         shopName: "filler",
//         checkboxValue: checkboxValue,
//       },
//     });

//   const cartProducts = useSelector(
//     (state) => state.cartReducer.selectedProducts.products
//   );

//   const isGoodInCart = (good, cartProducts) =>
//     Boolean(cartProducts.find((product) => product.title === good.title));

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       {goods.map((good, index) => (
//         <View key={index}>
//           <View style={styles.menuItemStyle}>
//             {hideCheckbox ? (
//               <></>
//             ) : (
//               <BouncyCheckbox
//                 iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
//                 fillColor="green"
//                 isChecked={isGoodInCart(good, cartProducts)}
//                 onPress={(checkboxValue) => selectProduct(good, checkboxValue)}
//               />
//             )}
//             <GoodInfo good={good} />
//             <GoodImage good={good} marginLeft={marginLeft ? marginLeft : 0} />
//           </View>
//           <Divider
//             width={0.5}
//             orientation="vertical"
//             style={{ marginHorizontal: 20 }}
//           />
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const GoodInfo = (props) => (
//   <View style={{ width: 240, justifyContent: "space-evenly" }}>
//     <Text style={styles.titleStyle}>{props.good.title}</Text>
//     <Text>{props.good.description}</Text>
//     <Text>{props.good.price}</Text>
//   </View>
// );

// const GoodImage = ({ marginLeft, ...props }) => (
//   <View>
//     <Image
//       source={{ uri: props.good.image }}
//       style={{
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//         marginLeft: marginLeft,
//       }}
//     />
//   </View>
// );
