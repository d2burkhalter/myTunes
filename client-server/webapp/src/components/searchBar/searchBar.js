import React from 'react'
import {Row, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap'

function SearchBar(props) {
  return(
    <Row style={{marginBottom: "1em"}}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
        <Input 
          placeholder="Start typing ..." 
          value={props.searchText} 
          onChange={props.handleTyping}/>
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