import React from "react";

export default function footer(props) {
  return (
      <>
      <hr style={{ color: props.mode === "dark" ? "white" : "black", marginTop:'100px' }}/>
    <div style={{justifyContent:'center', alignItems:'center' ,display:'flex'}}>
      <footer style={{ color: props.mode === "dark" ? "white" : "black", paddingBottom:'20px' }}>
        &copy;2021 : All Rights Reserved
       </footer>
      </div>
      </>
    
  );
}
