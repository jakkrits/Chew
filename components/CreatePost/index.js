import React from 'react';
import PropTypes from 'prop-types';
import { Form, SubmitButton } from './styles';
import { Router } from '../../routes';
import connect from './store';

class CreateForm extends React.Component {
  static propTypes = {
    mutations: PropTypes.shape({
      createPost: PropTypes.func.isRequired
    }).isRequired
  };

  handleSubmit = e => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    let url = e.target.elements.url.value;

    if (title === '' || url === '') {
      // eslint-disable-next-line no-alert
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`;
    }

    this.props.mutations.createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';

    Router.pushRoute('/');
  };

  render() {
    console.log('ควย');
    console.log(0.1 + 0.2 === 0.30000000000000004);
    const a = parseFloat(0.1);
    const b = parseFloat(0.2);
    const c = parseFloat(0.3);
    console.log(a + b === c);
    console.log(typeof a);
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Add new post</h1>
        <input placeholder="title" name="title" />
        <input placeholder="url" name="url" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    );
  }
}

export default connect(CreateForm);
