import React, { Component } from 'react';
import 'redux'; 
import Input from './components/input'
import Text from './components/text'
import './App.css';
import getGooseProbability from './assets/getProbability';
import { Button, PageHeader } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gooseProbability: null,
      url: null,
      otherPossibilities: null,
    };
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async setStateToGooseProbability(url) {
    try {
      this.setState({
        gooseProbability: (await getGooseProbability(url))[0],
        url: url,
        otherPossibilities: (await getGooseProbability(url))[1],
      });
    }
    catch (err) {
      this.setState({
        gooseProbability: 'not valid url',
      });
    }
  }

  async handleSubmit() {
    await this.setStateToGooseProbability(this.refs.inputRef.state.url);
  }

  render() {
    return (
      <div className="App">
        <PageHeader bsClass="less-padding">
          Is that a goose? <br/>
          <small>Enter a URL to a picture of a goose and find out if it's a goose or not </small>
        </PageHeader>
        <div className="center"> <Input ref="inputRef"/> </div>
        <Button onClick={this.handleSubmit}>Submit</Button>
        <Text gooseProbability={this.state.gooseProbability} image={this.state.url} otherPossibilities={this.state.otherPossibilities} /> 
      </div>
    );
  }
}

export default App;
