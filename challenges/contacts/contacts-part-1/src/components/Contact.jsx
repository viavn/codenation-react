import React from 'react'

class Contact extends React.Component {
  getFormatedDate(date) {
    const newDate = new Date(Date.parse(date))
    const day = newDate.getDate().toString().padStart(2, '0')
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0')

    return `${day}/${month}/${newDate.getFullYear()}`
  }

  render() {
    const {
      avatar,
      name,
      phone,
      country,
      company,
      department,
      admissionDate,
    } = this.props.contact

    return (
      <>
        <article className="contact">
          <span className="contact__avatar">
            <img src={avatar} alt={name} />
          </span>
          <span className="contact__data">{name}</span>
          <span className="contact__data">{phone}</span>
          <span className="contact__data">{country}</span>
          <span className="contact__data">
            {this.getFormatedDate(admissionDate)}
          </span>
          <span className="contact__data">{company}</span>
          <span className="contact__data">{department}</span>
        </article>
      </>
    )
  }
}

export default Contact
