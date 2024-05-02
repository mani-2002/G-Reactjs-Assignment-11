import React from "react";
import "../App.css";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import gmail from "../images/gmail.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

function Footer() {
  return (
    <div className="foot">
      <a
        className="footBtns"
        href="https://www.facebook.com/profile.php?id=100070240689131"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="" className="footImgs" />
      </a>
      <a
        className="footBtns"
        href="https://twitter.com/MANIKANTAV91524"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="" className="footImgs" />
      </a>
      <a
        className="footBtns"
        href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbhCNGncSTwpVhlFpXzCdgWcfHxrNgZGwlmSXwQsDLRHfBghlmCdMWzvXxHKjbjKRnMDWR"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gmail} alt="" className="footImgs" />
      </a>
      <a
        className="footBtns"
        href="https://www.instagram.com/_m_a_n_i_2002_/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="" className="footImgs" />
      </a>
      <a
        className="footBtns"
        href="https://www.linkedin.com/in/manikanta-vinjamuri-57827a239/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="" className="footImgs" />
      </a>
      <a
        className="footBtns"
        href="https://github.com/mani-2002"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="" className="footImgs" />
      </a>
    </div>
  );
}

export default Footer;
