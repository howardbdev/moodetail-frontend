import React from 'react';
// import {Switch, Route} from 'react-router-dom';
import PromptsContainer from '../containers/PromptsContainer';

const Mood = props => {
    
    const mood = props.moods[parseInt(props.match.params.id) - 1]
    // const path = props.match.url.concat('/prompts')
    // console.log(path)
    return (
        <>
            <h3>{mood ? mood.feeling : null}</h3>
            <PromptsContainer mood={mood} />
            {/* <Switch>
                <Route path={path} render={(routerProps) => <PromptsContainer {...routerProps} mood={mood} />} />
            </Switch> */}
        </>
    )
}

export default Mood;