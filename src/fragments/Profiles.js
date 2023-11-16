import React from "react";
import "../layouts/icons.css";
import Icon from "../components/Icon";

const Profiles = (props) => {
  return (
    <div className={`${props.className} bottomL`}>
      <h3>{props.heading ? props.heading : "Find me on:"}</h3>
      <div className="icons">
        <Icon
          href="https://github.com/joerhoney"
          label="GitHub"
          name="GithubBadge"
        />
        <Icon
          href="https://stackoverflow.com/users/1383937/joe-rhoney"
          label="Stack Overflow"
          name="Stackoverflow"
        />
        <Icon href="https://codepen.io/joerhoney" name="Codepen" />
        <Icon href="https://www.linkedin.com/in/joerhoney/" name="Linkedin" />
      </div>
    </div>
  );
};

export default Profiles;
