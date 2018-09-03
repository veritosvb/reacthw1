import React from "react";
import "./ImageCard.css"


const ImageCard = props => (
  <div className={`card click-item`}>
    <div className={`img-container ${props.guessed ? "shake" : " "}`}>
    <span onClick={() => props.clickedFriend(props.id)}>
      <img alt={props.name} src={props.image} />
    </span>
    </div>
  </div>
);

export default ImageCard;
