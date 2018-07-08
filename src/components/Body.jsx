import React from 'react';
import { Typography } from '@material-ui/core';
import BioCardList from './BioCardList';
import MySolutions from './MySolutionsList';
import * as text from '../static/text';

class Body extends React.Component {
    renderAboutMe = () => (
        <div className="body-about-me">
            <Typography align="center" variant="headline">{'About Me'}</Typography>
            <BioCardList />
        </div>
    );

    renderMySolutions = () => (
        <div className="body-business-solutions">
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
                {this.renderMySolutions()}
                {this.renderAboutMe()}
                {this.renderFooter()}
            </div>
        );
    }
}

export default Body;
