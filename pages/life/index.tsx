import { getMarkdownData, MarkdownData } from '../../app/lib/helper/markdown';
import { getAllPostIds } from '../../app/lib/helper/post';
import Link from 'next/link';

interface Props {
  posts: MarkdownData[];
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const postIds = getAllPostIds();
  const posts: MarkdownData[] = [];
  for (const postId of postIds) {
    const markdownData = await getMarkdownData(postId);
    posts.push(markdownData);
  }

  return {
    props: {
      posts,
    },
  };
}

export default function Life({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <>
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
        </>
      ))}
    </>
  );
}
