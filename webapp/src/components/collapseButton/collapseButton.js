import React from 'react'
import {Button} from 'reactstrap'

function CollapseButton(props) {
  return(
    <Button color="info" onClick={props.toggle} style={{margin : "0 0 1em 1em"}}>
      {(!props.collapse) ? "▼" : "▲"}
    </Button>

  )
}

export default CollapseButton;