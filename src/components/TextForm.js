import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCLearText = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'White', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-primary mx-2 mt-2" onClick={handleCLearText}>
                Clear Text
            </button>
        </div>
        <div className="conatiner my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview..."}</p>
        </div>
    </>
  )
}
