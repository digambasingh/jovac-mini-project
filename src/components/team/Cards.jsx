import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
import './card.css';
import { IoLocationOutline } from "react-icons/io5";

import { TfiEmail } from "react-icons/tfi";

import { FaPhone } from "react-icons/fa6";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Avatar image={props.image} />

      </div>
      <h2 className="name">{props.name}</h2>
      <p className="jobname">{props.job}</p>
      
      <div className="bottom">
        
        
        
{/* <FontAwesomeIcon icon="fa-regular fa-mailbox-flag-up" /> */}
<div className="mailbox">
  <div className="mail"><TfiEmail /></div>

<div className="mail"><Details detailInfo={props.email} /></div></div>
      
      <div className="mailbox">
        <div className="mail"><FaPhone /></div>
        <div className="mail">
        <Details detailInfo={props.tel} />
        </div>
      </div>
      <div className="mailbox">  <div className="mail"><IoLocationOutline /></div>
      <div className="mail"><Details detailInfo={props.add} />
      </div>
      </div>
        
       
      </div>
    </div>
  );
}

export default Card;