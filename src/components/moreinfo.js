import { Popover } from 'react-bootstrap';
import React from 'react';

const popover = () => {
  return (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
};

export default popover;
