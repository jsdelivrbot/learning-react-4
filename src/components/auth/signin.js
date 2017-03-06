import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component {

    handleFormSubmit({email, password}) {
        
    }

    render() {
        const { fields: { email, password }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />
                </fieldset>

                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'singin',
    fields: ["email", "password"]
})(SignIn);