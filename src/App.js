import React, { Component, Fragment } from 'react';
import Navigation from './component/Navigation';
import './App.css';
import Card from './component/Card';

class App extends Component {


  state = {
    cards : [
      { name : "Jahn Dae", age :  17, body : "Hood" },
      { name : "Rani Dae", age :  20, body : "Roomy" },
      { name : "Ghani Dae", age :  23, body : "Classy" },
      { name : "Luucifer", age :  29, body : "khalasi" }
    ]
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Navigation />
        <hr />
        <br />

        <div className="container">
          <Card name= {this.state.cards[0].name} age = {this.state.cards[0].age} body = {this.state.cards[0].body} />
          <Card name= {this.state.cards[1].name} age = {this.state.cards[1].age} body = {this.state.cards[1].body} />
          <Card name= {this.state.cards[2].name} age = {this.state.cards[2].age} body = {this.state.cards[2].body} />
          <Card name= {this.state.cards[3].name} age = {this.state.cards[3  ].age} body = {this.state.cards[3 ].body} />
        </div>
      </Fragment>
    );
  }
}

export default App;