import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {addPrompt} from '../actions/addPrompt';

class PromptInput extends Component {

    state = {
        desc: ''
        // controllable: false
    }

    handleOnChange = event => {
        this.setState({
            desc: event.target.value
        })
    }

    handleChecked = () => {        
        this.setState({
            controllable: !this.state.controllable
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addPrompt(this.state, this.props.mood.id)
        this.setState({
            // mood: '',
            desc: ''
        })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <Form onSubmit={event => this.handleOnSubmit(event)}>
                    <Form.Label>Describe what prompted this mood:</Form.Label>
                    <Form.Control onChange={event => this.handleOnChange(event)} name='desc' type='text' value={this.state.desc}></Form.Control>
                    <Form.Label>Is this within my control?</Form.Label>
                    <Form.Check label='Yes' type='radio' name='controllable' />
                    <Form.Check label='No' type='radio' name='controllable' />
                    {/* <Form.Control onChange={this.handleChecked} type='checkbox'></Form.Control> */}
                    <br/>
                    <Button type='submit' size='sm'>Submit</Button>
                </Form>
                <br/>
            </div>
        );
    }
}

export default connect(null, {addPrompt})(PromptInput);