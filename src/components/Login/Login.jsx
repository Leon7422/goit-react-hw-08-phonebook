import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form, Label, Container } from './Login.styled';
import { login } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <h1>Сторінка логіну</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <button type="submit">Увійти</button>
      </Form>
    </Container>
  );
};
