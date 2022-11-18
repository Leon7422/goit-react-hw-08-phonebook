import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import defaultAvatar from './default-avatar.png';
import { Container, Img, Name } from './UserMenu.styled';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Img src={avatar} alt="" width="32" />
      <Name>Привіт, {name}</Name>
      <button type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </button>
    </Container>
  );
};
