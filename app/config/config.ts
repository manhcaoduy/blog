export interface titleTag {
  tag: string;
  title: string;
}

export interface MarkdownData {
  id: string;
  title: string;
  lastUpdate: string;
  contentHtml: string;
  tags: string[];
  description: string;
}

export const titleTags: titleTag[] = [
  {
    tag: 'life',
    title: 'Life',
  },
  {
    tag: 'technology',
    title: 'Technology',
  },
  {
    tag: 'book',
    title: 'Book',
  },
];

export const postDirectory = 'app/files/posts';
export const numPostsPerPage = 5;
