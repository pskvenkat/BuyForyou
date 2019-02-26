
export const productReducers = (state = [], action) => {
    //console.log("reducers1",action);
    switch (action.type) {
        case 'FETCH_PROD_SUCCESS':
        return action.products;

        default:
        return state;
        }
  };
  