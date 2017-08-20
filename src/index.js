import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDLsXIc0C_vkkKdvu-KfbE87e6BLr3LFG8'

// Create a new componenet. This componenet should produce some HTML
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      //this.setState({ videos: videos }) can only be used when they are the same
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// inject our component into the dom
ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
