import React, { Component, PropTypes } from 'react';


export default class App extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired
  };

  static defaultProps = {
    params: {}
  };

  render() {
    return (
      <div>
        'Hello super cow'
      </div>
    );
  }
}
