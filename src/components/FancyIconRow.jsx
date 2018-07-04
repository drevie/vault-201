import React from 'react';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PublicIcon from '@material-ui/icons/Public';

class FancyIconRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="flex-row"
      >
        <CloudDoneIcon className="item" />
        <MonetizationOnIcon className="item" />
        <PublicIcon className="item" />
      </div>
    )
  }
}

export default FancyIconRow;
