import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Головна</Link>

      <Link to="/phonebook">Телефонна книга</Link>
    </nav>
  );
};
