import React, { Component } from 'react'

class SortButton extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    const clickedButtonId = event.target.id
    const previousEl = document.querySelector('.is-selected')

    if (previousEl) {
      previousEl.classList.remove('is-selected')

      const i = previousEl.querySelector('i')
      i.classList.remove('fa-sort-up')
      i.classList.add('fa-sort-down')

      if (previousEl.id === clickedButtonId) {
        this.props.handleSort('')
        return
      }
    }

    const i = event.target.querySelector('i')
    i.classList.remove('fa-sort-down')
    i.classList.add('fa-sort-up')

    event.target.classList.add('is-selected')
    this.props.handleSort(clickedButtonId)
  }

  render() {
    return (
      <button
        className="filters__item"
        onClick={this.onClick}
        id={this.props.id}
      >
        {this.props.description}
        <i className="fas fa-sort-down" />
      </button>
    )
  }
}

export default SortButton
