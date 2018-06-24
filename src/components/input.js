import React, { Component } from 'react';
import 'redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import '../css/input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formGroupRef = React.createRef();
  }

  getValidationState() {
    if (this.state.url === undefined || this.state.url === '') {
      return null;
    } else if (this.state.url.startsWith('http')) {
      return 'success';
    }
    return 'error';
  }

  async handleChange(event) {
    await this.setState({
      url: event.target.value,
    });
  }
  
  render() {
    return (
      <form>
      <FormGroup
        validationState={this.getValidationState()}
        ref="formGroupRef"
      >
        <FormControl
          type="text"
          placeholder="Enter URL"
          onChange={this.handleChange}
          id="textbox"
          />
      </FormGroup>
    </form>
    )
  }
}

export default Input;
