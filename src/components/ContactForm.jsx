import React from 'react';
import { TextField, IconButton, Typography, Button } from '../../node_modules/@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    bigTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '', }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    renderForm() {
        return (
            <div>
                <div>
                    <h2 style={{ display: 'flex', justifyContent: 'center', }}>Contact</h2>
                </div>
                <form className="contact-form-container" noValidate autoComplete="off">
                    <div className="contact-form-row">
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            className={this.props.classes.textField}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            className={this.props.classes.textField}
                        />
                        <TextField
                            id="phone"
                            label="Phone"
                            value={this.state.phone}
                            onChange={this.handleChange('phone')}
                            margin="normal"
                            className={this.props.classes.textField}
                        />
                    </div>
                    <div className="contact-form-row">
                        <TextField
                            id="inquiry"
                            label="Inquiry"
                            value={this.state.inquiry}
                            onChange={this.handleChange('inquiry')}
                            margin="normal"
                            className={this.props.classes.bigTextField}
                            multiline={true}
                            rows={4}
                            rowsMax={10}
                        />
                    </div>
                    <div className="contact-form-row">
                        <Button variant="extendedFab" color="primary" className={this.props.classes.button}>
                            <SendIcon className={this.props.classes.extendedIcon} />
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(ContactForm);
