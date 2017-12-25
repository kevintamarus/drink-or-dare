import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>DRINK OR DARE</h1>
        <div><Link to='/players'>Drinking Game</Link></div>
        <div><Link to='/players'>Dirty</Link></div>
        <div><Link to='/players'>Drinking + Dirty Game</Link></div>
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