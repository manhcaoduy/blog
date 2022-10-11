import Posts from '../app/components/posts';
import { MarkdownData } from '../app/lib/helper/markdown/markdown';
import { getAllMarkdownData } from '../app/lib/helper/post/post';
import { titleTags } from '../app/lib/helper/post/post.const';

interface Props {
  posts: MarkdownData[];
}

export async function getStaticPaths() {
  const posts = await getAllMarkdownData();
  const postTags: string[] = titleTags.map(tag => tag.tag);
  console.log(`\n\n\n${postTags}\n\n\n`)
  for (const post of posts) {
    postTags.push(...post.tags);
  }
  return {
    paths: postTags.map((tag) => ({
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
