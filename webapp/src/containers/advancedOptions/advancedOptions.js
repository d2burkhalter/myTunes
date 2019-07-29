import React, {Component} from 'react'
import {Form, Input, Label, FormGroup} from 'reactstrap'
import staticData from "./apiData.json"

class AdvancedOptions extends Component {

    constructor(props) {
        super(props)

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
            <Input type="select" name="select" id="entitySelector" onChange={this.handleSelect}>
                {entities.map(entity => {
                    return <option key={entity} value={"entitySelected "+entity}>{entity}</option>
                })}
            </Input>
        )
    }

    displayTypeAttributes = () => {
        const attributes = staticData["attribute"][this.state.mediaSelected]
        return (
            <Input type="select" name="select" id="attributeSelector" onChange={this.handleSelect}>
                {attributes.map(attribute => {
                    return <option key={attribute} value={"attributeSelected "+attribute}>{attribute}</option>
                })}
            </Input>
        )
    }

    handleMediaSelect = (event) => {
        this.setState({
            mediaSelected: event.target.value,
            entitySelected: "-",
            attributeSelected: "-"
        }, this.handleOptionsChange())
    }

    handleSelect = (event) => {
        const stringArray = event.target.value.split(" ")
        const key = stringArray[0]
        const value = stringArray[1]
        console.log(stringArray)
        this.setState({
            [key]: value
        }, this.handleOptionsChange())
    }

    handleOptionsChange = () => {
        let searchOptions = "&media=";
        searchOptions+=this.state.mediaSelected
        if(this.state.entitySelected !== "-") searchOptions+="&entity="+this.state.entitySelected
        if(this.state.attributeSelected !== "-") searchOptions+="&attribute="+this.state.mediaSelected
        this.props.optionsCallback(searchOptions)
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="mediaSelector">Media Type</Label>
                    {this.displayType()}
                </FormGroup>
                <FormGroup>
                    <Label for="entitySelector">Entity</Label>
                    {this.displayEntities()}
                </FormGroup>
                <FormGroup>
                    <Label for="attributeSelector">Attribute</Label>
                    {this.displayTypeAttributes()}
                </FormGroup>
            </Form>
        )
    }
}

export default AdvancedOptions;