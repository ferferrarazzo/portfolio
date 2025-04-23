import React, {useContext} from "react";
import "./Greeting.scss";
import emoji from "react-easy-emoji";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import FadeIn from "../../components/fadeIn/FadeIn";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <FadeIn yOffset={40} duration={1}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    target= "_blank"
                    className="resume-button"
                    href={greeting.resumeLink}
                    rel="noopener noreferrer"
                    text="Download my resume"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img src={require("../../assets/images/profilePicture.png") }alt="profile" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
