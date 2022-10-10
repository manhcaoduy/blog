import { getMarkdownData, MarkdownData } from '../../app/lib/helper/markdown';
import { getAllPostIds } from '../../app/lib/helper/post';

interface Props {
  markdownData: MarkdownData;
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
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
      {markdownData.title}
      <br />
      {markdownData.lastUpdate}
      <br />
      <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
    </>
  );
}
