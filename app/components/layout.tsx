import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className={'bg-black min-h-screen text-white text-[14px] font-mono'}>
        <div className={'mx-auto max-w-screen-sm h-full min-h-screen'}>
          {children}
        </div>
      </div>
    </>
  );
}
