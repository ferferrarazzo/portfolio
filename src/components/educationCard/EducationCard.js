import React, {createRef, useContext} from "react";
import {motion} from "framer-motion";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  const fadeInVariants = {
    hidden: {opacity: 0, x: -50},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 1}
    }
  };

  const slideInVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {
      opacity: 1,
      x: 0,
      transition: {duration: 2}
    }
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="education-card"
      >
        {school.logo && (
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <p
              className={`${isDark ? "dark-mode" : ""} education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
        className="education-card-border"
      ></motion.div>
    </div>
  );
}
