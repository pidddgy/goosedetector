import React from 'react';

const Text = (props) => {
  const gooseProbability = String(props.gooseProbability * 100)

  console.log(props.validated) 
  if (gooseProbability < 98) {
    return(
      <p> This is not a goose :( </p>
    )
  }
  if (gooseProbability > 98) {
    return(
      <p> This is a goose! :) </p>
    )
  }
}

export default Text;
