import React from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '../../node_modules/@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { sendEmail } from '../services/emailService';
import { Redirect } from 'react-router-dom'

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
        this.state = { name: '', email: '', inquiry: '', phone: '' }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        }, console.log(this.state));
    };


    renderSuccessDialog = () => (
        <Dialog
            onClose={() => null}
            open={this.state.openSuccessDialog}
        >
            <DialogTitle id="Contact Success Title">Thanks for getting in touch!</DialogTitle>
            <DialogContent>
                <DialogContentText>I will respond as soon as humanly possible :D.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    this.setState({
                        openSuccessDialog: false,
                        renderHome: true,
                    })
                }}>Home</Button>
                <Button onClick={() => {
                    this.setState({
                        openSuccessDialog: false,
                    })
                }}>Close</Button>
            </DialogActions>
        </Dialog>
    );

    renderForm = () => (
        <div>
            <div>
                <h2 style={{ display: 'flex', justifyContent: 'center', }}>Contact</h2>
            </div>
            <form className="contact-form-container" noValidate autoComplete="off">
                <div className="contact-form-row">
                    <TextField
                        required
                        id="name"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        className={this.props.classes.textField}
                    />
                    <TextField
                        required
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
                        error={this.isPhoneInValid()}
                    />
                </div>
                <div className="contact-form-row">
                    <TextField
                        required
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
                    <Button
                        variant="extendedFab"
                        color="primary"
                        className={this.props.classes.button}
                        onClick={() => {
                            sendEmail({ email: this.state.email, name: this.state.name, inquiry: this.state.inquiry, phone: this.state.name })
                            this.setState({
                                email: '',
                                name: '',
                                inquiry: '',
                                phone: '',
                                openSuccessDialog: true,
                            }, console.log(this.state))
                        }}
                        disabled={!this.isFormComplete()}
                    >
                        <SendIcon className={this.props.classes.extendedIcon} />
                        Send
                        </Button>
                </div>
            </form>
        </div>
    );

    renderRedirect = () => {
        if (this.state.renderHome) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div>
                {this.renderForm()}
                {this.renderSuccessDialog()}
                {this.renderRedirect()}
            </div>
        );
    }

    isFormComplete = () => this.state.email && this.state.name && this.state.inquiry && !this.isPhoneInValid();

    isPhoneInValid = () => {
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if (this.state.phone && this.state.phone.match(re)) {
            return false;
        } else if (this.state.phone && !this.state.phone.match(re)) {
            return true;
        } else {
            return false;
        }

    }
}

export default withStyles(styles)(ContactForm);
