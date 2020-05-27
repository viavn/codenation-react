import React from 'react'

class Filters extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className="filters__item is-selected"
            id="name"
            onClick={() => this.props.handleSort('name')}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" id="country">
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" id="company">
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" id="department">
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item" id="admissionDate">
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    )
  }
}

export default Filters
