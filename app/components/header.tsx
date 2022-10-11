import Link from 'next/link';
import { titleTag, titleTags } from '../lib/helper/post/post.const';

interface Props {
  categories: titleTag[];
}

export async function getStaticProps() {
  return {
    props: {
      categories: titleTags
    }
  }
}

export default function Header({categories}: Props) {
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
          {titleTags.map((tag) => (
            <>
              <Link href={`/${tag.tag}`}>
                <a className={'text-blue-200 font-bold underline'}>{tag.title}</a>
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
