import React from "react";
import "./GetStarted.css";
import { motion } from "framer-motion";
const GetStarted = () => {
  return (
    <div className="g-wrapper">
      <motion.div
        className="paddings innerWidth g-container"
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "ease-in" }}
        viewport={{ once: true }}
      >
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:homyz@gmail.com">Get Started</a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
