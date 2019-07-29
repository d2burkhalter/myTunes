import React, {Component} from 'react';
import startData from "../src/BATMAN.json";
import Category from './containers/category/category.js';
import Header from './containers/header/header.js'
import {Spinner} from 'reactstrap'

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          hasFavorites: false,
          hasData: true,
          inputData: startData,
          isLoading: false
      };
  }
  callBackData = (newData) => {
    this.setState({
      inputData: newData
    })
  }
  callBackLoading = (status) => {
    this.setState({
      isLoading: status
    })
  }
  displayData(data) {
    var output = []
    for(var key in data) {
      if(key === "undefined") continue
      output.push(<Category key={key} categoryName={key} categoryData={data[key]}/>)
    }
    return output
  }
  render() {
      return (
          <div>
              <Header dataCallback={this.callBackData} loadingCallback={this.callBackLoading}/>
              {(this.state.isLoading) ? 
                <Spinner color="secondary" style={{width: "25vw", height: "25vw", position: "absolute", left: "35%", top: "40%"}}/>
                : this.displayData(this.state.inputData)}
          </div>
      );
  }
}

export default App;
