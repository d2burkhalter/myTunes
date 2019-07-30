import React, {Component} from "react"
import {
  Collapse,
  Row
} from 'reactstrap';
import CardItem from '../../components/cardItem/cardItem.js';
import Panel from "../../components/panel/panel.js";
import CollapseButton from "../../components/collapseButton/collapseButton.js";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
    collapse: true,
    };
  }
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Panel>
        <Row>
          <h2>Favorites</h2>
          <CollapseButton toggle={this.toggle} collapse={this.state.collapse}/>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          {this.props.favoriteData
            .map(item => {
              return <CardItem key={item.id+"favorite"} item={item} likeCallback={this.props.likeCallback}/>
            })}
        </Collapse>
      </Panel>
    )
  }
}

export default Favorites;