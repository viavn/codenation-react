import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import API_URL from './utils/ApiUtils';

import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterdContacts, setFilteredContacts] = useState([]);
  const [sortBy, setSortedBy] = useState('');
  const [hasSearchFilter, setHasSearchFilter] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setContacts(res);
        setFilteredContacts(res);
      });
  }, []);

  useEffect(() => {
    function sort() {
      const mapped = contacts.map((element, index) => ({
        index,
        value: element[sortBy],
      }));

      const sortedContacts = mapped.sort((a, b) => {
        return +(a.value > b.value) || +(a.value === b.value) - 1;
      });

      const sortedItems = sortedContacts.map((el) => contacts[el.index]);
      setFilteredContacts(sortedItems);
    }

    sort();
  }, [hasSearchFilter, sortBy, contacts]);

  function handleFilter(filterQuery) {
    let data = contacts.slice();

    if (!!filterQuery) {
      data = contacts.filter((contact) => {
        let hasFilter = false;
        for (let prop in contact) {
          if (
            contact[prop] !== 'avatar' &&
            contact[prop].toLowerCase().includes(filterQuery.toLowerCase())
          ) {
            hasFilter = true;
            break;
          }
        }

        return hasFilter;
      });
    }

    setFilteredContacts(data);
  }

  function handleSort(btnName) {
    const hasFilter = sortBy !== btnName;

    setSortedBy(hasFilter ? btnName : '');
    setHasSearchFilter(hasFilter);
  }

  const debounceEvent = (fn, wait = 1000, time) => (...args) =>
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

  return (
    <div data-testid="app" className="app">
      <Topbar />
      <Filters
        sort={handleSort}
        filterItems={debounceEvent(handleFilter, 500)}
      />
      <Contacts>
        {filterdContacts.map((contact) => (
          <Contact key={contact.id} data={contact} />
        ))}
      </Contacts>
    </div>
  );
};

export default App;
