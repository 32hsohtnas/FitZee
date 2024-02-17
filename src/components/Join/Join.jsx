import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
function Join() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kjugkmp", "template_wbwcq9q", form.current, {
        publicKey: "dUbkyZ5xdzzfvm_mN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div className="join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text">ready to</span>
            <span>level up</span>
          </div>
          <div>
            <span>your body</span>
            <span className="stroke-text">with us?</span>
          </div>
        </div>
        <div className="right-j">
          <form onSubmit={sendEmail} ref={form} className="email-container">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              id=""
            />
            <button className="btn btn-join">Join now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
