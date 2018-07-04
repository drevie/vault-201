import React from 'react';
import { Typography } from '@material-ui/core';
import BioCardList from './BioCardList';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PublicIcon from '@material-ui/icons/Public';
import MySolutions from './MySolutionsList';

const personalSolutionCards = [
    {
        icon: (<CloudDoneIcon className="card-icon" color="primary" />),
        title: "AWS Cloud Hosted",
        text: "Leveraging the latest in web technolgies"
    },
    {
        icon: (<MonetizationOnIcon className="card-icon" color="primary" />),
        title: "Cost Efficient",
        text: "Competetive pricing"
    },
    {
        icon: (<PublicIcon className="card-icon" color="primary" />),
        title: "Global React",
        text: "Expand the reach of your business"
    },
]

class Body extends React.Component {
    renderAboutMe = () => (
        <div className="about-me">
            <Typography align="center" variant="headline">{'About Me'}</Typography>
            <BioCardList />
        </div>
    );

    renderMySolutions = () => (
        <div className="personal-solution">
            <Typography align="center" variant="headline">Personal Solutions</Typography>
            <MySolutions />
        </div>
    );

    renderFooter = () => (
        <div className="footer">

        </div>
    );



    render() {
        return (
            <div className="body-container">
                <div className="body">
                    {this.renderAboutMe()}
                    {this.renderMySolutions()}
                    {this.renderFooter()}
                </div>
            </div>

        );
    }
}

export default Body;
