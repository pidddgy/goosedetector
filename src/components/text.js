import React from 'react';

const Text = (props) => {
  if (props.gooseProbability === 'not valid url') {
    return(
      <p> That's a weird URL.... try something else? </p>
    )
  }

  const gooseProbability = String(props.gooseProbability * 100)
  if (gooseProbability < 87) {
    return(
      <p> This is not a goose :( </p>
    )
  }
  if (gooseProbability < 98 || gooseProbability > 87) {
    return(
      <p> This might be a goose? :L </p>
    )
  }
  if (gooseProbability > 98) {
    return(
      <p> This is a goose! :) </p>
    )
  }
}

export default Text;
