import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Users extends Component {
  state = {
    heading: 'User Component',
    users: ''
  };

  componentDidMount() {
      axios.get('/api/users')
      .then (res => {
          console.log(res.data)
          this.setState({
              ...this.State,
              users: res.data
          })
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {JSON.stringify(this.state.users)}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Users);