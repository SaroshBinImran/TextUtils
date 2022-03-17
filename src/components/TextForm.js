import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick=()=>{
      // console.log("Uppercase was clicked");
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to uppercase","success");
  }
  const copyText=()=>{
    var textN= document.getElementById("myBox");
    textN.select();
    navigator.clipboard.writeText(textN.value);
    props.showAlert("Copied to clipoard","success");
}
  const clearText=()=>{
    setText("");
  }
    const handleOnChange=(event)=>{
        // console.log("OnChange was clicked");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
      <>
    <div className="container my-3 "style={{color:props.mode==='dark'?'white':'black'}}>
    <h3 >{props.heading}</h3>
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
    <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary my-1 mx-1">Convert to upper case</button>
    <button disabled={text.length===0} onClick={handleLowClick} className="btn btn-primary my-1 mx-1">Convert to Lower case</button>
    <button disabled={text.length===0} onClick={clearText} className="btn btn-primary my-1 mx-1">Clear Text</button>
    <button disabled={text.length===0} onClick={copyText} className="btn btn-primary my-1 mx-1">Copy Text</button>
  </div>
  <div className="container pb-5" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
      <h3>Preview</h3>
      {text.length>0?text:"Enter your text in above box"}
      {/* <p>{text.length()}</p> */}
  </div>
  </>
  )
}
<p><a href="https://saroshbinimran.github.io/assignment2F/">Assignment 2 link</a></p>
