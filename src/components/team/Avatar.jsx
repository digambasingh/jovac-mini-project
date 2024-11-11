import React from "react";
import './avatar.css'
function Avatar(props) {
  return <img className="circle-img" src={props.image} alt="avatar_img" />;
}

export default Avatar;