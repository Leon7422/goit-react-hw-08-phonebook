import { Title, Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <Title>
        Привіт, це головна сторінка телефонної кники
        <span role="img" aria-label="іконка привітання">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
};
