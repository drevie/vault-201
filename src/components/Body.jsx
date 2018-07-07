import React from 'react';
import { Typography } from '@material-ui/core';
import BioCardList from './BioCardList';
import MySolutions from './MySolutionsList';
import * as text from '../static/text';

class Body extends React.Component {
    renderAboutMe = () => (
        <div className="about-me">
            <Typography align="center" variant="headline">{'About Me'}</Typography>
            <BioCardList />
        </div>
    );

    renderMySolutions = () => (
        <div className="personal-solution">
            <Typography align="center" variant="headline">Business Solutions</Typography>
            <Typography align="left" variant="body1">{text.PERSONAL_SOLUTIONS_DETAIL}</Typography>
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
                    {this.renderMySolutions()}
                    {this.renderAboutMe()}
                    {this.renderFooter()}
                </div>
            </div>

        );
    }
}

export default Body;
