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
      oldData: [],
      isLoading: false,
    }

    this.onKeyUp = this.onKeyUp.bind(this)
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    fetch(API_URL)
      .then((response) => response.json())
      .then((response) =>
        this.setState({ data: response, oldData: response, isLoading: false })
      )
  }

  sortItems(sortBy) {
    let result

    if (sortBy) {
      const mapped = this.state.data.map((element, index) => ({
        index,
        value: element[sortBy],
      }))

      const sortedContacts = mapped.sort((a, b) => {
        return +(a.value > b.value) || +(a.value === b.value) - 1
      })

      result = sortedContacts.map((el) => this.state.data[el.index])
    } else {
      result = this.state.oldData
    }

    this.setState({
      data: result,
    })
  }

  debounceEvent = (fn, wait = 1000, time) => (...args) =>
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)))

  onKeyUp(value) {
    let contacts = this.state.oldData.slice()

    if (!!value) {
      contacts = contacts.filter((contact) => {
        let hasFilter = false
        for (let prop in contact) {
          if (
            contact[prop] !== 'avatar' &&
            contact[prop].toLowerCase().includes(value.toLowerCase())
          ) {
            hasFilter = true
            break
          }
        }

        return hasFilter
      })
    }

    this.setState({
      data: contacts,
    })
  }

  render() {
    const { data, isLoading } = this.state
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          handleSort={(sortBy) => this.sortItems(sortBy)}
          handleKeyUp={this.debounceEvent(this.onKeyUp, 500)}
        />
        <Contacts contacts={data} isLoading={isLoading} />
      </React.Fragment>
    )
  }
}

export default App
