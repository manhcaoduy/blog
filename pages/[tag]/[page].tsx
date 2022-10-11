import Posts from '../../app/components/posts';
import {
  MarkdownData,
  numPostsPerPage,
  titleTags,
} from '../../app/config/config';
import { getAllMarkdownData } from '../../app/lib/utils/post/post';
import { uniqueSlice } from '../../app/lib/utils/slice/slice';

interface Props {
  posts: MarkdownData[];
  currentPage: number;
  numPages: number;
}

export async function getStaticPaths() {
  const numPostsPerTags = new Map<string, number>();
  const postTags: string[] = titleTags.map((tag) => tag.tag);

  const posts = await getAllMarkdownData();
  for (const post of posts) {
    for (const tag of post.tags) {
      postTags.push(tag);
      const numPosts: number = (numPostsPerTags.get(tag) || 0) + 1;
      numPostsPerTags.set(tag, numPosts);
    }
  }
  const uniquePostTags = uniqueSlice(postTags);

  const paths: { params: { tag: string; page: string } }[] = [];
  for (const tag of uniquePostTags) {
    const numPosts = numPostsPerTags.get(tag) || 0;
    const numPages = Math.floor((numPosts + numPostsPerPage) / numPostsPerPage);
    for (let page = 0; page < numPages; page++) {
      paths.push({
        params: {
          tag,
          page: page.toString(),
        },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const allPosts = await getAllMarkdownData();
  const taggedPosts = allPosts.filter((post) => post.tags.includes(params.tag));
  const numPages = Math.floor(
    (taggedPosts.length + numPostsPerPage) / numPostsPerPage,
  );
  const currentPage = Number(params.page);
  const posts = taggedPosts.slice(
    currentPage * numPostsPerPage,
    (currentPage + 1) * numPostsPerPage,
  );
  return {
    props: {
      posts,
      numPages,
      currentPage,
    },
  };
}

export default function Tags({ posts, numPages, currentPage }: Props) {
  return <Posts posts={posts} numPages={numPages} currentPage={currentPage} />;
}
