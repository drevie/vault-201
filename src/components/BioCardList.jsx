import React from 'react';
import { Card, Typography, IconButton, Collapse } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import DomainIcon from '@material-ui/icons/Domain';
import CardActions from '@material-ui/core/CardActions';
import obama from '../static/images/obama_rutgers.jpg';
import adpRunningTeam from '../static/images/adp.jpg'
import Button from '@material-ui/core/Button';
import * as bios from '../static/text';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import * as FontAwesome from 'react-icons/lib/fa'

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

class BioCardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderExtraSoftwareEngineerSection: false,
        }
    }
    renderEducationCard = () => (
        <Card className="card">
            <div className="card-icon">
                <SchoolIcon className="card-icon" color="secondary" />
            </div>
            <CardContent>
                <div>
                    <Typography variant="title">
                        Rutgers School of Engineering Graduate
                    </Typography>
                </div>

                <div>
                    <Typography variant="body1">
                        {bios.COLLEGE_GRADUATE_BIO}
                    </Typography>
                </div>
            </CardContent>
            <div>
                <CardMedia image={obama} title="Microservice Architecure" className={this.props.classes.media} />
            </div>
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
    )

    renderSoftwareEngineerCard = () => (
        <Card className="card">
            <div className="card-icon">
                <DomainIcon className="card-icon" color="secondary" />
            </div>
            <CardContent>
                <div>
                    <Typography variant="title">
                        Software Engineer
            </Typography>
                </div>
                <div>
                    <Typography variant="body1">
                        {bios.SOFTWARE_ENGINEER_BIO}
                    </Typography>
                </div>
            </CardContent>
            <div>
                <CardMedia image={adpRunningTeam} title="Obama's Rutgers Commencement" className={this.props.classes.media} />
            </div>
            <div>
                <CardActions>
                    <Button size="small" color="primary">
                        Site
                    </Button>
                    <Button size="small" color="primary">
                        Share
                    </Button>

                    <IconButton
                        className={classnames(this.props.classes.expand, {
                            [this.props.classes.expandOpen]: this.state.renderExtraSoftwareEngineerSection,
                        })}
                        onClick={() => {
                            this.setState({
                                renderExtraSoftwareEngineerSection: !this.state.renderExtraSoftwareEngineerSection,
                            })
                        }}
                        aria-expanded={this.state.renderExtraSoftwareEngineerSection}
                        aria-label="Show more"
                    >

                        <ExpandMoreIcon />
                    </IconButton>

                </CardActions>

                <Collapse in={this.state.renderExtraSoftwareEngineerSection} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div className="technologies-block">
                            <div className="list">
                                <Typography variant="subheading">Frameworks</Typography>
                                <Typography>React</Typography>
                                <Typography>Redux</Typography>
                                <Typography>Spring</Typography>
                                <Typography>Oracle 12c</Typography>
                            </div>
                            <div className="list">
                                <Typography variant="subheading">Languages</Typography>
                                <Typography>Java</Typography>
                                <Typography>JavaScript</Typography>
                                <Typography>TypeScript</Typography>
                                <Typography>SQL</Typography>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>


            </div>
        </Card>
    )

    renderHumanCard = () => (
        <Card className="card">

            <div className="card-icon">
                <PersonIcon className="card-icon" color="secondary" />
            </div>
            <CardContent>
                <div>
                    <Typography variant="title">
                        Human
                    </Typography>
                </div>

                <div>
                    <Typography variant="body1">
                        {bios.HUMAN_BIO}
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
                    {this.renderEducationCard()}
                </div>
                <div className="card-padding">
                    {this.renderSoftwareEngineerCard()}
                </div>
                <div className="card-padding">
                    {this.renderHumanCard()}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(BioCardList);
