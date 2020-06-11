import React, { Component } from 'react'
import SortButton from './SortButton'

class Filters extends Component {
  render() {
    return (
      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onKeyUp={(event) => this.props.handleKeyUp(event.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <SortButton
            description="Nome"
            handleSort={this.props.handleSort}
            id="name"
          />
          <SortButton
            description="País"
            handleSort={this.props.handleSort}
            id="country"
          />
          <SortButton
            description="Empresa"
            handleSort={this.props.handleSort}
            id="company"
          />
          <SortButton
            description="Departamento"
            handleSort={this.props.handleSort}
            id="department"
          />
          <SortButton
            description="Data de admissão"
            handleSort={this.props.handleSort}
            id="admissionDate"
          />
        </section>
      </div>
    )
  }
}

export default Filters
