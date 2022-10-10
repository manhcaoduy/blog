import { defaultPostTags } from '../lib/helper/post';
import Link from 'next/link';

export default function Header() {
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
          {defaultPostTags.map((tag) => (
            <>
              <Link href={`/${tag}`}>
                <a className={'text-blue-200 font-bold underline'}>Abc</a>
              </Link>
            </>
          ))}
          <Link href="/about">
            <a className={'text-blue-200 font-bold underline'}>About</a>
          </Link>
        </div>
      </div>
    </>
  );
}
