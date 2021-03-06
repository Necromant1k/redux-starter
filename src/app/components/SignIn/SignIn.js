import React, { PureComponent } from 'react';
import { reduxForm, SubmissionError } from 'redux-form/immutable';
import { func, string } from 'prop-types';
import {connect} from 'react-redux';
import { Form } from '../../elements';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class SignIn extends PureComponent {
  static propTypes = {
    handleSubmit: func,
    error: string
  };

  static defaultProps = {
    handleSubmit: undefined,
    error: ''
  };

  onSubmit = (values) => { // eslint-disable-line
    return sleep(1000).then(() => {
      if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        throw new SubmissionError({
          username: 'User does not exist',
          _error: 'Login failed!'
        });
      } else if (values.password !== 'qwerty') {
        throw new SubmissionError({
          password: 'Wrong password',
          _error: 'Login failed!'
        });
      } else {
        console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      }
    });
  }

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h1>Sign In</h1>
        <Form.Input
          name="username"
          type="text"
          placeholder="User name"
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="password"
        />
        {error && <strong>{error}</strong>}
        <Form.Button type="submit">sign in</Form.Button>
      </form>
    );
  }
}

const mapToProps = {}; // eslint-disable-line


export default connect(() => ({}), mapToProps)(
  reduxForm({
    form: 'SignInForm',
  })(SignIn)
);
