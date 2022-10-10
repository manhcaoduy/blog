import Posts from '../app/components/posts';
import { MarkdownData } from '../app/lib/helper/markdown';
import { getAllMarkdownData } from '../app/lib/helper/post';

const defaultPostTags = ['life', 'technology'];

interface Props {
  posts: MarkdownData[];
}

export async function getStaticPaths() {
  const posts = await getAllMarkdownData();
  const postTags: string[] = defaultPostTags;
  for (const post of posts) {
    postTags.push(...post.tags);
  }
  // @ts-ignore
  const uniquePostTags = [...new Set(postTags)];
  return {
    paths: uniquePostTags.map((tag) => ({
      params: {
        id: tag,
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const allPosts = await getAllMarkdownData();
  const posts = allPosts.filter((post) => post.tags.includes(params.id));
  return {
    props: {
      posts,
    },
  };
}

export default function Tags({ posts }: Props) {
  return <Posts posts={posts} />;
}
