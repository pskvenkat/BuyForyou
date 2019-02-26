import React from 'react';
import { Link } from "react-router-dom";
import PrimaryHeaderBar from './header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as prodActions from '../actions/prodActions'
import Header from './header'
import Navigation from './navigation';

export  class Main extends React.Component {
  constructor(props){
      super(props);
  }
  
  render () {
    return (
      <div> 
        <Header {...this.props} /> 
        <Navigation />
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