import React, {Component} from 'react';
import data from "../src/BATMAN.json";
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
  InputGroup,
  Media
} from 'reactstrap';

class App extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
          collapse: false,
          hasFavorites: false,
          hasData: true,
          inputData: data
      };
  }
  toggle() {
      this.setState({
          collapse: !this.state.collapse
      });
  }
  displayItem(item) {
    return (
      <Media key={item.name}>
        <Media left >
          <img src={item.artwork} alt="pic"/>
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
  displayCategory(name, category) {
    return(
      <Jumbotron key={name}>
      <h2>{name}</h2>
      {category.map(item => {
        return <Card>{this.displayItem(item)}</Card>
      })}
      </Jumbotron>
    )
  }
  displayData() {
    console.log(data)
    var output = []
    for(var key in data) {
      output.push(this.displayCategory(key, data[key]))
    }
    return output
  }
  render() {
      return (
          <div>
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
              
                {this.displayData()}
              
          </div>
      );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
