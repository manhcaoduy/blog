import { MarkdownData } from '../config/config';
import Link from 'next/link';

interface Props {
  posts: MarkdownData[];
  currentPage: number;
  numPages: number;
}

export default function Posts({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <div className={'mb-10'}>
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
            <br />
            <div className={'font-sm'}>
              <span className={'font-bold'}>{post.lastUpdate}</span>
            </div>
            <br />
          </div>
        </div>
      ))}
    </>
  );
}
