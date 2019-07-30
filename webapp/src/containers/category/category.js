import React, {Component} from 'react';
import {
  Collapse,
  Row,
  Jumbotron,
  Button,
} from 'reactstrap';
import CardItem from '../../components/cardItem/cardItem.js';

class Category extends Component {
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
  return(
    <Jumbotron>
      <Row>
        <h2>{this.props.categoryName.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
        <Button color="info" onClick={this.toggle} style={{margin : "0 0 1em 1em"}}>{(!this.state.collapse) ? "▼" : "▲"}</Button>
      </Row>
      <Collapse isOpen={this.state.collapse}>
        {this.props.categoryData
          .map(item => {
            return <CardItem key={item.id+"category"} item={item} likeCallback={this.props.likeCallback}/>
          })}
      </Collapse>
    </Jumbotron>
    )
  }
}

export default Category;