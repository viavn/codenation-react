import React from 'react'
import Contact from './Contact'
import Loading from './Loading'

class Contacts extends React.Component {
  renderContact(contact) {
    return <Contact contact={contact} key={contact.id} />
  }
  render() {
    if (this.props.isLoading) return <Loading />

    const contacts = this.props.contacts.map((c) => this.renderContact(c))

    return (
      <div className="container">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>

          {contacts}
        </section>
      </div>
    )
  }
}

export default Contacts
