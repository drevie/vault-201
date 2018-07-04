import React from 'react';

import Button from '@material-ui/core/Button';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PublicIcon from '@material-ui/icons/Public';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames'
import { Card, Typography, IconButton, Collapse } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import * as text from '../static/text';
import aws from '../static/images/aws.png';


const styles = theme => ({
  media: {
    height: 125,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class MySolutions extends React.Component {


  renderUserExperienceCard = () => (
    <Card className="card">

      <div className="card-icon">
        <CloudDoneIcon className="card-icon" color="primary" />
      </div>
      <CardContent>
        <div>
          <Typography variant="title">
            Cutting Edge Development
            </Typography>
        </div>

        <div>
          <Typography variant="body1">
            {text.CUTTING_EDGE_TECH}
          </Typography>
        </div>
      </CardContent>

      <div>
        <CardActions>
          <Button size="small" color="primary">
            Site
                    </Button>
          <Button size="small" color="primary">
            Share
                    </Button>
        </CardActions>
      </div>
    </Card>
  );

  renderCuttingEdgeCard = () => (
    <Card className="card">

      <div className="card-icon">
        <MonetizationOnIcon className="card-icon" color="primary" />
      </div>
      <CardContent>
        <div>
          <Typography variant="title">
            Cost Effective
                    </Typography>
        </div>

        <div>
          <Typography variant="body1">
            {text.COST_EFFECTIVE}
          </Typography>
        </div>
      </CardContent>

      <div>
        <CardActions>
          <Button size="small" color="primary">
            Site
                    </Button>
          <Button size="small" color="primary">
            Share
                    </Button>
        </CardActions>
      </div>
    </Card>
  );

  renderCostEffectiveCard = () => (
    <Card className="card">

      <div className="card-icon">
        <PublicIcon className="card-icon" color="primary" />
      </div>
      <CardContent>
        <div>
          <Typography variant="title">
            Global Reach
                    </Typography>
        </div>

        <div>
          <Typography variant="body1">
            {text.GLOBAL_REACH}
          </Typography>
        </div>
      </CardContent>

      <div>
        <CardActions>
          <Button size="small" color="primary">
            Site
                    </Button>
          <Button size="small" color="primary">
            Share
                    </Button>
        </CardActions>
      </div>
    </Card>
  );


  render() {
    return (
      <div className="card-container">
        <div className="card-padding">
          {this.renderUserExperienceCard()}
        </div>
        <div className="card-padding">
          {this.renderCuttingEdgeCard()}
        </div>
        <div className="card-padding">
          {this.renderCostEffectiveCard()}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MySolutions);
