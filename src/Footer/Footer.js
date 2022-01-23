import React, { useState } from "react";
import "./FooterStyle/FooterStyle.css";
import { useSelector, useDispatch } from "react-redux";
import { push, pushme } from "../action/action";
import manI from "../img/manI.jpg";
import { IamMan } from "../dataUser";

export default function Footer() {
 

  const [inptValue, setInptValue] = useState("");

  
  const dispatch = useDispatch();
  return (
    <div className="Footer">
      <button
        onClick={() => {
          dispatch(push());
        }}
      >
        New Message from friends
      </button>
      <form className="Footer__input">
        <input
          type="text"
          id="inpt"
          onChange={(e) => setInptValue(e.target.value)}
        />
        <button
          type="reset"
          onClick={() => {
            if (inptValue.length >= 1) {
              document.querySelector("#errs").innerHTML = "";
              IamMan.mytext = inptValue;
              setInptValue("");
              return dispatch(pushme());
            } else {
              document.querySelector("#errs").innerHTML =
                "write something to your friends";
            }
          }}
        >
          send
        </button>
        {inptValue.length < 1 ? (
          <img src={manI} alt="i'm" />
        ) : (
          <div className="myIcon">
            <img src={manI} alt="i'm" />
            <div className="whiteBl"></div>
          </div>
        )}
        <p id="errs"></p>
      </form>
    </div>
  );
}
