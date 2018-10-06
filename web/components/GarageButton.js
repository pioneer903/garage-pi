import React from 'react';

const GarageButton = (props) => {
  let { sendRelay, buttonText } = props;

  return (
    <button onClick={() => sendRelay()}>{buttonText}</button>
  )
};

const GarageButton2 = (props) => {
  let { sendRelay2, buttonText2 } = props;

  return (
    <button onClick={() => sendRelay2()}>{buttonText2}</button>
  )
};

export default GarageButton
export default GarageButton2
