import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={'bg-black min-h-screen text-white text-[14px] font-mono'}>
        <div className={'mx-auto max-w-screen-sm h-full min-h-screen'}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
