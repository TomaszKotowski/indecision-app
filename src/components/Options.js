import React from 'react';
import Option from './Option.js'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title" >Your options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className="widget-messege">Please add an option to get stated</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />)
            )
        }
    </div>
)

export default Options;