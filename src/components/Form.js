import React, {useState} from 'react'

export default function Form(props) {
    const Uppercase = ()=>{
        let newtext=text1.toUpperCase();
        settext(newtext)
        props.showalert("Text Converted to Uppercase", "success");
    }
    const lowercase = ()=>{
        let newtext=text1.toLowerCase();
        settext(newtext)
        props.showalert("Text Converted to Lowercase", "success");
    }
    let clear = ()=>{
        settext1('')
        props.showalert("Text has been Cleared", "success");
    }
    let clear1 = ()=>{
        settext('')
        props.showalert("Output has been Cleared", "success");
    }
    const handleCopy=() => {
        if (navigator.clipboard === undefined) {
            alert("Sorry this Button is under Devlopment ")
        }
        else { 
            navigator.clipboard.writeText(text);
           
            props.showalert("Text Copied to Clipboard", "success");
            
        }
        
      }
        
    const space = () => {
        let newtext = text1.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showalert("Extra Spacess has Removed", "success");

    }
    const onchange = (event)=>{
        settext1(event.target.value);
    }
    const [text, settext] = useState("");
    const [text1, settext1] = useState("");
    return (
        <>
        <div className='container-sm my-3'>
            <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
              <div className="form-group mt-2">
                <textarea className="form-control" value={text1} onChange={onchange} style={{background:props.mode==='light'?'white':'#080a23' , color: props.mode==='dark'?'white':'black' }} id="myBox" rows="5"></textarea>
            </div>
            <button disabled={text1.length===0} className='ilu' onClick={Uppercase}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Convert Text to Uppercase
            </button>
            <button disabled={text1.length===0} className='ilu' onClick={lowercase}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Convert Text to Lowercase
            </button>
            <button disabled={text1.length===0} className='ilu' onClick={space}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Remove extra Spacess
            </button>
            <button disabled={text1.length===0} className='ilu' onClick={clear}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Clear Text
            </button>
        </div>
        <div className='container-sm my-3'>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading2}</h2>
            <div className="form-group mt-2">
                <textarea className="form-control" value = {text} style={{background:props.mode==='light'?'white':'#080a23' , color: props.mode==='dark'?'white':'black',}} id="myBox1" rows="5"></textarea>
                <button style={{float:'right'}} disabled={text.length===0} className='ilut' onClick={handleCopy}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                CopyText
            </button>
            <button style={{float:'right', display:'none'}} disabled={text.length===0} className='ilut' onClick={clear1}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Clear
            </button>
            </div>        
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text1.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text1.length} characters</p>
            <p>{0.008*text1.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text1.length>0?text1:':)'}</p>
        </div>
        </>
    )
}

