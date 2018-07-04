import React from 'react';
import { Avatar, AppBar, Toolbar, IconButton, Drawer, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../static/images/my_picture.jpg';
import { withStyles } from '@material-ui/core/styles';
import ContactLinks from './ContactLinks';

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

    renderDrawerList = () => (
        <div>
            <div>
                <Button>Contact</Button>
            </div>
            <div>
                <Button>LinkedIn</Button>
            </div>
            <div>
                <Button>GitHub</Button>
            </div>
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


    /*

                            <IconButton>
                            <MenuIcon onClick={() => {
                                this.setState({
                                    renderAppDrawer: true,
                                });
                            }} />
                        </IconButton>
    */

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>

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
            </div>
        )
    }
}

export default withStyles(styles)(Header);
