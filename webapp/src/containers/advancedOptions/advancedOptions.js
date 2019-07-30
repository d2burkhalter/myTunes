import React, {Component} from 'react'
import {Col, Row ,Form, Input, Label, FormGroup} from 'reactstrap'
import staticData from "./apiData.json"

class AdvancedOptions extends Component {

  constructor(props) {
    super(props)
    this.handleMediaSelect.bind(this)
    this.handleEntitySelect.bind(this)
    this.handleAttributeSelect.bind(this)

    this.state = {
      mediaSelected : "all",
      entitySelected : "-",
      attributeSelected: "-"
    }
  }

  displayType = () => {
    const types = staticData["media"]
    return (
      <Input type="select" name="select" id="mediaSelector" onChange={this.handleMediaSelect}>
        {types.map(type => {
          return <option key={type} value={type}>{type}</option>
        })}
      </Input>
    )
  }

  displayEntities = () => {
    const entities = staticData["entity"][this.state.mediaSelected]
    return (
      <Input type="select" name="select" id="entitySelector" onChange={this.handleEntitySelect} value={this.state.entitySelected}>
        {entities.map(entity => {
          return <option key={entity} value={entity}>{entity}</option>
        })}
      </Input>
    )
  }

  displayTypeAttributes = () => {
    const attributes = staticData["attribute"][this.state.mediaSelected]
    return (
      <Input type="select" name="select" id="attributeSelector" onChange={this.handleAttributeSelect} value={this.state.attributeSelected}>
        {attributes.map(attribute => {
          return <option key={attribute} value={attribute}>{attribute}</option>
        })}
      </Input>
    )
  }

  handleMediaSelect = (event) => {
    this.setState({
      mediaSelected: event.target.value,
      entitySelected: "-",
      attributeSelected: "-"
    }, this.handleOptionsChange)
  }

  handleEntitySelect = (event) => {
    this.setState({
      entitySelected: event.target.value
    }, this.handleOptionsChange)
  }

  handleAttributeSelect = (event) => {
    this.setState({
      attributeSelected: event.target.value
    }, this.handleOptionsChange)
  }

  handleOptionsChange = () => {
    let searchOptions = "&media=";
    searchOptions+=this.state.mediaSelected
    if(this.state.entitySelected !== "-") searchOptions+="&entity="+this.state.entitySelected
    if(this.state.attributeSelected !== "-") searchOptions+="&attribute="+this.state.attributeSelected
    this.props.optionsCallback(searchOptions)
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="mediaSelector">Media Type</Label>
              {this.displayType()}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="entitySelector">Entity</Label>
              {this.displayEntities()}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="attributeSelector">Attribute</Label>
              {this.displayTypeAttributes()}
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default AdvancedOptions;