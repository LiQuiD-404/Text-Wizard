
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
        navigator.clipboard.writeText(text);
        console.log(text)

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

    async function txttospeech() {
        // const url = 'https://voicerss-text-to-speech.p.rapidapi.com/?key=c8b196aaa9af45078134f6aea0e85a3e';
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'X-RapidAPI-Key': 'ff1a9da668msh796ad6921c2f3e3p119019jsn5cd9f7758a9a',
        //         'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
        //     },
        //     body: new URLSearchParams({
        //         src: 'Hello World',
        //         hl: 'en-us',
        //         r: '0',
        //         c: 'mp3',
        //         f: '8khz_8bit_mono'
        //     })
        // };

        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
        if (text === "") {
            alert("Enter some text for wizardry to begin...")
        }
        else {
            const url_speech = `http://api.voicerss.org/?key=c8b196aaa9af45078134f6aea0e85a3e&hl=en-us&v=Mary&c=MP3&f=16khz_16bit_stereo&src=${text}`;
            window.open(url_speech)
        }

    }

    async function translate(language) {
        if (text === "") {
            alert("Enter some text for wizardry to begin...")
        }
        else{
            const url = `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7C${language}&q=${text}!&mt=1&onlyprivate=0&de=a%40b.c`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ff1a9da668msh796ad6921c2f3e3p119019jsn5cd9f7758a9a',
                    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setText(result.responseData.translatedText);
            } catch (error) {
                console.error(error);
            }
        }
    }


    const [text, setText] = useState("");
    return (
        <>

            <div className="container">
                <div className="input-group">
                    <span className="input-group-text" id='textbox-heading'>TextBox </span>
                    <textarea id='textbox' className="form-control" aria-label="With textarea" onChange={updatetext} placeholder="Enter a sentence or multiple paragraphs..." rows={4}></textarea>
                </div>
                <br />
                <div className="container d-grid gap-2 d-flex flex-wrap justify-content-sm-center">
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={uppercase}>Convert to UpperCase </button>
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={lowercase}>Convert to LowerCase</button>
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={togglecase}>ToggleCase</button>
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={remove_extraspace}>Remove Extra Spaces</button>
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={capitalize}>Auto Capitalize</button>
                    <button className="btn btn-primary px-4 gap-3 blue_btn" type="submit" onClick={txttospeech}>Text To Speech</button>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle blue_btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Translate Text
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button type="button" class="dropdown-item" onClick={() => translate('es')}>Translate to Spanish</button></li>
                            <li><button type="button" class="dropdown-item" onClick={() => translate('fr')}>Translate to French</button></li>
                            <li><button type="button" class="dropdown-item" onClick={() => translate('hi')}>Translate to Hindi</button></li>
                            <li><button type="button" class="dropdown-item" onClick={() => translate('it')}>Translate to Italian</button></li>
                            <li><button type="button" class="dropdown-item" onClick={() => translate('ja')}>Translate to Japanese</button></li>
                            <li><button type="button" class="dropdown-item" onClick={() => translate('en')}>Translate to English</button></li>
                        </ul>
                    </div>
                    <button className="btn btn-success px-4 gap-3" id='cpy_btn' type="submit" onClick={copy}>Copy to Clipboard</button>
                    <button className="btn btn-secondary px-4 gap-3" id='clr_btn' type="submit" onClick={clear}>Clear Textbox</button>
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
