import { Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/" exact>
        Головна
      </Link>

      <Link to="/phonebook" exact>
        Телефонна книга
      </Link>
    </nav>
  );
};
