import React from 'react'
import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

import './App.scss'

const API_URL = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => this.setState({ data: response, isLoading: false }))
  }

  sortItems(sortBy) {
    const mapped = this.state.data.map((element, index) => ({
      index,
      value: element[sortBy],
    }))

    const sortedContacts = mapped.sort((a, b) => {
      return +(a.value > b.value) || +(a.value === b.value) - 1
    })

    const result = sortedContacts.map((el) => this.state.data[el.index])
    this.setState({
      data: result,
    })
  }

  render() {
    const { data, isLoading } = this.state
    return (
      <React.Fragment>
        <Topbar />
        <Filters handleSort={(sortBy) => this.sortItems(sortBy)} />
        <Contacts contacts={data} isLoading={isLoading} />
      </React.Fragment>
    )
  }
}

export default App
