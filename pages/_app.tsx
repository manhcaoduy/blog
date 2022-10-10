import Footer from '../app/components/footer';
import Header from '../app/components/header';
import Layout from '../app/components/layout';
import '../styles/globals.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const element = Component.getLayout ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  );

  return (
    <>
      <Layout>
        <div className={'flex flex-col h-full h-min min-h-screen'}>
          <div>
            <Header />
          </div>
          <div className={'grow'}>{element}</div>
          <div>
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
