import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <>
      <div className={'pt-10 mb-10'}>
        <div>
          <div>======================</div>
          <div>
            ===={' '}
            <Link href="/">
              <a className={'text-blue-200 font-bold'}>Manh Cao Duy</a>
            </Link>{' '}
            ====
          </div>
          <div>======================</div>
        </div>
        <div>
          <div className={'float-right'}>A blog for myself</div>
          <div className={'clear-right'} />
        </div>
        <div className={'flex gap-4'}>
          <Link href="/life">
            <a className={'text-blue-200 font-bold underline'}>Life</a>
          </Link>
          <Link href="/technology">
            <a className={'text-blue-200 font-bold underline'}>Technology</a>
          </Link>
          <Link href="/about">
            <a className={'text-blue-200 font-bold underline'}>About</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
