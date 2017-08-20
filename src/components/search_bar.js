import React, { Component } from 'react'

// define a new class and give access to functionality from react.component
// class based component below
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={evt => this.setState({term: evt.target.value}) } />
      </div>
    )
  }
}

export default SearchBar
