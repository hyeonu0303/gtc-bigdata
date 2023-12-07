import styled from 'styled-components';

import Area from '../components/Area';

const ImgArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 이미지의 비율 유지 */
  margin: 20px;
`

const RedText = styled.span`
color: red; /* 빨간색 텍스트 색상 설정 */
`


const Page6 = () => {
  return (
    <Area>
      <h1>그렇다면, 사람들은 <RedText>왜 동물을 버릴까요?</RedText></h1>
      <ImgArea>
        <Img src="/gtc-bigdata/img/abandoned_animal_2.jpg"></Img>
        <Img src="/gtc-bigdata/img/abandoned_animal_3.jpg"></Img>
      </ImgArea>
    </Area>
  );
}

export default Page6;
