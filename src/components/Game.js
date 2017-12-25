import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: null
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={styles.container}>
        <ButtonGroup>
          <Button bsClass="btn btn-w-m btn-lg btn-success">Truth</Button>
          <Button bsClass="btn btn-w-m btn-lg btn-warning">Dare</Button>
        </ButtonGroup>
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