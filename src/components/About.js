import React, {useState} from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })
    const[btnTxt,setBtnTxt]=useState("Enable Dark mode");

    const toggleStyle=()=>{
        console.log("reached");
        if(myStyle.color==='black')
        {
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        });
        setBtnTxt("Enable Light mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            });
            setBtnTxt("Enable Dark mode");
            }

        }
    
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#868B8E':'white',
        border:'2px solid',
        borderColor:props.mode==='dark'?'#868B8E':'white'
    }
  return (
      
      <div className="container" >
      <h3 className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>About Us</h3>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header"  id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Analyze your text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         <p>Text Utils provide you a way to analyze and manipulate your text quickly and efficiently.</p>
        </div>
      </div>
    </div>
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Free to use
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
         This application is free to use and provide functions to manipulate our text.
        </div>
      </div>
    </div>
  </div>
  


  </div>
  )
  
  }
