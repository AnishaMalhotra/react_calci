import React from 'react';
import OutPutRow from './outputrow';
import Outputrow from './outputrow';

const Output = props => {
    return (
        <div>
            <Outputrow value={props.answer} textSize={{fontsize: '20px'}}/>
            <Outputrow value={props.user}/>
        </div>
    );
}

export default Output;
