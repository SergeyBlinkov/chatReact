import React from "react";
import "./BlockChatStyle/BlockChatStyle.css";

import { useSelector } from 'react-redux'




export default function BlockChat() {
 
  
  const list = useSelector(state => state.push)
  
  

  return (
    <div className="BlockChat">
      <div className="BlockChat__area">
        {list.map((data, index) => {
        
          return (
            <div className={data.mytext ? "chat__me" :"BlockChat__message"} key={index}>
              <div className="user chat">
                <img src={data.image} alt="pic" />
                <p>{data.firstName}</p>
              </div>
              <div className="user__message">
                {data.mytext ? data.mytext :<p>Hello how are you today?</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
