import React, { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

type SamplePageProps = {
    children?: ReactNode
}

function SamplePage ({ children }: SamplePageProps ) {
  return (
    <>
      <Header />
      <>
      {children}
      </>
      <Footer />
    </>
  );
}

export { SamplePage, type SamplePageProps };