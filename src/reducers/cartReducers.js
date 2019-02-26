

  export const cartReducers = (state = [], action) => {
    //console.log("cart reducers",action);
      switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
          let existingIndex = findProductIndex(state, action.id);

          if (existingIndex !== -1) {
            state[existingIndex].qty = state[existingIndex].qty + 1;
            return state.concat([]);
          }
          return state.concat(action)

        case 'DELETE_CART' :
          let items = state.filter(function(items){
            return action.id !== items.id
          })
          state = items;
          return state;

        case 'UPDATE_CART':
        let existId = findProductIndex(state, action.id),
        totPrice;

        if (existId !== -1) {
          state[existId].qty = action.qty;
          totPrice = action.qty * action.price;
          return state.concat([]);
        }
        return state.concat(action)
          
        default:
          return state;
      }

      

      function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
      }
  };

  