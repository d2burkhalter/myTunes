import React from 'react'
import FadeBottom from '../fadeBottom/fadeBottom';

const Panel = props  => {
  return(
    <div>
      <div style={{width: "90%", margin: "auto"}}>
      {props.children}
      </div>
      <FadeBottom/>
    </div>
  )
}

export default Panel;