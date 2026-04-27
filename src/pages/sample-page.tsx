import React, { ReactNode } from 'react';
import styled from 'styled-components';

type SamplePageProps = {
    children?: ReactNode
};

const Wrapper = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;


function SamplePage ({ children }: SamplePageProps ) {
  return (
      <Wrapper>
        {children}
      </Wrapper>
  );
}

export { SamplePage, type SamplePageProps };