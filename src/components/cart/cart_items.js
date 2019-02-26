import React from 'react';
import PropTypes from "prop-types";

const CartItems = (props) => {
    let item = props.items,
    index = props.key,
    quant = item.qty;

    function handleQuantityas(id, price){
        let Qty = this.refs.qty.value;
        
        //props.onSelectQuantity(Qty)
        //props.UpdateCart.bind(null, id, price, this.refs.qty.value)
      };


    function buildOptions(item) {
        let arr = [], selected;
        for (let i = 1; i <= item.totQty; i++) {
            selected = (parseInt(item.qty) === i) ? true : '';
            arr.push(<option key={i} selected={selected} value={i}  >{i}</option>)
        }
        return arr; 
    };

    function onChangeOption(e){
        let optionValue = e.target.value,
            price = parseInt(e.currentTarget.nextElementSibling.value),
            id = parseInt(e.currentTarget.nextElementSibling.id),
            totPrice = parseInt(quant * price);

            props.UpdateCart(id, price, optionValue, totPrice)
    }

    return (
        <li className="minicart-item" key={index}>
            <div className="minicart-name">                
                    <span>{item.name}</span>  
                </div>
                <div className="minicart-quantity">  
                    <select onChange={onChangeOption} >
                        {buildOptions(item)}
                    </select> 
                    <input type="hidden" id={item.id} value={item.price} />    
                </div>
                <div className="minicart-remove">                
                    <button type="button" className="remove-btn" data-minicart-idx="0" onClick={props.deleteCartItem.bind(null, item.id)}>×</button>            
                </div>
                <div className="minicart-price">                
                    <span className="price">{item.price * item.qty}</span>            
                </div>
        </li>
    )
}

export default CartItems;