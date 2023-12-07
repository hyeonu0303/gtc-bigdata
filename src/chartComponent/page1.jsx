import styled from 'styled-components';
import Container from '../components/Container';

const Img = styled.img`
  width: 40%;
`

function App() {
  return (
    <Container>
      <h1>반려동물 및 유기동물에 관한 빅데이터 분석 및 시각화</h1>
      <h3>Team G T C</h3>
      <Img src='src\assets\img\Challenger.png'></Img>

    </Container>
  );
}

export default App;
