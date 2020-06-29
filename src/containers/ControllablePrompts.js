import React from 'react';
import {Card} from 'react-bootstrap';
import Prompt from '../components/Prompt';

const ControllablePrompts = props => {

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title as='h4'>Within my control</Card.Title>
                    {props.prompts && props.prompts.map(prompt => 
                        <Card.Text key={prompt.id} as='span'>
                            <Prompt prompt={prompt.desc} id={prompt.id} moodID={prompt.mood_id} />
                            <br/>
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default ControllablePrompts;