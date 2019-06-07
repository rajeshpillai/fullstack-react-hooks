import React from 'react';

export default function Button(props) {
  return (
    <span onClick={props.onClick}
      className={props.className + " btn btn-round btn-default"}>
        +
    </span>
  )
}