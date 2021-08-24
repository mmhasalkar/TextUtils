import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const onTextChange = (e) => {
        setText(e.target.value);
    }

    const onUpperCaseClick = (e) => {
        setText(text.toUpperCase());
        props.showAlert('The text is converted to upper case!', 'success');
    }
    const onLowerCaseClick = (e) => {
        setText(text.toLowerCase());
        props.showAlert('The text is converted to lower case!', 'success');

    }
    const onRemoveExtraSpacesClick = (e) => {
        setText(text.split(/[ ]+/).join(" "));
        props.showAlert('Extra spaces removed from the text.', 'success');

    }
    const onRemoveDuplicatesClick = (e) => {
        let newText = text.split(' ').filter(function(item,i,allItems){
            return i === allItems.indexOf(item);
        }).join(' ');
        
        setText(newText)
        props.showAlert('The duplicate words are removed from the text.', 'success');
    }
    const onClearClick = (e) => {
        setText('');
        props.showAlert('The text is cleared!', 'success');
    }
    
    let textAreaStyle = {}
    if (props.theme === 'dark') {
        textAreaStyle = {
            backgroundColor: 'inherit',
            color: 'white',
            border: '1px solid white'
        }
    } else {
        textAreaStyle = {
            backgroundColor: 'inherit',
            color: 'black',
            border: '1px solid black'
        }
    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onTextChange} rows="14" style={textAreaStyle}></textarea>
                </div>
                <button className={`btn btn-${props.theme} mx-1`} onClick={onUpperCaseClick}>Convert To Uppper Case</button>
                <button className={`btn btn-${props.theme} mx-1`} onClick={onLowerCaseClick}>Convert To Lower Case</button>
                <button className={`btn btn-${props.theme} mx-1`} onClick={onRemoveDuplicatesClick}>Remove Duplicates</button>
                <button className={`btn btn-${props.theme} mx-1`} onClick={onRemoveExtraSpacesClick}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.theme} mx-1`} onClick={onClearClick}>Clear</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter(w => w).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter some above text to preview it here!'}</p>
            </div>
        </>
    )
}
