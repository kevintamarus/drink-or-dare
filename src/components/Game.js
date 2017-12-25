import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    return (
      <div style={styles.container}>
        this is the Game component
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