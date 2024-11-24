import React from 'react'

const SuggestedDestinations = ({img, city, state, desc, index, len}) => {
  return (
    <div
      className="result-item"
    >
      <img src={img} alt="" />
      <div>
        <h4 style={{ letterSpacing: "0" }}>
          {city}, {state}
        </h4>
        <h4>{desc}</h4>
      </div>
    </div>
  );
}

export default SuggestedDestinations
