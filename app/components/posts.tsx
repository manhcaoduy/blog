import { MarkdownData } from '../config/config';
import Link from 'next/link';

interface Props {
  tag: string;
  posts: MarkdownData[];
  currentPage: number;
  numPages: number;
}

export default function Posts({ posts, currentPage, numPages, tag }: Props) {
  return (
    <>
      <div className={"flex gap-2 text-center my-5 text-base"}>
        {
          (currentPage != 0) && (
            <Link href={`/${tag}/${currentPage-1}`}>
              <a className={"hover:text-red-400 font-bold"}>{`<`}</a>
            </Link>
          )
        }
        <div>Pages {currentPage + 1} / {numPages}</div>
        {
          (currentPage < numPages - 1) && (
            <Link href={`/${tag}/${currentPage+1}`}>
              <a className={"hover:text-red-400 font-bold"}>{`>`}</a>
            </Link>
          )
        }
      </div>
      {posts.map((post) => (
        <div key={post.id} className={"my-5"}>
          <div>
            <div>
              <Link href={`/post/${post.id}`}>
                <a
                  className={
                    'text-blue-200 font-bold underline font-bold text-xl'
                  }
                >
                  {post.title}
                </a>
              </Link>
            </div>
            <div className={'font-sm float-right'}>
              <span className={'font-bold'}>{post.lastUpdate}</span>
            </div>
            <div className={'clear-right'}></div>
            <div className={'font-sm'}>{post.description}</div>
          </div>
        </div>
      ))}
    </>
  );
}
