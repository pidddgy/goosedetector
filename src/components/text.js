import { Alert } from 'react-bootstrap';
import React from 'react';
import '../css/text.css';


const Text = (props) => {

  if (props.gooseProbability === 'not valid url') {
    return (
      <div className="wrapper">
        <div id="alertWrapper">
          <Alert bsStyle="danger">
            <p> That's a weird URL... try something else? </p>
          </Alert>
        </div>
      </div>
    );
  }

  const gooseProbability = props.gooseProbability * 100;
  console.log(gooseProbability)
  if (gooseProbability < 87) {
    return (
      <div className="wrapper">
        <img alt="" src={props.image} />
        <div id="alertWrapper">
          <Alert bsStyle="danger">
            <p> This is not a goose :( </p>
          </Alert>
        </div>
      </div>
    );
  }
  if (gooseProbability < 95 && gooseProbability > 87) {
    return (
      <div className="wrapper">
        <img alt="Failed to load." src={props.image} /> 
        <div id="alertWrapper">
          <Alert bsStyle="warning">
            <p> This might be a goose :L</p>
          </Alert>
        </div>
      </div>
    );
  }
  if (gooseProbability > 95) {
    return (
      <div className="wrapper">
        <img alt="Failed to load." src={props.image} /> 
        <div id="alertWrapper">
          <Alert>
            <p> This is a goose! :) </p>
          </Alert>
        </div>
      </div>
    );
  }
};

export default Text;
