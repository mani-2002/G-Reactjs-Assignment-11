import React from "react";
import '../App.css';
import profileImg from '../images/self.jpg'
function MainBody() {
  return (
  <div className="mainBodyDiv">
    <div className="imgDiv">
      <img src={profileImg} className="profileImg" alt=""/>
    </div>
    <div className="bioDiv">
      <div className="bio1">Hi, I am Manikanta Vinjamuri.</div>
      <div className="bio2">I am a Full stack developer, currently studying</div>
      <div className="bio3">B.Tech(ECE) 3rd Year.</div>
    </div>
  </div>
  );
}

export default MainBody;
