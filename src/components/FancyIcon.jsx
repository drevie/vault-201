import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a fancy icon :)
 * @param {string} iconClass
 */
const FancyIcon = ({ iconClass }) => (
  <div>
    <i className={iconClass}>
      wtf mate
      </i>
  </div>
);

FancyIcon.propTypes = {
  iconClass: PropTypes..isRequired,
};

export default FancyIcon;
