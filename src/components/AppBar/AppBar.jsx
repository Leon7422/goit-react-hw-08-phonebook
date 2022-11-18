import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AppBarContainer } from './AppBar.styled';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
      <AppBarContainer>
        <Navigation />
        {/*         <AuthNav />
        <UserMenu /> */}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarContainer>
    </>
  );
};
