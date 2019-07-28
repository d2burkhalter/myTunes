import React, {Component} from 'react';
import {
  Collapse,
  CardBody,
  Card,
  Container,
  Row,
  Col,
  Jumbotron,
  Button, 
  Input,
  InputGroup
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }
  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
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
                <Input placeholder="search"/>
                <Button
                color="secondary"
                size="large"
                >>
                </Button>
              </InputGroup>
            </Row>
            <Row>
              <h5 style={{marginRight: "1em"}}>Advanced Search</h5>
              <Button color="info" onClick={this.toggle} >{(!this.state.collapse) ? "▼" : "▲"}</Button>
            </Row>
            <Row>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    TODO ADVANCED SEARCH OPTIONS
                  </CardBody>
                </Card>
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