import React from 'react';

const GarageState = (props) => {
  let { getGarageStatus } = props;

  return (
    <div className="state">
      <span>The garage door is</span>
      <p>{getGarageStatus()}</p>
    </div>
  )
};


const GarageState2 = (props) => {
  let { getGarageStatus2 } = props;

  return (
    <div className="state">
      <span>The garage door 2 is</span>
      <p>{getGarageStatus2()}</p>
    </div>
  )
};

export default GarageState
export default GarageState2