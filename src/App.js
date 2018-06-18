import React, { Component } from 'react';
import 'redux'; 
import Input from './components/input'
import Text from './components/text'
import './App.css';
import getGooseProbability from './assets/getProbability';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gooseProbability: null,
      validated: false
    };
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async setStateToGooseProbability(url) {
    this.setState({
      gooseProbability: await getGooseProbability(url),
    });
  }

  async setStateToValidated(validated) {
    this.setState({
      validated: validated
    })
  }

  async handleSubmit(){
    await this.setStateToGooseProbability(this.refs.inputRef.state.url);
    await this.setStateToValidated(this.refs.inputRef.validated);
  }

  render() {
    return (
      <div className="App">
        <Input ref="inputRef"/>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <Text gooseProbability={this.state.gooseProbability}/> 
      </div>
    );
  }
}

export default App;
