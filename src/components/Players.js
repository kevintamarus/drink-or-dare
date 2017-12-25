import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Players extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div><Link to='/game'>Start Game</Link></div>
        <div><Link to='/'>Back To Home</Link></div>
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundImage: 'linear-gradient(45deg, #cc0000 0%, #ff33cc 100%)', 
    height: window.innerHeight,
    alignItems: 'center', 
    textAlign: 'center'
  }
}