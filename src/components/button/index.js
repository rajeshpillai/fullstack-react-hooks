import React from 'react';

export default function Button(props) {
  return (
    <span onClick={props.onClick}
      className="btn btn-round btn-default">
        +
    </span>
  )
}