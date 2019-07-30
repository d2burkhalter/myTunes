import React from "react"
import {Input} from 'reactstrap'

function OptionSelect(props) {
  return(
    <Input type="select" 
      name="select" 
      id={props.name} 
      onChange={(e) => {props.handleSelect(props.name, e)}}
      value={props.entitySelected}>
      {props.data.map(item => {
        return <option key={item+props.name} value={item}>{item}</option>
      })}
    </Input>
  )
}

export default OptionSelect;