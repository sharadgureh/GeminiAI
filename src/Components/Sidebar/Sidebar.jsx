/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);
  const onLoad = async (propmt)=>{
    setRecentPrompt(propmt)
    await onSent(propmt)
  }
  return (
    <div className="Sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" onClick={()=>setToggle(pre=>!pre)} />
        <div className="new-chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} alt="" />
          {toggle ? <p>New Chat</p> : null}
        </div>
        {toggle ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {
              prevPrompt.map((prev,index)=>(
                
            <div onClick={()=>{onLoad(prev)}} className="recent-entry" key={index}>
              <img src={assets.message_icon} alt="" />
              <p>{prev.slice(0,19)}...</p>
            </div>
              ))
            }
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="botton-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {toggle ? <p>Help</p> : null}
          
        </div>

        <div className="botton-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {toggle ? <p>Activity</p> : null}
          
        </div>

        <div className="botton-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {toggle ? <p>Settings</p> : null}
          
        </div>
      </div>
    </div>
  );
}
