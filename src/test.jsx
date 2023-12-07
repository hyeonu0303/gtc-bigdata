import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled component for the Container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &.animate {
    animation: ${fadeIn} 2s forwards;
  }
`;

// React Functional Component
const Test = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item has to be visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <>
      <Container>
        <h1>Scroll down to see the animation</h1>
      </Container>
      <Container ref={ref} className={isVisible ? 'animate' : ''}>
        <h1>Hello, I'm animated!</h1>
      </Container>
    </>
  );
};

export default Test;
