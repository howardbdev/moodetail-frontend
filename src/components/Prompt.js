import React from 'react';
// import {Link} from 'react-router-dom';
import {Accordion, Button} from 'react-bootstrap';
import ActionsContainer from '../containers/ActionsContainer';

const Prompt = props => {

    return (
        <div>
            <Accordion defaultActiveKey>
                <Accordion.Toggle as={Button} variant='info' className='text-left'>
                    {props.prompt.desc}
                </Accordion.Toggle>

                <ActionsContainer prompt={props.prompt} />
            </Accordion>
        </div>
    );
}

export default Prompt;