import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpclick = () => {
        console.log("Uppercase is cliked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into uppercase", "success");
    }
    const handleLoclick = () => {
        console.log("Uppercase is cliked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into lowercase", "success");

    }
    const handleclearclick = () => {
        console.log("Uppercase is cliked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");

    }

    const handlecopy = () => {
        let text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");


    }
    const handleextraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces is removed succesfully", "success");


    }


    const handleOnchange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#07021e' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? '#023db6' : 'white', color: props.mode === 'dark' ? 'white' : '#07021e' }} id="Mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleUpclick} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLoclick} >Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleclearclick} >Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handlecopy} >Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleextraspace} >RemoveExtraSpace</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#07021e' }}  >
                <h2>Text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} chracters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter to preview"}</p>
            </div>
        </>
    )
}

