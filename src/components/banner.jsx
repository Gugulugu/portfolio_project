import React from 'react';


function Banner(props) {
  return (
    <div className="p-3 text-light bg-secondary border bs-light-border-subtle rounded-3">
      <div className="banner">
      <div className="text-container">
        <h1 id={props.scrollHeader}>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      {props.image && (
      <div className="image-container">
        <img src={props.image} alt="..." className="circular-image" />
      </div>
        )}
    </div>
    </div>
  );
}

export default Banner;
