import React from 'react'

function FadeBottom(props) {
  return (<span 
    style={{
      margin: "0.5em 0 0.5em 0", 
      display: "block", 
      border:"none", 
      height:"1em", 
      backgroundImage: "linear-gradient(to bottom, grey, silver)"}}/>)
}

export default FadeBottom;