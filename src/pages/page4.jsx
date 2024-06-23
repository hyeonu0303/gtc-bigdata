import styled from 'styled-components';

import Area from '../components/Area';

const Img = styled.img`
  width: 60%;
`
const Title = styled.h1`
  color: black;
`

const Page4=()=> {
  return (
    <Area>
      <Title>반려동물을 끝까지 책임져주세요!</Title>
      <Img src="/gtc-bigdata/img/abandoned_animal.png"></Img>
    </Area>
  );
}

export default Page4;
