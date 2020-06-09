import React, { useState } from 'react';

const Filters = (props) => {
  const [selectedButton, setSelectedButton] = useState('');

  function handleSortButtonClick(event) {
    const className = 'is-selected';
    const { id: currentBtnId } = event.target;

    if (selectedButton && currentBtnId !== selectedButton) {
      const oldSelectedButton = document.querySelector(`#${selectedButton}`);
      const iElement = oldSelectedButton.querySelector('i');

      oldSelectedButton.classList.remove(className);
      iElement.classList.remove('fa-sort-up');
      iElement.classList.add('fa-sort-down');
    }

    event.target.classList.toggle(className);
    const iElement = event.target.querySelector('i');
    iElement.classList.toggle('fa-sort-down');
    iElement.classList.toggle('fa-sort-up');

    setSelectedButton(currentBtnId);
    props.sort(currentBtnId);
  }

  return (
    <div className="container" data-testid="filters">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            onKeyUp={(event) => props.filterItems(event.target.value)}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          id="name"
          className="filters__item"
          onClick={handleSortButtonClick}
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          id="country"
          className="filters__item"
          onClick={handleSortButtonClick}
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          id="company"
          className="filters__item"
          onClick={handleSortButtonClick}
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          id="department"
          className="filters__item"
          onClick={handleSortButtonClick}
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          id="admissionDate"
          className="filters__item"
          onClick={handleSortButtonClick}
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
