import React, {Component} from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  Jumbotron,
  Button, 
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import AdvancedOptions from '../advancedOptions/advancedOptions.js'
var rp = require("request-promise")

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.callBackOptions = this.callBackOptions.bind(this)
    this.state = {
      collapse: false,
      hasText: false,
      searchText: "",
      options: ""
    }
  }
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  handleTyping = (event) => {
    const newSearchText = event.target.value
    this.setState({
      searchText: newSearchText,
      hasText: newSearchText.length > 0
    })
  }
  handleButton = async () => {
    const url = "http://localhost:8675/?term=" + this.state.searchText + this.state.options
    const options = {
        url: url,
        json: true
    }
    this.props.loadingCallback(true)
    let data
    await rp(options)
      .then(function(body) {
        data = body
      })
      .catch(function(err){
        console.log(err)
      })
    this.props.dataCallback(data)
    this.props.loadingCallback(false)
  }
  callBackOptions = (newOptions) => {
    this.setState({
      options: newOptions
    })
  }

  render() {
    return(
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h1>myTunes</h1>
              <Row style={{marginBottom: "1em"}}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search</InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    placeholder="Start typing ..." 
                    value={this.state.searchText} 
                    onChange={this.handleTyping}/>
                  <Button 
                    color="secondary" 
                    size="large" 
                    disabled={!this.state.hasText} 
                    onClick={this.handleButton}>
                    >
                  </Button>
                </InputGroup>
              </Row>
              <Row>
                <h5>Advanced Search</h5>
                <Button color="info" onClick={this.toggle} style={{margin : "0 0 1em 1em"}}>{(!this.state.collapse) ? "▼" : "▲"}</Button>
              </Row>
              <Row>
                <Collapse isOpen={this.state.collapse}>
                  <AdvancedOptions optionsCallback={this.callBackOptions}/>
                </Collapse>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      )
    }
}
export default Header;