import styled from 'styled-components';
import Area from '../components/Area';

const Img = styled.img`
  width: 40%;
`

const Page1=() => {
  return (
    <Area>
      <h1>반려동물 및 유기동물에 관한 빅데이터 분석 및 시각화</h1>
      <h3>Team G T C</h3>
      <p>20210814 이채원<br/>20200906 권회민<br/>20202056 박현우<br/></p>
      <Img src='/img/Challenger.png'></Img>
      
    </Area>
  );
}

export default Page1;
