import React from 'react';
import { FancyIcon } from './FancyIcon';

class FancyIconRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {
          ['fa-cog', 'fa-cap', 'fa-iron', 'fa-smart',]
            .map(icon => (<FancyIcon iconClass={icon} />))
        }
      </div>
    )
  }
}

export default FancyIconRow;
