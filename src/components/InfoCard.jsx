import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
class InfoCard extends React.Component {

    render() {
        return (
            <div className="card-padding">
                <Card className="card">
                    <div className="card-icon">
                        {this.props.icon}
                    </div>
                    <Typography variant="title">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body1">
                        {this.props.text}
                    </Typography>

                    {this.props.customBody}
                    <CardMedia image="../static/images/obama_rutgers.jpg" title="Obama" />
                </Card>
            </div>
        );
    }
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    customBody: PropTypes.element,
}

export default InfoCard;