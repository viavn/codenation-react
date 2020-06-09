import React from 'react';

const Contact = (props) => {
  const {
    avatar,
    name,
    phone,
    country,
    company,
    department,
    admissionDate,
  } = props.data;

  function getFormatedDate(date) {
    const newDate = new Date(Date.parse(date));
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');

    return `${day}/${month}/${newDate.getFullYear()}`;
  }

  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <img src={avatar} alt={name} />
      </span>
      <span className="contact__data" data-testid="contact-name">
        {name}
      </span>
      <span className="contact__data" data-testid="contact-phone">
        {phone}
      </span>
      <span className="contact__data" data-testid="contact-country">
        {country}
      </span>
      <span className="contact__data" data-testid="contact-date">
        {getFormatedDate(admissionDate)}
      </span>
      <span className="contact__data" data-testid="contact-company">
        {company}
      </span>
      <span className="contact__data">{department}</span>
    </article>
  );
};

export default Contact;
