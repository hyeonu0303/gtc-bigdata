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
      <Title>여러분은 반려동물을 버려본 적이 있으신가요?</Title>
      <Img src="/gtc-bigdata/img/abandoned_animal.png"></Img>
    </Area>
  );
}

export default Page4;
