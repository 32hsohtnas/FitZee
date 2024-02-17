import React from "react";
import "./Hero.css";
import Header from "./header/Header.jsx";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            className="div"
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the city</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay="4"
                preFix=" +"
              ></NumberCounter>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter
                end={978}
                start={900}
                delay="4"
                preFix=" +"
              ></NumberCounter>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={50}
                start={10}
                delay="4"
                preFix=" +"
              ></NumberCounter>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          className="heart-rate"
        >
          <img src={heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} className="hero-image" />
        <motion.img
          transition={transition}
          whileInView={{ right: "20rem" }}
          initial={{ right: "11rem" }}
          src={hero_image_back}
          className="hero-image-back"
        />
        <motion.div
          transition={transition}
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
          className="calories"
        >
          <img src={calories} />
          <div>
            <span>CaloriesBurned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
