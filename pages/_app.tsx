import Footer from '../app/components/footer';
import Header from '../app/components/header';
import Layout from '../app/components/layout';
import { AppPropsWithLayout } from '../app/types/layout';
import '../styles/globals.css';

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
