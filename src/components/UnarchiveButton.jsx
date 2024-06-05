import React from 'react';
import { MdUnarchive } from 'react-icons/md'; 
import PropTypes from 'prop-types';


const UnarchiveButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="action">
      <MdUnarchive /> 
    </button>
  );
};

UnarchiveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UnarchiveButton;
