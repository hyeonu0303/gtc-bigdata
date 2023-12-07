import styled from 'styled-components';

import Area from '../components/Area';

const Img = styled.img`
  width: 60%;
`


const Page2=()=> {
  return (
    <Area>
      <h1>여러분은 반려둥물을 키우고 계신가요?</h1>
      <Img src="/img/cutepet.png"></Img>
    </Area>
  );
}

export default Page2;
