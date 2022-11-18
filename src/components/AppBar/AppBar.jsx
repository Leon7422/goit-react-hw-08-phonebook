import { AuthNav } from './AuthNav/AuthNav';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <AppBarContainer>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </AppBarContainer>
    </>
  );
};
