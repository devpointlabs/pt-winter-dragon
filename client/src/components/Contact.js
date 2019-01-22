import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, TextArea, Header, Modal, Message } from 'semantic-ui-react';

class ContactForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      // <Modal trigger={<Button>Contact Us</Button>}>
      //   <Modal.Header>Contact Golden Dragon</Modal.Header>
      //     <Modal.Description>
      //       <Header></Header>
            <Form>
              <h1>Contact Golden Dragon</h1>
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='First name' placeholder='First name' />
                <Form.Field control={Input} label='Last name' placeholder='Last name' />
                <Form.Field control={Input} label='Email' placeholder='Email' />
              </Form.Group>
              <Form.Group inline>
                <label>Reason for contacting Golden Dragon:</label>
                <Form.Field
                  control={Radio}
                  label='Venue Reservation *'
                  value='Venue Reservation'
                  checked={value === 'Venue Reservation'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label='Suggestion or Comment'
                  value='Suggestion or Comment'
                  checked={value === 'Suggestion or Comment'}
                  onChange={this.handleChange}
                />
              </Form.Group>
                <Form.Field control={TextArea}
                label='Comment'
                placeholder='Please leave your comment or venue reservation details here.'
                />
                <Form.Field control={Button}>Submit</Form.Field>
                <p>* For a venue reservation, please leave the number of people attending and the night you would like to reserve the Golden dragon.
                completing this form does not guarantee reservation</p>
            </Form>
      //     </Modal.Description>
      // </Modal>
    )
  }
}

export default ContactForm;
