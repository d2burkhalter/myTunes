import React from 'react'
import {Row, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap'

function SearchBar(props) {
  return(
    <Row style={{marginBottom: "1em", boxShadow: "5px 2px 5px black"}}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
        <Input 
          placeholder="Start typing ..." 
          value={props.searchText} 
          onChange={props.handleTyping}
          onKeyPress={(e)=> {
            if(e.key === "Enter") {
              props.handleButton()
          }}}
          />
        <Button 
          color="secondary" 
          size="large" 
          disabled={!props.hasText} 
          onClick={props.handleButton}>
          >
        </Button>
      </InputGroup>
  </Row>
  )
}

export default SearchBar