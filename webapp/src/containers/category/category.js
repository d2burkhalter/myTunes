import React, {Component} from 'react';
import {
    Collapse,
    Card,
    Row,
    Jumbotron,
    Button, 
    Media
  } from 'reactstrap';

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
    displayItem(item) {
        return (
            <Media>
                <Media left >
                    <img src={item.artwork} alt="pic" style={{marginRight : "1em"}}/>
                </Media>
                <Media body>
                    <Media heading>
                    {item.name}
                    </Media>
                    <p>{item.genre}</p>
                    <a href={item.url}>iTunes link</a>
                </Media>
            </Media>
        )
    }

    render() {
        return(
            <Jumbotron>
                <Row>
                    <h2>{this.props.categoryName.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                    <Button color="info" onClick={this.toggle} style={{margin : "0 0 1em 1em"}}>{(!this.state.collapse) ? "▼" : "▲"}</Button>
                </Row>
                    <Collapse isOpen={this.state.collapse}>
                    {this.props.categoryData.map(item => {return <Card key={item.id} style={{padding : "5px"}}>{this.displayItem(item)}</Card>
                    })}
                </Collapse>
            </Jumbotron>
        )
    }
}

export default Category;