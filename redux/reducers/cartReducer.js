let defaultState = {
    selectedProducts: { products: [], shopName: "" },
  };
  
  let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        let newState = { ...state };

        // newState.selectedProducts = {
        //   products: [...newState.selectedProducts.products, action.payload],
        //   shopTitle: action.payload.shopTitle,
        // }
  
        if (action.payload.checkboxValue) {
          console.log("ADD TO CART");
  
          newState.selectedProducts = {
            products: [...newState.selectedProducts.products, action.payload],
            shopName: action.payload.shopName,
          };
        } else {
          console.log("REMOVE FROM CART");
          newState.selectedProducts = {
            products: [
              ...newState.selectedProducts.products.filter(
                (product) => product.title !== action.payload.title
              ),
            ],
            shopName: action.payload.shopName,
          };
        }

        console.log(newState, "👉");
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  