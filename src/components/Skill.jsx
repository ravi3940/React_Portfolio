import React from "react";
import skills from "./data/skill.json";

const Skills = () => {
  return (
    <>
    <h2>Skill</h2>
      <div className="container skills" id="skills">
        
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;