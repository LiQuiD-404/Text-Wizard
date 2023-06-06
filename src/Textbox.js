

import React, { useState } from 'react';

export default function Textbox() {
    const remove_extraspace = () => {
        let newstr = "";
        newstr = text.trim();
        newstr = newstr.replace(/\s+/g, ' ');
        setText(newstr)
        document.getElementById('textbox').value = newstr
    }
    function uppercase() {
        if (text !== "Enter a sentence or multiple paragraphs...") {
            let newtext = text.toUpperCase();
            setText(newtext)
            document.getElementById('textbox').value = newtext
        }
    }
    function lowercase() {
        if (text !== "Enter a sentence or multiple paragraphs...") {
            let newtext = text.toLowerCase();
            setText(newtext)
            document.getElementById('textbox').value = newtext
        }
    }
    function clear() {
        document.getElementById('textbox').value = ""
        setText('')
        document.getElementById('textbox').placeholder = "Enter a sentence or multiple paragraphs..."

    }

    function copy() {
        const copyText = document.getElementById('textbox')
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

    }

    function togglecase() {
        let copyText = document.getElementById('textbox').value
        let togstr = ""
        for (let i = 0; i < copyText.length; i++) {
            let temp = copyText.charAt(i)
            if (temp === temp.toUpperCase()) {
                togstr = togstr.concat(temp.toLowerCase())
            }
            else {
                togstr = togstr.concat(temp.toUpperCase())
            }
        }
        setText(togstr)
        document.getElementById('textbox').value = togstr

    }
    function capitalize() {
        const sentences = text.split(/(?<=\.|\?|\!)\s*/);
        const capitalizedSentences = sentences.map((sentence) => {
            sentence = sentence.trim();

            if (sentence.length > 0) {
                const firstChar = sentence.charAt(0).toUpperCase();
                sentence = firstChar + sentence.slice(1);
            }

            return sentence;
        });

        const capitalizedParagraph = capitalizedSentences.join(' ');
        setText(capitalizedParagraph);
        document.getElementById('textbox').value = capitalizedParagraph

    }

    function updatetext(event) {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>

            <div className="container">
                <div class="input-group">
                    <span class="input-group-text" id='textbox-heading'>TextBox </span>
                    <textarea id='textbox' className="form-control" aria-label="With textarea" onChange={updatetext} placeholder="Enter a sentence or multiple paragraphs..." rows={4}></textarea>
                </div>
                <br />
                <div className="container d-grid gap-2 d-flex flex-wrap justify-content-sm-center">
                    <button class="btn btn-primary px-4 gap-3" id='uppr_btn' type="submit" onClick={uppercase}>Convert to UpperCase </button>
                    <button class="btn btn-primary px-4 gap-3" id='lwr_btn' type="submit" onClick={lowercase}>Convert to LowerCase</button>
                    <button class="btn btn-primary px-4 gap-3" id='tgl_btn' type="submit" onClick={togglecase}>ToggleCase</button>
                    <button class="btn btn-primary px-4 gap-3" id='spc_btn' type="submit" onClick={remove_extraspace}>Remove Extra Spaces</button>
                    <button class="btn btn-primary px-4 gap-3" id='cap_btn' type="submit" onClick={capitalize}>Auto Capitalize</button>
                    <button class="btn btn-success px-4 gap-3" id='cpy_btn' type="submit" onClick={copy}>Copy to Clipboard</button>
                    <button class="btn btn-secondary px-4 gap-3" id='clr_btn' type="submit" onClick={clear}>Clear Textbox</button>
                </div>

            </div>
            <div className="container">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-2 mb-4 ">
                Text contains : {text.length > 0 ? text.split(/\b\w+\b/g).length - 1 : 0} words and {text.length} characters. <br />
                {text.length > 0 ? (0.003 * text.split(/\b\w+\b/g).length).toPrecision(3) : "0.000"} Minutes read.
            </div>
            
                <h3>Preview of last entered text :</h3>
                <p id='preview'>{text.length > 0 ? text : "Enter text to preview here..."}</p>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}
