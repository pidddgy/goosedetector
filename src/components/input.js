import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import 'redux';

class Input extends Component{
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      validated: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.formGroupRef = React.createRef();
}
  endsWithAny(suffixes, string) {
    return suffixes.some(function (suffix) {
        return string.endsWith(suffix);
    });
  }

  async handleChange(event) {
    event.persist();
    await this.setState({
        url: event.target.value,
    })
    const validated = this.getValidationState(this.state.url)
    this.setState({
      validated: validated
    })
  }

  getValidationState() {
    if (this.endsWithAny(['.png','jpg','jpeg'],this.state.url)) {
      return true;
    } else {
      return false;
    }
  }
  
  render(){
    return(
      <form>
      <FormGroup
        validationState={this.getValidationState()}
        ref="formGroupRef"
      >
        <FormControl
          type="text"
          placeholder="Enter URL"
          onChange={this.handleChange}
          />
      </FormGroup>
    </form>
    )
  }
}

export default Input;