import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        word = word.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        props.alert && <div className="alert alert-primary" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    )
}
