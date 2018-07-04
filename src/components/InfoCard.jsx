import React from 'react';
import { Card, Typography } from '@material-ui/core';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    {this.props.icon}
                    <Typography>
                        {this.props.text}
                    </Typography>
                </Card>
            </div>
        );
    }
}

export default InfoCard;