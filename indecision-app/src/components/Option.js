import React from 'react';

const Option = (props) => {
    return (
        <div>
            <p key={props.option}>{props.optionText}</p>
            <button 
                onClick={(e) =>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    );
};

export default Option; 