import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';
import UserProfile from '../UserProfile';

import './UserForm.scss';

const BASE_URL = 'https://5e7d0266a917d70016684219.mockapi.io/api/v1';
const URL_USERS = `${BASE_URL}/users`;

const defaultUser = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  avatar: 'https://source.unsplash.com/collection/895539/500x500',
};

const UserForm = () => {
  const [formData, setFormData] = useState(defaultUser);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, username, email, avatar } = formData;

    const newUser = {
      name,
      username,
      email,
      avatar,
    };

    const requestOptions = new Request(URL_USERS, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });

    try {
      const response = await fetch(requestOptions);

      if (response.ok) {
        setShowSuccessMessage((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <UserProfile {...formData} />

      <section className="post__form" data-testid="user-form">
        <div className="container">
          <form className="post__form__wrapper" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: Fulano da Silva"
              onChange={handleInputChange}
              value={formData.name}
            />

            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ex: fulano_da_silva"
              onChange={handleInputChange}
              value={formData.username}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Ex: fulano@provedor.com"
              onChange={handleInputChange}
              value={formData.email}
            />

            <label htmlFor="avatar">
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              placeholder="http://..."
              onChange={handleInputChange}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </section>

      {showSuccessMessage && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
