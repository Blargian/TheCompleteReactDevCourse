import React from 'react';

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text" key={props.option}>{props.count}. {props.optionText}</p>
            <button 
                className="button button--link"
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