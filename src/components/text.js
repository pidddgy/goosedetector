import { Alert, Popover, OverlayTrigger, ListGroupItem } from 'react-bootstrap';
import React from 'react';
import '../css/text.css';


const Text = (props) => {

  const getOtherPossibilities = (possibilities) => {
    const returnList = [];
    try {
      possibilities.otherPossibilities.forEach((element) => {
        if(element.name !== 'goose' && returnList.length < 5) {
          returnList.push(element.name);
        }
      });
    } catch (error) {
      console.log(error)
    }
  
    return returnList;
  };

  const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title={<strong> More info </strong>} placement="right">
      <p>
      There's a {props.gooseProbability * 100}% chance that this is a goose.
      <br/>
      <br/>
      This picture could also be of (a): {getOtherPossibilities(props).map((possibility) => {
        return <ListGroupItem>{possibility}</ListGroupItem>;

      })}
      </p>
    </Popover>
  );

  if (props.gooseProbability === 'not valid url') {
    return (
      <div className="wrapper">
        <div id="alertWrapper">
          <Alert bsStyle="danger">
            <p> That's a weird URL... try something else? (hint: something that starts with 'http' or 'https') </p>
          </Alert>
        </div>
        
      </div>
    );
  }

  const gooseProbability = props.gooseProbability * 100;

  if (gooseProbability < 87) {
    return (
      <div className="wrapper">
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="right"
          overlay={popoverHoverFocus}
        >
          <img alt="Failed to load image." src={props.image} /> 
        </OverlayTrigger>
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
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="right"
          overlay={popoverHoverFocus}
        >
          <img alt="Failed to load image." src={props.image} /> 
        </OverlayTrigger>
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
        <OverlayTrigger
          trigger={['hover', 'focus']}
          placement="right"
          overlay={popoverHoverFocus}
        >
          <img alt="Failed to load image." src={props.image} /> 
        </OverlayTrigger>
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
