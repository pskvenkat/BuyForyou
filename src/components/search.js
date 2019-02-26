  import React from 'react';
  import { bindActionCreators } from 'redux'
  import { connect } from 'react-redux';
  import * as prodActions from '../actions/prodActions'
  import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
 

const styles = theme => ({
});
  class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: "",
        users: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
     
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }
  
    render() {
      let _users = this.props.products;
      let search = this.state.searchString.trim().toLowerCase();
  
      if (search.length > 0) {
        _users = _users.filter(function(user) {
          return user.name.toLowerCase().match(search);
        });
      }
  
      return (
        <div>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        </div>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        products: state.products
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(prodActions, dispatch)
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);