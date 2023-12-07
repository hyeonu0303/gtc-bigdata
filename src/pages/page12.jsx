import styled from "styled-components";

import Area from "../components/Area";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 60%;
`;

const Page12 = () => {
  return (
    <Area>
      <div>
        <h1>당신의 아름다운 선택이 아이들을 웃게 합니다.</h1>
      </div>
      <Body>
        <div>
          <Img src="/gtc-bigdata/img/happy_animal.png"></Img>
        </div>
        <div>
          <p>
            강동리본센터 (Gangdong Reborn Center)
            <br />
            서울특별시 강동구 양재대로81길 73 (성내동)
          </p>
          <p>
            서울고양이입양카페 (Seoul Cat Adoption Cafe)
            <br />
            서울 구로구 경인로 472
          </p>
          <p>
            천안 유기동물보호소 (Cheonan Animal Shelter)
            <br />
            충청남도 천안시 동남구 충절로 437(삼룡동)
          </p>
          <p>
            비글구조네트워크 (Beagle Rescue Network)
            <br />
            충남 논산시 벌곡면 검천길 272
          </p>
          <p>
            대전동물보호센터 (Daejeon Animal Shelter)
            <br />
            대전광역시 유성구 금남구즉로 1234 (금고동)
          </p>
          <p>
            군산유기동물보호센터 (Gunsan Animal Shelter)
            <br />
            전라북도 군산시 대야면 보덕안정길 108-20
          </p>
        </div>
      </Body>
    </Area>
  );
};

export default Page12;
