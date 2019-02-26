import React from 'react';
import { Link } from "react-router-dom";
import PrimaryHeaderBar from './header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as prodActions from '../actions/prodActions'

export  class Main extends React.Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <div> 
                <PrimaryHeaderBar {...this.props} /> 
                <Link to="/products">products</Link>
               
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);