import styled from 'styled-components';

function NoData() {
  return (
    <Container>
      <Text>데이터가 없습니다 :(</Text>
    </Container>
  );
}

export default NoData;

const Container = styled.div`
  padding: 15vw 0;
`;

const Text = styled.p`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 1vw;

  @media (max-width: 1024px) {
    font-size: 1.6vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
