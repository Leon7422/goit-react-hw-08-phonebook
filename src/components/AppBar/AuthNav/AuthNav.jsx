import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Реєстрація</Link>
      <Link to="/login">Логін</Link>
    </div>
  );
};
