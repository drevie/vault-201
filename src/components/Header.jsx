import React from 'react';
import { Avatar, AppBar, Toolbar, IconButton, Drawer, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../images/my_picture.JPG';
import { withStyles } from '@material-ui/core/styles';

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


    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <MenuIcon onClick={() => {
                                console.log("daniel revie");
                                this.setState({
                                    renderAppDrawer: true,
                                });
                            }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                {this.renderDrawer()}



                <header className="App-header">
                    <div className="flex-row">
                        <Avatar src={logo} className={this.props.classes.avatar} />
                    </div>
                    <div className="flex-row">
                        <h3>Daniel Revie</h3>
                    </div>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
