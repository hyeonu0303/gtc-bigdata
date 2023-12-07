import { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// import PersonDogOwner from './chartComponent/PersonDog';
import Page1 from './pages/page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3'
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page18 from './pages/Page18';
import Page12 from './pages/Page12';

// 페이드인 애니메이션 정의
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// 스타일링된 페이지 컴포넌트
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0;
  &.visible {
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;

function App() {
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const page4Ref = useRef(null);
  const page5Ref = useRef(null);
  const page6Ref = useRef(null);
  const page7Ref = useRef(null);
  const page8Ref = useRef(null);
  const page9Ref = useRef(null);
  const page10Ref = useRef(null);
  const page11Ref = useRef(null);
  const page18Ref = useRef(null);
  const page12Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.5, // 50% 이상 보여질 때
      }
    );

    observer.observe(page1Ref.current);
    observer.observe(page2Ref.current);
    observer.observe(page3Ref.current);
    observer.observe(page4Ref.current);
    observer.observe(page5Ref.current);
    observer.observe(page6Ref.current);
    observer.observe(page7Ref.current);
    observer.observe(page8Ref.current);
    observer.observe(page9Ref.current);
    observer.observe(page10Ref.current);
    observer.observe(page11Ref.current); 
    observer.observe(page18Ref.current); 
    observer.observe(page11Ref.current);
    observer.observe(page12Ref.current);


    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Container ref={page1Ref}>
        <Page1/>
      </Container>
      <Container ref={page2Ref}>
        <Page2/>
      </Container>
      <Container ref={page3Ref}>
        <Page3/>
      </Container>
      <Container ref={page4Ref}>
        <Page4/>
      </Container>
      <Container ref={page5Ref}>
        <Page5/>
      </Container>
      
      <Container ref={page6Ref}>
        <Page6/>
      </Container>
      <Container ref={page7Ref}>
        <Page7/>
      </Container>

      <Container ref={page8Ref}>
        <Page8/>
      </Container>
      <Container ref={page9Ref}>
        <Page9/>
      </Container>
      <Container ref={page10Ref}>
        <Page10/>
      </Container>

      <Container ref={page11Ref}>
        <Page11/>
      </Container>
      <Container ref={page18Ref}>
        <Page18/>
      </Container>
      <Container ref={page12Ref}>
        <Page12/>
      </Container>
    </>
  );
}

export default App;
