import React from 'react';
import { Avatar, AppBar, Toolbar, Drawer, Button, IconButton, } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import logo from '../static/images/my_picture.jpg';
import { withStyles } from '@material-ui/core/styles';
import ContactLinks from './ContactLinks';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const styles = {
    avatar: {
        width: 120,
        height: 120,
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { renderAppDrawer: false, }
    }

    redirect = (route) => {
        switch (route) {
            case '/':
                this.setState({
                    renderHome: true,
                    renderInquiry: false,
                    renderAppDrawer: false,
                    renderResume: false,
                });
                break;
            case '/inquiry':
                this.setState({
                    renderHome: false,
                    renderInquiry: true,
                    renderAppDrawer: false,
                    renderResume: false,
                });
                break;

            case '/resume':
                this.setState({
                    renderHome: false,
                    renderAppDrawer: false,
                    renderInquiry: false,
                    renderResume: true,
                });
                break;
            default:
                break;
        }
    }

    renderRedirect = () => {
        if (this.state.renderHome) {
            return (<Redirect to="/" />);
        } else if (this.state.renderInquiry) {
            return (<Redirect to="/inquiry" />);
        } else if (this.state.renderResume) {
            return (<Redirect to="/resume" />);
        }
    }

    renderDrawerList = () => (
        <div>
            <IconButton>
                <HomeIcon onClick={() => {
                    this.redirect('/')
                }} />
            </IconButton>
            <IconButton>
                <PhoneIcon onClick={() => {
                    this.redirect('/inquiry')
                }} />
            </IconButton>
            <Link to="inquiry">Inquiry</Link>
        </div>
    );

    renderDrawer = () => (
        <div>
            <Drawer
                anchor="left"
                open={this.state.renderAppDrawer}
                onClose={() => {
                    this.setState({
                        renderAppDrawer: false,
                    });
                }}
            >
                {this.renderDrawerList()}

            </Drawer>
        </div>
    );

    render() {
        return (
            <div className={`${this.props.classes.root}`}>
                <AppBar position="static">

                    <Toolbar className="toolbar">
                        {/*
                            <IconButton color="inherit" aria-label="Menu" className={this.props.classes.menuButton}>
                                <MenuIcon onClick={() => {
                                    this.setState({
                                        renderAppDrawer: true,
                                    });
                                }} />
                            </IconButton>
                        */
                        }
                        <div>
                            <Button color="inherit" onClick={() => { this.redirect('/'); }}>Home</Button>
                            <Button color="inherit" onClick={() => { this.redirect('/inquiry'); }}>Contact</Button>
                            <Button color="inherit" onClick={() => { this.redirect('/resume'); }}>Resume</Button>
                        </div>
                    </Toolbar>

                </AppBar>

                {this.renderDrawer()}


                <div className="profile-container">
                    <div className="flex-row avatar-row">
                        <Avatar src={logo} className={this.props.classes.avatar} />
                    </div>
                    <div className="flex-row">
                        <h3>Daniel Revie</h3>
                    </div>
                    <ContactLinks />
                    {this.renderRedirect()}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
