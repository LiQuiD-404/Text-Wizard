import React, { useState } from 'react'


export default function Navbar() {
    const [light,dark] = useState("light");
    const [lightmode,darkmode] = useState("Dark Mode");
    const [light_lime,lime] = useState("light");
    const [light_lime_mode,limemode] = useState("Lime Mode");
    const [light_cherry,cherry] = useState("light");
    const [light_cherry_mode,cherrymode] = useState("Cherry Mode");

    const setDarkmode = () => {
        if(light == "light"){
            dark("dark")
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#BB86FC";
            document.getElementById('title-hero').style.color = "#FFFFFF"
            document.getElementById('textbox').style.backgroundColor = "#121212"    
            document.getElementById('textbox-heading').style.backgroundColor = "#0d0c0c"
            document.getElementById('textbox-heading').style.color = "#FFFFFF"
            document.getElementById('textbox').style.color = "#FFFFFF"
            darkmode("Light Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#121212'
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#121212'
            document.getElementById('clr_btn').style.backgroundColor = '#121212'
        }
        else{
            dark("light")
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            document.getElementById('title-hero').style.color = "#000000"
            document.getElementById('textbox').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox-heading').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox-heading').style.color = "#000000"
            document.getElementById('textbox').style.color = "#000000"
            darkmode("Dark Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#0c6df5'
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#13ba55'
            document.getElementById('clr_btn').style.backgroundColor = '#7c8184'
        }
    }
    const setLimetheme = () => {
        if(light_lime == "light"){
            lime("lime")
            dark("dark")
            document.body.style.backgroundColor = "#B9EDDD";
            document.body.style.color = "#577D86";
            document.getElementById('title-hero').style.color = "#569DAA"
            document.getElementById('textbox').style.backgroundColor = "#87CBB9"
            document.getElementById('textbox-heading').style.backgroundColor = "#87CBB9"
            document.getElementById('textbox').style.color = "#577D86"
            limemode("Light Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#569DAA' 
                document.getElementsByClassName('blue_btn')[i].style.borderColor = '#577D86' 
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#569DAA'
            document.getElementById('cpy_btn').style.borderColor = '#577D86'
            document.getElementById('clr_btn').style.backgroundColor = '#569DAA'
            document.getElementById('clr_btn').style.borderColor = '#577D86'
        }
        else{
            lime("light")
            dark("light")
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            document.getElementById('title-hero').style.color = "#000000"
            document.getElementById('textbox').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox-heading').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox').style.color = "#000000"
            limemode("Lime Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#0c6df5' 
                document.getElementsByClassName('blue_btn')[i].style.borderColor = '#0c6df5' 
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#13ba55'
            document.getElementById('cpy_btn').style.borderColor = '#13ba55'
            document.getElementById('clr_btn').style.backgroundColor = '#7c8184'
            document.getElementById('clr_btn').style.borderColor = '#7c8184'
        }
    }
    const setcherrytheme = () => {
        if(light_cherry == "light"){
            cherry("cherry")
            document.body.style.backgroundColor = "#F9F5F6";
            document.body.style.color = "#eba4be";
            document.getElementById('title-hero').style.color = "#f29dbc"
            document.getElementById('textbox').style.backgroundColor = "#F8E8EE"
            document.getElementById('textbox-heading').style.backgroundColor = "#F8E8EE"
            document.getElementById('textbox').style.color = "#eba4be"
            cherrymode("Light Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#F2BED1' 
                document.getElementsByClassName('blue_btn')[i].style.borderColor = '#F2BED1' 
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#F2BED1'
            document.getElementById('cpy_btn').style.borderColor = '#F2BED1'
            document.getElementById('clr_btn').style.backgroundColor = '#F2BED1'
            document.getElementById('clr_btn').style.borderColor = '#F2BED1'
        }
        else{
            cherry("light")
            document.body.style.backgroundColor = "#FFFFFF";
            document.body.style.color = "#000000";
            document.getElementById('title-hero').style.color = "#000000"
            document.getElementById('textbox').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox-heading').style.backgroundColor = "#FFFFFF"
            document.getElementById('textbox').style.color = "#000000"
            cherrymode("Cherry Mode")
            for(let i=0;i<7;i++){
                document.getElementsByClassName('blue_btn')[i].style.backgroundColor = '#0c6df5' 
                document.getElementsByClassName('blue_btn')[i].style.borderColor = '#0c6df5' 
            }
            document.getElementById('cpy_btn').style.backgroundColor = '#13ba55'
            document.getElementById('cpy_btn').style.borderColor = '#13ba55'
            document.getElementById('clr_btn').style.backgroundColor = '#7c8184'
            document.getElementById('clr_btn').style.borderColor = '#7c8184'
        }
    }
    
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={light}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Text Wizard 🔮</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Meet the developer ⚙️</a>
                        </li>
                    </ul>
                    <div class="d-flex mx-2 gap-3">
                        <button class="btn btn-outline-success" onClick={setDarkmode}>{lightmode}</button>
                        <button class="btn btn-outline-success" onClick={setLimetheme}>{light_lime_mode}</button>
                        <button class="btn btn-outline-success" onClick={setcherrytheme}>{light_cherry_mode}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
