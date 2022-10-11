import { getMarkdownData, MarkdownData } from '../../app/lib/helper/markdown/markdown';
import { getAllPostIds } from '../../app/lib/helper/post/post';

interface Props {
  markdownData: MarkdownData;
}

export async function getStaticPaths() {
  const postIds = getAllPostIds();
  return {
    paths: postIds.map((postId) => ({
      params: {
        id: postId,
      },
    })),
    fallback: false,
  };
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const markdownData = await getMarkdownData(params.id);
  return {
    props: {
      markdownData,
    },
  };
}

export default function Post({ markdownData }: Props) {
  return (
    <>
      <div className={'font-bold text-xl'}>{markdownData.title}</div>
      <br />
      <div className={'font-sm'}>
        <span className={'font-bold'}>{markdownData.lastUpdate}</span>
      </div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
    </>
  );
}
