import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as prodActions from '../../actions/prodActions'
import ProdItems from './product_items';
import Grid from '@material-ui/core/Grid';

export class Products extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        const styles = {
            root: {
              flexGrow: 1,
              margin: 10,
            }
        }
    
        return (
            <Grid container className="grid"  alignItems="center" justify="center" spacing={32}>
                <Grid container  item xs={8} spacing={24}>
                    {this.props.products.map((prod, index) => <ProdItems {...this.props} key={index} i= {index} items={prod}/>)}
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    return {
      products: state.products,
      cart:state.cart
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(prodActions, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);