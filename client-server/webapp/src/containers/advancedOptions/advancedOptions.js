import React, {Component} from 'react'
import {Col, Row ,Form, Label, FormGroup} from 'reactstrap'
import staticData from "./apiData.json"
import OptionSelect from '../../components/optionSelect/optionSelect.js';

class AdvancedOptions extends Component {

  constructor(props) {
    super(props)
    this.handleSelected = this.handleSelected.bind(this)

    this.state = {
      mediaSelected : "all",
      entitySelected : "-",
      attributeSelected: "-",
      limitSelected: "-"
    }
  }

  handleSelected = (key, event) => {
    if(key === "mediaSelected") {
      this.setState({
        mediaSelected: event.target.value,
        entitySelected: "-",
        attributeSelected: "-",
        limitSelected: "-"
      }, this.handleOptionsChange)
    } else {
      this.setState({
        [key] : event.target.value
      }, this.handleOptionsChange)
    }
  }

  handleOptionsChange = () => {
    let searchOptions = "&media=";
    searchOptions+=this.state.mediaSelected
    if(this.state.entitySelected !== "-") searchOptions+="&entity="+this.state.entitySelected
    if(this.state.attributeSelected !== "-") searchOptions+="&attribute="+this.state.attributeSelected
    if(this.state.limitSelected !== "-") searchOptions+="&limit="+this.state.limitSelected
    this.props.optionsCallback(searchOptions)
  }

  render() {
    return (
      <Form>
        <Row form>
          <Col xs={{ size: 'auto', offset: 0 }}>
            <FormGroup>
              <Label for="mediaSelected">Media Type</Label>
              <OptionSelect name="mediaSelected" 
                handleSelect={this.handleSelected} 
                value={this.state.mediaSelected} 
                data={staticData["media"]}/>
            </FormGroup>
          </Col>
          <Col xs={{ size: 'auto', offset: 0 }}>
            <FormGroup>
              <Label for="entitySelected">Entity</Label>
              <OptionSelect name="entitySelected" 
                handleSelect={this.handleSelected} 
                value={this.state.entitySelected} 
                data={staticData["entity"][this.state.mediaSelected]}/>
            </FormGroup>
          </Col>
          <Col xs={{ size: 'auto', offset: 0 }}>
            <FormGroup>
              <Label for="attributeSelected">Attribute</Label>
              <OptionSelect name="attributeSelected" 
                handleSelect={this.handleSelected} 
                value={this.state.attributeSelected}
                data={staticData["attribute"][this.state.mediaSelected]}/>
            </FormGroup>
          </Col>
          <Col xs={{ size: 'auto', offset: 0 }}>
            <FormGroup>
              <Label for="limitSelected">Limit</Label>
              <OptionSelect name="limitSelected" 
                handleSelect={this.handleSelected} 
                value={this.state.limitSelected} 
                data={staticData["limits"]}/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default AdvancedOptions;