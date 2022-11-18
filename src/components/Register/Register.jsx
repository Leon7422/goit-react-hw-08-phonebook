import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form, Label, Container } from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Сторінка реєстрації</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Ім'я
          <input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label>
          Пошта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <button type="submit">Зареєструватись</button>
      </Form>
    </Container>
  );
};
