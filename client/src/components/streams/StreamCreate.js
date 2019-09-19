import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    // event.preventDefault gets called by redux form's handleSubmit
    // event.preventDefault();
    // console.log('formValues', formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log('this.props', this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
