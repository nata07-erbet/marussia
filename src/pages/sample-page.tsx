import React, { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

type SamplePageProps = {
    children: ReactNode // почему нк вышло с PropsWithChildren<{}>
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