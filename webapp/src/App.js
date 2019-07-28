import React, {Component} from 'react';
import data from "../src/BATMAN.json";
import Category from './containers/category/category.js';
import Header from './containers/header/header.js'

class App extends Component {
  constructor(props) {
      super(props);

      
      this.state = {
          hasFavorites: false,
          hasData: true,
          inputData: data
      };
  }
  displayData() {
    var output = []
    for(var key in data) {
      output.push(<Category categoryName={key} categoryData={data[key]}/>)
    }
    return output
  }
  render() {
      return (
          <div>
              <Header/>
              {this.displayData()}
          </div>
      );
  }
}

export default App;
