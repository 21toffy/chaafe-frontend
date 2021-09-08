import React from 'react'

const MessageBox = (props) => {
    console.log(props.variant)
    return (
        <div className={`alert alert-${props.variant} || info`}>
            {props.children}
        </div>
    )
}

export default MessageBox
