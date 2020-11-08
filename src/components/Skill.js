import React from "react";
import PropTypes from "prop-types";
import VoteCount from "./VoteCount";

function Skill({ name, voteCount }) {
  return (
    <li>
      {name}
      <VoteCount count={voteCount} />
    </li>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
};
export default Skill;
