import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as prodActions from '../../actions/prodActions'
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import CartItems from '../cart/cart_items'


export class CartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalPrice: 0,
            subtotal: 0
        }
    }
    componentDidMount() {
        //this.updateTotalPrice();
    }

    render () {
        const totItems = this.props.cart;
        const subTotal = [];
        let total = 0;
            totItems.map((prod) =>  (
                subTotal.push(prod.price * prod.qty)
           ))
         
       for (let i = 0; i < subTotal.length; i ++) 
          {
            total += subTotal[i];
           }

        return (
            <div className="flex-container">
                {totItems.length > 0 ? (
                    <ul>
                        {totItems.map((prod, index) => <CartItems {...this.props} key={index} i= {index} items={prod} />)}
                    </ul>
                ):(
                    <ul><li> Item not available in your cart, Please Add</li></ul>
                )}

                <div className="minicart-total">
                    {totItems.length > 0 ? ( <div className="subtotal">SubTotal: ₹ {total}</div>) :('') }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      cart:state.cart
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(prodActions, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
