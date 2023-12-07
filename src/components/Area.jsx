import styled from "styled-components";

// Container 컴포넌트 정의
const Area = styled.div`
  width: ${props=>props.width||'auto'};
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 30px;
`;

export default Area; // Container 내보내기
