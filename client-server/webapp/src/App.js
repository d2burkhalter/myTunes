import React, {Component} from 'react';
import Favorites from './containers/favorites/favorites.js'
import Category from './containers/category/category.js';
import Header from './containers/header/header.js'
import {Spinner} from 'reactstrap'
import FadeBottom from './components/fadeBottom/fadeBottom.js';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          hasData: true,
          inputData: {},
          isLoading: false,
          showError: false,
          favoriteData : []
      };
  }

  componentDidMount() {
    const store = window.localStorage
    const startFaves = JSON.parse(store.getItem("storedData") || "[]")
    this.setState({
      favoriteData: startFaves
    })
  }

  callBackData = (newData) => {
    if(Object.entries(newData).length === 0 && newData.constructor === Object) {
      this.setState({
        showError: true,
        inputData: {}
      })
    } else {
      const data = newData
      const favData = this.state.favoriteData
      for(let key in data) {
        data[key].forEach(item => {
          return (favData.findIndex(favorite => favorite.id === item.id) > -1) ? item.isLiked=true : item.isLiked=false;
        })
      }
      this.setState({
        inputData: newData,
        showError: false
      })
    }
  }

  callBackLoading = (status) => {
    this.setState({
      isLoading: status
    })
  }

  callBackLike = (likeInfo, isLiked) => {
    const curLikes = this.state.favoriteData
    const curData = this.state.inputData
    const store = window.localStorage
    let newFavData
    let newData = {...curData}
    if(isLiked) {
      newFavData = curLikes.filter(item => item.id !== likeInfo.id)
      for(let key in newData) {
        newData[key].forEach(item => {
          return (likeInfo.id === item.id) ? item.isLiked=false : null;
        })
      }
      store.setItem("storedData", JSON.stringify(newFavData))
    } else {
      likeInfo.isLiked = true
      newFavData = [...curLikes, likeInfo]
      for(let key in newData) {
        newData[key].forEach(item => {
          return (likeInfo.id === item.id) ? item.isLiked=true : null;
        })
      }
      store.setItem("storedData", JSON.stringify(newFavData))
    }
    this.setState({
      favoriteData : newFavData,
      inputData: newData
    })
  }

  displayData(data) {
    var output = []
    for(var key in data) {
      if(key === "undefined") continue
      output.push(<Category likeCallback={this.callBackLike} key={key} categoryName={key} categoryData={data[key]}/>)
    }
    return output
  }

  render() {
      return (
          <div style={{backgroundColor: "silver"}}>
              <Header dataCallback={this.callBackData} loadingCallback={this.callBackLoading} displayError={this.state.showError}/>
              <FadeBottom/>
              {(this.state.favoriteData.length > 0) ? <Favorites likeCallback={this.callBackLike} favoriteData={this.state.favoriteData}/> : null}
              {(this.state.isLoading) ? 
                <Spinner color="secondary" style={{width: "25vw", height: "25vw", position: "absolute", left: "35%", top: "40%"}}/>
                : this.displayData(this.state.inputData)}
          </div>
      );
  }
}

export default App;
