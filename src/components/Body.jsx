import React from 'react';
import { Typography } from '@material-ui/core';
import InfoCardList from './InfoCardList';

const infoCards = [
    { icon: (<div></div>), text: "Performance" },
    { icon: (<div></div>), text: "Performance" },
    { icon: (<div></div>), text: "Performance" },
]

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex-row">
                <div className="body">
                    <Typography variant="body1" gutterBottom align="center">
                        Passionate fullstack software developer with expertise in JavaScript, Java, and Python. Extensive experience with React, Redux, Spring, Hibernate, Oracle SQL, MongoDB, Redis. I love learning new technologies, it makes my field so thoroughly enjoyable.
                    </Typography>
                    <InfoCardList cardInfo={infoCards} />
                </div>
            </div>
        );
    }
}

export default Body;
