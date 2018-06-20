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
    };
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async setStateToGooseProbability(url) {
    try{
      this.setState({
        gooseProbability: await getGooseProbability(url),
      });
    }
    catch(err){
      this.setState({
        gooseProbability: 'not valid url'
      });
    }
  }

  async handleSubmit(){
    await this.setStateToGooseProbability(this.refs.inputRef.state.url);
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
