import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register" exact>
        Реєстрація
      </Link>
      <Link to="/login" exact>
        Логін
      </Link>
    </div>
  );
};
