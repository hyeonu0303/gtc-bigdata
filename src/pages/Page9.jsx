import styled from 'styled-components';

import Area from '../components/Area';

const Img = styled.img`
  width: 60%;
`
const Title = styled.h1`
  color: red;
`

const Page4=()=> {
  return (
    <Area>
      <Title>그렇다면, 도대체, 왜, 동물을 버릴까요?</Title>
      <Img src="/img/abandoned_animal.png"></Img>
    </Area>
  );
}

export default Page4;
