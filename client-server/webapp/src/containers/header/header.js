import React, {Component} from 'react';
import {
  Alert,
  Collapse,
  Container,
  Row,
  Col
} from 'reactstrap';
import AdvancedOptions from '../advancedOptions/advancedOptions.js'
import SearchBar from '../../components/searchBar/searchBar.js';
import CollapseButton from '../../components/collapseButton/collapseButton.js';
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
        <Container>
          <h1 style={{paddingBottom: "0.5em"}}>myTunes</h1>
          <Row style={{width: "90%", margin: "auto"}}>
            <Col>
              <SearchBar 
                searchText={this.state.searchText} 
                handleTyping={this.handleTyping} 
                hasText={this.state.hasText} 
                handleButton={this.handleButton}/>
                <Alert color="warning" hidden={!this.props.displayError}>No results try another search</Alert>
              <Row>
                <h5>Advanced Search</h5>
                <CollapseButton toggle={this.toggle} collapse={this.state.collapse}/>
              </Row>
              <Row>
                <Collapse isOpen={this.state.collapse}>
                  <AdvancedOptions optionsCallback={this.callBackOptions}/>
                </Collapse>
              </Row>
            </Col>
          </Row>
        </Container>
      )
    }
}
export default Header;