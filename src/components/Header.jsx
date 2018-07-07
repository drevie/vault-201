import React from 'react';
import { Avatar, AppBar, Toolbar, Drawer, Button, IconButton, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
    }
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
                });
                break;
            case '/inquiry':
                this.setState({
                    renderHome: false,
                    renderInquiry: true,
                    renderAppDrawer: false,
                });
                break;
        }
    }

    renderRedirect = () => {
        if (this.state.renderHome) {
            return <Redirect to="/" />
        } else if (this.state.renderInquiry) {
            return <Redirect to="/inquiry" />
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
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon onClick={() => {
                                this.setState({
                                    renderAppDrawer: true,
                                });
                            }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {this.renderDrawer()}



                <div className="flex-row avatar-row">
                    <Avatar src={logo} className={this.props.classes.avatar} />
                </div>
                <div className="flex-row">
                    <h3>Daniel Revie</h3>
                </div>
                <ContactLinks />
                {this.renderRedirect()}
            </div>
        )
    }
}

export default withStyles(styles)(Header);
