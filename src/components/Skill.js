import React from "react";
import PropTypes from "prop-types";
import VoteCount from "./VoteCount";

function Skill({ title, voteCount }) {
  return (
    <li>
      {title}
      <VoteCount count={voteCount} />
    </li>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
};
export default Skill;
